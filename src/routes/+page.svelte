<script>
	import Section from '$lib/components/Section.svelte';
	import AppCarousel from '$lib/components/homepage/AppCarousel.svelte';
	import DownloadApp from '$lib/components/homepage/DownloadApp.svelte';
	import Faqs from '$lib/components/homepage/Faqs.svelte';
	import Goal from '$lib/components/homepage/Goal.svelte';
	import Metrics from '$lib/components/homepage/Metrics.svelte';
	import Partnerships from '$lib/components/homepage/Partnerships.svelte';
	import PolutionTypes from '$lib/components/homepage/PolutionTypes.svelte';
	import { CldImage } from 'svelte-cloudinary';
	// import ProviderCarousel from '$lib/components/homepage/ProviderCarousel.svelte';
</script>

<Section name="app">
	<div slot="left">
		<h1
			class="text-eco-gradient font-bold text-3xl sm:text-4xl xl:text-5xl leading-normal text-center lg:text-left"
		>
			Faça a diferença e reporte a poluição
		</h1>

		<h2 class="font-medium mt-6 text-dark-green text-xl sm:text-2xl text-center lg:text-left">
			Seja parte da mudança e <span class="font-bold"
				>ajude a reportar e monitorizar a poluição</span
			> em todo o território nacional.
		</h2>

		<div class="mt-8 max-w-[480px] mx-auto text-center lg:mx-0 lg:text-left">
			<div class="font-bold">
				Com a App EcoReport, pode contribuir para um ambiente mais saudável e preservar a beleza
				natural do nosso país.<br />
			</div>
			<div class="mt-2">
				Junte-se a nós na missão de um <span class="font-bold">Portugal limpo e sustentável.</span>
			</div>
		</div>

		<div class="grid place-content-center lg:place-content-start">
			<button
				class="mt-8 bg-gradient-to-r from-[#17742F] to-[#E0E482] font-bold text-white text-xl py-4 px-8 rounded-[34px]"
				type="button">Download App EcoReport</button
			>
		</div>
	</div>

	<div slot="right">
		<CldImage
			src="hero_bg_tvqugo"
			alt="hero"
			width="538"
			height="473"
			sizes="100vw"
			priority={true}
		/>
	</div>
</Section>

<!-- <AppCarousel />
<PolutionTypes />
<Goal />
<Metrics />
<Partnerships />
<Faqs />
<DownloadApp /> -->
