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
			<h1 class="text-eco-gradient font-bold text-6xl">Faça a diferença e reporte a poluição</h1>

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

<section class="container mx-auto px-4 mt-24">
	<h2 class="mx-auto max-w-2xl text-center text-4xl text-eco-gradient">
		Quando encontrar uma área poluída
		<span class="font-bold">fotografe e inclua a geolocalização</span>
	</h2>

	<p class="mt-8 mx-auto max-w-2xl text-2xl text-center">
		Garantimos que o report é enviado para a entidade responsável por limpar a zona indentificada,
		garantido que a <span class="font-bold">situação é resolvida de forma rápida e eficaz</span>.
	</p>
</section>

<section class="container mx-auto px-4 mt-24">
	<h2 class="text-eco-gradient font-bold text-5xl text-center">
		Tipos de poluição que pode reportar
	</h2>

	<div class="mt-16 grid grid-cols-[repeat(2,minmax(0,507px))] justify-center gap-y-8 gap-x-10">
		<div class="rounded-lg overflow-hidden relative">
			<CldImage src="type_urban_ofvbba" width={507} height={165} sizes="100vw" />

			<div class="urban absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Urbana</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative">
			<CldImage src="type_forest_ikasyo" width={507} height={165} sizes="100vw" />

			<div class="forest absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Florestal</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative">
			<CldImage src="type_sea_ygvlkl" width={507} height={165} sizes="100vw" />

			<div class="sea absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Marítima</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative">
			<CldImage src="type_beach_bivef5" width={507} height={165} sizes="100vw" />

			<div class="beach absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Balnear</span></div>
			</div>
		</div>
	</div>
</section>

<style>
	.urban {
		background: linear-gradient(180deg, #9fabbc 0%, rgba(159, 171, 188, 0) 100%);
	}

	.forest {
		background: linear-gradient(180deg, #007713 0%, rgba(255, 229, 136, 0) 100%);
	}

	.sea {
		background: linear-gradient(180deg, #69dbff 0%, rgba(105, 219, 255, 0) 100%);
	}

	.beach {
		background: linear-gradient(180deg, #c09932 0%, rgba(255, 229, 136, 0) 100%);
	}
</style>
