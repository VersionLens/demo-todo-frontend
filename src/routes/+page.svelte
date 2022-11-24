<script>
	import { query } from 'svelte-apollo';
	import { GET_MY_TODOS } from '$lib/graphql/queries';
	import TodoCard from '$lib/components/TodoCard.svelte';

	const todos = query(GET_MY_TODOS);
</script>

{#if $todos.loading}
	Loading...
{:else if $todos.error}
	<h1>Error: {$todos.error.message}</h1>
{:else}
	<ul>
		{#each $todos.data.todos as todo}
			<div class="mb-4">
				<TodoCard title={todo.title} />
			</div>
		{/each}
	</ul>
{/if}
