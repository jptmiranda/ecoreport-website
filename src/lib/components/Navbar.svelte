<script lang="ts">
	import FeTextAlignJustify from '~icons/fe/text-align-justify';
	import FeClose from '~icons/fe/close';
	import { page } from '$app/stores';

	$: currentRoute = $page.url.pathname;

	const routes = [
		{ path: '/', text: 'Início' },
		{ path: '/reports', text: 'Reports' },
		{ path: '/partnerships', text: 'Parcerias' },
		{ path: '/sponsors', text: 'Apoios' },
		{ path: '/app', text: 'App' }
	];
</script>

<header
	class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 shadow-md"
>
	<nav
		class="container mx-auto px-4 sm:flex sm:items-center sm:justify-between"
		aria-label="Global"
	>
		<div class="flex items-center justify-between">
			<a
				href="/"
				class="text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-2xl bg-clip-text leading-normal font-bold inline-block"
			>
				<span class="text-[#17742f] font-normal">Eco</span>Report
			</a>

			<div class="sm:hidden">
				<button
					type="button"
					class="hs-collapse-toggle inline-flex justify-center items-center gap-2 rounded-md font-medium bg-white align-middle focus:outline-none transition-all text-sm"
					data-hs-collapse="#navbar"
					aria-controls="navbar"
					aria-label="Toggle navigation"
				>
					<FeTextAlignJustify class="hs-collapse-open:hidden w-8 h-8" />

					<FeClose class="hs-collapse-open:block hidden w-8 h-8" />
				</button>
			</div>
		</div>

		<div
			id="navbar"
			class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
		>
			<div
				class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
			>
				{#each routes as route}
					<a
						href={route.path}
						class={`${
							currentRoute === route.path ? 'font-bold text-dark-green' : 'font-medium'
						} after:block after:content-[attr(data-text)] after:content-[attr(data-text) / ''] after:h-[1px] after:invisible after:overflow-hidden after:select-none after:pointer-events-none after:font-bold after:text-transparent`}
						data-text={route.text}
						aria-current={currentRoute === route.path ? 'page' : null}
					>
						{route.text}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
