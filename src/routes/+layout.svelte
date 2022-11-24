<script>
	import '../app.css';

	import { setClient } from 'svelte-apollo';
	import client from '$lib/graphql/client';

	setClient(client);
</script>

<div class="min-h-full">
	<div class="bg-indigo-600 pb-32">
		<nav class="border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none">
			<div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<div
					class="relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25"
				>
					<div class="flex items-center px-2 lg:px-0">
						<div class="hidden lg:block">
							<div class="flex space-x-4">
								<!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
								<a
									href="#"
									class="bg-indigo-700 text-white rounded-md py-2 px-3 text-sm font-medium"
									aria-current="page">Todos</a
								>

								<a
									href="#"
									class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
									>Team</a
								>

								<a
									href="#"
									class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
									>Projects</a
								>

								<a
									href="#"
									class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
									>Calendar</a
								>

								<a
									href="#"
									class="text-white hover:bg-indigo-500 hover:bg-opacity-75 rounded-md py-2 px-3 text-sm font-medium"
									>Reports</a
								>
							</div>
						</div>
					</div>
					<div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
						<div class="w-full max-w-lg lg:max-w-xs">
							<label for="search" class="sr-only">Search</label>
							<div class="relative text-gray-400 focus-within:text-gray-600">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
									<!-- Heroicon name: mini/magnifying-glass -->
									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
								<input
									id="search"
									class="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm"
									placeholder="Search"
									type="search"
									name="search"
								/>
							</div>
						</div>
					</div>
					<div class="flex lg:hidden">
						<!-- Mobile menu button -->
						<button
							type="button"
							class="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<!--
				  Heroicon name: outline/bars-3
  
				  Menu open: "hidden", Menu closed: "block"
				-->
							<svg
								class="block h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<!--
				  Heroicon name: outline/x-mark
  
				  Menu open: "block", Menu closed: "hidden"
				-->
							<svg
								class="hidden h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="hidden lg:ml-4 lg:block">
						<div class="flex items-center">
							<button
								type="button"
								class="flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
							>
								<span class="sr-only">View notifications</span>
								<!-- Heroicon name: outline/bell -->
								<svg
									class="h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div class="lg:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pt-2 pb-3">
					<!-- Current: "bg-indigo-700 text-white", Default: "text-white hover:bg-indigo-500 hover:bg-opacity-75" -->
					<a
						href="#"
						class="bg-indigo-700 text-white block rounded-md py-2 px-3 text-base font-medium"
						aria-current="page">Todos</a
					>

					<a
						href="#"
						class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
						>Team</a
					>

					<a
						href="#"
						class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
						>Projects</a
					>

					<a
						href="#"
						class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
						>Calendar</a
					>

					<a
						href="#"
						class="text-white hover:bg-indigo-500 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium"
						>Reports</a
					>
				</div>
				<div class="border-t border-indigo-700 pt-4 pb-3">
					<button
						type="button"
						class="px-5 ml-auto flex-shrink-0 rounded-full bg-indigo-600 p-1 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
					>
						<span class="sr-only">View notifications</span>
						<!-- Heroicon name: outline/bell -->
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
							/>
						</svg>
					</button>
				</div>
			</div>
		</nav>
		<header class="py-10">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 class="text-3xl font-bold tracking-tight text-white">Todos</h1>
			</div>
		</header>
	</div>

	<main class="-mt-32">
		<div class="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
			<!-- Replace with your content -->
			<div class="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
				<div class="h-96 rounded-lg border-4 border-dashed border-gray-200">
					<slot />
				</div>
			</div>
			<!-- /End replace -->
		</div>
	</main>
</div>
