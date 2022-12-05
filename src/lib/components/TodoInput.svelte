<script>
	import { createForm } from 'felte';
	import { validator } from '@felte/validator-yup';
	import * as yup from 'yup';

	const schema = yup.object({
		todo: yup.string().min(2).label('New todo').strip().required()
	});

	const { form, errors, data } = createForm({
		extend: validator({ schema }),
		onError: (errors) => {
			console.log(errors);
		},
		onSubmit: async (values) => {
			console.log(values);
		}
	});
</script>

<form use:form class="mt-1 sm:col-span-2 sm:mt-0 flex flex-1 items-center">
	<div class="mt-1 sm:col-span-2 sm:mt-0 flex flex-1">
		<input
			type="text"
			name="todo"
			id="todo"
			placeholder="Write a new todo here"
			class="flex flex-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
		/>
	</div>
	<button
		type="submit"
		class="ml-5 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
		>Add</button
	>
</form>
{#if $errors.todo}
	{#each $errors.todo as error}
		<p class="mt-2 text-sm text-red-600" id="email-error">{error}</p>
	{/each}
{/if}
