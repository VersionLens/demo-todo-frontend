<script>
	import '../../app.css';
	import logo from '$lib/assets/logo.svg';

	import { setClient } from 'svelte-apollo';
	import client from '$lib/graphql/client';

	setClient(client);
</script>

<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<div class="bg-white">
	<!--
	  Mobile menu
  
	  Off-canvas menu for mobile, show/hide based on off-canvas menu state.
	-->
	<div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
		<!--
		Off-canvas menu backdrop, show/hide based on off-canvas menu state.
  
		Entering: "transition-opacity ease-linear duration-300"
		  From: "opacity-0"
		  To: "opacity-100"
		Leaving: "transition-opacity ease-linear duration-300"
		  From: "opacity-100"
		  To: "opacity-0"
	  -->
		<div class="fixed inset-0 bg-black bg-opacity-25" />

		<div class="fixed inset-0 z-40 flex">
			<!--
		  Off-canvas menu, show/hide based on off-canvas menu state.
  
		  Entering: "transition ease-in-out duration-300 transform"
			From: "-translate-x-full"
			To: "translate-x-0"
		  Leaving: "transition ease-in-out duration-300 transform"
			From: "translate-x-0"
			To: "-translate-x-full"
		-->
			<div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
				<div class="flex px-4 pt-5 pb-2">
					<button
						type="button"
						class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
					>
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x-mark -->
						<svg
							class="h-6 w-6"
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

				<div class="space-y-6 border-t border-gray-200 py-6 px-4">
					<div class="flow-root">
						<a href="/register" class="-m-2 block p-2 font-medium text-gray-900"
							>Create an account</a
						>
					</div>
					<div class="flow-root">
						<a href="/login" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
					</div>
				</div>

				<div class="space-y-6 border-t border-gray-200 py-6 px-4">
					<!-- Currency selector -->
					<form>
						<div class="inline-block">
							<label for="mobile-currency" class="sr-only">Currency</label>
							<div
								class="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white"
							>
								<select
									id="mobile-currency"
									name="currency"
									class="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
								>
									<option>EUR</option>

									<option>USD</option>

									<option>AUD</option>

									<option>SEK</option>

									<option>GBP</option>
								</select>
								<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
									<!-- Heroicon name: mini/chevron-down -->
									<svg
										class="h-5 w-5 text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Hero section -->
	<div class="relative bg-gray-900">
		<!-- Decorative image and overlay -->
		<div aria-hidden="true" class="absolute inset-0 overflow-hidden">
			<img
				src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
				alt=""
				class="h-full w-full object-cover object-center"
			/>
		</div>
		<div aria-hidden="true" class="absolute inset-0 bg-gray-900 opacity-50" />

		<!-- Navigation -->
		<header class="relative z-10">
			<nav aria-label="Top">
				<!-- Top navigation -->
				<div class="bg-gray-900">
					<div
						class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
					>
						<!-- Currency selector -->
						<form>
							<div>
								<label for="desktop-currency" class="sr-only">Currency</label>
								<div
									class="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white"
								>
									<select
										id="desktop-currency"
										name="currency"
										class="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
									>
										<option>EUR</option>

										<option>USD</option>

										<option>AUD</option>

										<option>SEK</option>

										<option>GBP</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center">
										<!-- Heroicon name: mini/chevron-down -->
										<svg
											class="h-5 w-5 text-gray-300"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
						</form>

						<div class="flex items-center space-x-6">
							<a href="/login" class="text-sm font-medium text-white hover:text-gray-100">Sign in</a
							>
							<a href="/register" class="text-sm font-medium text-white hover:text-gray-100"
								>Create an account</a
							>
						</div>
					</div>
				</div>

				<!-- Secondary navigation -->
				<div class="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
					<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div>
							<div class="flex h-16 items-center justify-between">
								<!-- Logo (lg+) -->
								<div class="hidden lg:flex lg:flex-1 lg:items-center">
									<a href="#">
										<span class="sr-only">Verison Store</span>
										<img class="h-8 w-auto" src={logo} alt="" />
									</a>
								</div>

								<!-- Mobile menu and search (lg-) -->
								<div class="flex flex-1 items-center lg:hidden">
									<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
									<button type="button" class="-ml-2 p-2 text-white">
										<span class="sr-only">Open menu</span>
										<!-- Heroicon name: outline/bars-3 -->
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
												d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											/>
										</svg>
									</button>

									<!-- Search -->
									<!-- <a href="#" class="ml-2 p-2 text-white">
										<span class="sr-only">Search</span>
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
												d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
											/>
										</svg>
									</a> -->
								</div>

								<!-- Logo (lg-) -->
								<a href="#" class="lg:hidden">
									<span class="sr-only">Version Store</span>
									<img src={logo} alt="" class="h-8 w-auto" />
								</a>

								<div class="flex flex-1 items-center justify-end">
									<!-- <a href="#" class="hidden text-sm font-medium text-white lg:block">Search</a> -->

									<div class="flex items-center lg:ml-8">
										<!-- <a href="#" class="p-2 text-white lg:hidden">
											<span class="sr-only">Help</span>
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
													d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
												/>
											</svg>
										</a>
										<a href="#" class="hidden text-sm font-medium text-white lg:block">Help</a> -->

										<!-- Cart -->
										<div class="ml-4 flow-root lg:ml-8">
											<a href="#" class="group -m-2 flex items-center p-2">
												<!-- Heroicon name: outline/shopping-bag -->
												<svg
													class="h-6 w-6 flex-shrink-0 text-white"
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
														d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
													/>
												</svg>
												<span class="ml-2 text-sm font-medium text-white">0</span>
												<span class="sr-only">items in cart, view bag</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>

		<div
			class="relative mx-auto flex max-w-3xl flex-col items-center py-32 px-6 text-center sm:py-64 lg:px-0"
		>
			<h1 class="text-4xl font-bold tracking-tight text-white lg:text-6xl">
				New arrivals are here
			</h1>
			<p class="mt-4 text-xl text-white">
				We've just started offering our beloved physical version products publically. There's a
				limited number of items available.
			</p>
			<a
				href="#"
				class="mt-8 inline-block rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
				>Shop Version Products</a
			>
		</div>
	</div>

	<main>
		<!-- Category section -->
		<!-- <section
			aria-labelledby="category-heading"
			class="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8"
		>
			<div class="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
				<h2 id="category-heading" class="text-2xl font-bold tracking-tight text-gray-900">
					Shop by Category
				</h2>
				<a
					href="#"
					class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
				>
					Browse all categories
					<span aria-hidden="true"> &rarr;</span>
				</a>
			</div>

			<div class="mt-4 flow-root">
				<div class="-my-2">
					<div class="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
						<div
							class="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
						>
							<a
								href="#"
								class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
							>
								<span aria-hidden="true" class="absolute inset-0">
									<img
										src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg"
										alt=""
										class="h-full w-full object-cover object-center"
									/>
								</span>
								<span
									aria-hidden="true"
									class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
								/>
								<span class="relative mt-auto text-center text-xl font-bold text-white"
									>New Arrivals</span
								>
							</a>

							<a
								href="#"
								class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
							>
								<span aria-hidden="true" class="absolute inset-0">
									<img
										src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg"
										alt=""
										class="h-full w-full object-cover object-center"
									/>
								</span>
								<span
									aria-hidden="true"
									class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
								/>
								<span class="relative mt-auto text-center text-xl font-bold text-white"
									>Productivity</span
								>
							</a>

							<a
								href="#"
								class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
							>
								<span aria-hidden="true" class="absolute inset-0">
									<img
										src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg"
										alt=""
										class="h-full w-full object-cover object-center"
									/>
								</span>
								<span
									aria-hidden="true"
									class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
								/>
								<span class="relative mt-auto text-center text-xl font-bold text-white"
									>Workspace</span
								>
							</a>

							<a
								href="#"
								class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
							>
								<span aria-hidden="true" class="absolute inset-0">
									<img
										src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg"
										alt=""
										class="h-full w-full object-cover object-center"
									/>
								</span>
								<span
									aria-hidden="true"
									class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
								/>
								<span class="relative mt-auto text-center text-xl font-bold text-white"
									>Accessories</span
								>
							</a>

							<a
								href="#"
								class="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
							>
								<span aria-hidden="true" class="absolute inset-0">
									<img
										src="https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg"
										alt=""
										class="h-full w-full object-cover object-center"
									/>
								</span>
								<span
									aria-hidden="true"
									class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
								/>
								<span class="relative mt-auto text-center text-xl font-bold text-white">Sale</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-6 px-4 sm:hidden">
				<a href="#" class="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
					Browse all categories
					<span aria-hidden="true"> &rarr;</span>
				</a>
			</div>
		</section> -->

		<!-- Featured section -->
		<!-- <section
			aria-labelledby="comfort-heading"
			class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
		>
			<div class="relative overflow-hidden rounded-lg">
				<div class="absolute inset-0">
					<img
						src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
						alt=""
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
					<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
						<h2
							id="comfort-heading"
							class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
						>
							Simple productivity
						</h2>
						<p class="mt-3 text-xl text-white">
							Endless tasks, limited hours, a single piece of paper. Not really a haiku, but we're
							doing our best here. No kanban boards, burndown charts, or tangled flowcharts with our
							Focus system. Just the undeniable urge to fill empty circles.
						</p>
						<a
							href="#"
							class="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
							>Shop Focus</a
						>
					</div>
				</div>
			</div>
		</section> -->

		<!-- Featured section -->
		<section
			aria-labelledby="comfort-heading"
			class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
		>
			<div class="relative overflow-hidden rounded-lg">
				<div class="absolute inset-0">
					<img
						src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
						alt=""
						class="h-full w-full object-cover object-center"
					/>
				</div>
				<div class="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
					<div class="relative mx-auto flex max-w-3xl flex-col items-center text-center">
						<h2
							id="comfort-heading"
							class="text-3xl font-bold tracking-tight text-white sm:text-4xl"
						>
							More product launches soon!
						</h2>
						<p class="mt-3 text-xl text-white">
							We've just launched Version Store and can't wait to launch more products to you!
						</p>
						<a
							href="#"
							class="mt-8 block w-full rounded-md border border-transparent bg-white py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
							>See our first products</a
						>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer aria-labelledby="footer-heading" class="bg-gray-900">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
				<div class="grid grid-cols-2 gap-8 xl:col-span-2">
					<div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
						<div>
							<h3 class="text-sm font-medium text-white">Shop</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Bags</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Tees</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Objects</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Home Goods</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Accessories</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-sm font-medium text-white">Company</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Who we are</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Sustainability</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Press</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Careers</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Terms &amp; Conditions</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Privacy</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
						<div>
							<h3 class="text-sm font-medium text-white">Account</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Manage Account</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Returns &amp; Exchanges</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Redeem a Gift Card</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-sm font-medium text-white">Connect</h3>
							<ul role="list" class="mt-6 space-y-6">
								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Contact Us</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Twitter</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Instagram</a>
								</li>

								<li class="text-sm">
									<a href="#" class="text-gray-300 hover:text-white">Pinterest</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="mt-12 md:mt-16 xl:mt-0">
					<h3 class="text-sm font-medium text-white">Sign up for our newsletter</h3>
					<p class="mt-6 text-sm text-gray-300">
						The latest deals and savings, sent to your inbox weekly.
					</p>
					<form class="mt-2 flex sm:max-w-md">
						<label for="email-address" class="sr-only">Email address</label>
						<input
							id="email-address"
							type="text"
							autocomplete="email"
							required
							class="w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
						/>
						<div class="ml-4 flex-shrink-0">
							<button
								type="submit"
								class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
								>Sign up</button
							>
						</div>
					</form>
				</div>
			</div>

			<div class="border-t border-gray-800 py-10">
				<p class="text-sm text-gray-400">Copyright &copy; 2023 Version Store, Inc.</p>
			</div>
		</div>
	</footer>
</div>
