<script>
	import AppCarousel from '$lib/components/homepage/AppCarousel.svelte';
	import ProviderCarousel from '$lib/components/homepage/ProviderCarousel.svelte';
	import { CldImage, getCldImageUrl } from 'svelte-cloudinary';

	const heroImage = getCldImageUrl({
		src: 'hero_bg_we3avh',
		width: 538,
		height: 538,
		format: 'webp'
	});
</script>

<section class="container mx-auto px-4 mt-14">
	<div class="flex justify-center items-start gap-x-14 xl:gap-x-28">
		<div class="max-w-lg">
			<h1
				class="text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] bg-clip-text leading-normal font-bold inline-block text-5xl"
			>
				Faça a diferença e reporte a poluição
			</h1>

			<h2 class="mt-6 text-dark-green text-2xl">
				Seja parte da mudança e <span class="font-bold"
					>ajude a reportar e monitorizar a poluição</span
				> em todo o território nacional.
			</h2>

			<p class="mt-8 max-w-[430px]">
				<span class="font-bold">
					Com a App EcoReport, pode contribuir para um ambiente mais saudável e preservar a beleza
					natural do nosso país.
				</span>
				<br /><br />
				Junte-se a nós na missão de um <span class="font-bold">Portugal limpo e sustentável</span>
			</p>

			<button
				class="mt-8 bg-gradient-to-r from-[#17742F] to-[#E0E482] text-white text-xl py-2 px-8 rounded-[34px]"
				type="button">Transfira a aplicação</button
			>
		</div>

		<img src={heroImage} alt="hero" width="538" height="538" sizes="100vw" />
	</div>
</section>

<section class="container mx-auto px-4 mt-12">
	<ProviderCarousel />
</section>

<section class="container mx-auto px-4 mt-8">
	<AppCarousel />
</section>
