<script>
	import { query } from 'svelte-apollo';
	import { GET_MY_TODOS } from '$lib/graphql/queries';

	const todos = query(GET_MY_TODOS);
</script>

{#if $todos.loading}
	Loading...
{:else if $todos.error}
	<h1>Error: {$todos.error.message}</h1>
{:else}
	{#each $todos.data.todos as todo}
		<pre>TODO: {todo.title}</pre>
	{/each}
{/if}
