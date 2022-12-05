<script>
	import { query } from 'svelte-apollo';
	import { GET_MY_TODOS } from '$lib/graphql/queries';
	import TodoCard from '$lib/components/TodoCard.svelte';
	import TodoInput from '$lib/components/TodoInput.svelte';

	const todos = query(GET_MY_TODOS);
</script>

{#if $todos.loading}
	Loading...
{:else if $todos.error}
	<h1>Error: {$todos.error.message}</h1>
{:else if $todos.data.todos.length === 0}
	<TodoInput />
	<button
		type="button"
		class="mt-4 relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="mx-auto h-12 w-12 text-gray-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			/>
		</svg>

		<span class="mt-2 block text-sm font-medium text-gray-900">You don't have any todos yet</span>
	</button>
{:else}
	<TodoInput />
	<ul>
		{#each $todos.data.todos as todo}
			<div class="mt-4">
				<TodoCard id={todo.id} title={todo.title} />
			</div>
		{/each}
	</ul>
{/if}
