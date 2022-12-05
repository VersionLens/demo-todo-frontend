<script>
	export let id;
	export let title;
	export let description;

	const deleteTodo = (id) => {
		console.log(id);
	};
</script>

<li class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
	<div class="flex w-full items-center justify-between space-x-6 p-6">
		<div class="flex-1 truncate">
			<div class="flex items-center space-x-3">
				<h3 class="truncate text-xl font-medium text-gray-900">{title}</h3>
			</div>
			<p class="mt-1 truncate text-gray-500">{description || ''}</p>
		</div>
	</div>
	<div>
		<div class="-mt-px flex divide-x divide-gray-200">
			<div class="flex w-0 flex-1 hover:bg-gray-100">
				<div
					class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5 text-gray-400"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
					<span class="ml-3 text-normal">Remove</span>
				</div>
			</div>
			<!-- <div
				on:click={() => deleteTodo(id)}
				class="-ml-px flex w-0 flex-1 hover:bg-gray-100 cursor-pointer"
			>
				<div
					class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-5 w-5 text-gray-400"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
					</svg>

					<span class="ml-3">Mark as done</span>
				</div>
			</div> -->
		</div>
	</div>
</li>
