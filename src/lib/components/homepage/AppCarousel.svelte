<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';

	const images = [
		'app_screen_1_s0uwvo',
		'app_screen_2_gmxrwl',
		'app_screen_3_iurvxl',
		'app_screen_4_ed8qmx',
		'app_screen_5_kp7lyq'
	];
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8">
	<h2
		class="font-medium text-center max-w-xl xl:max-w-3xl mx-auto text-eco-gradient sm:text-2xl xl:text-3xl leading-normal"
	>
		O EcoReport torna
		<span class="font-bold"> fácil e acessível reportar áreas poluídas.</span>
	</h2>

	<h3 class="mt-8 xl:mt-12 text-center max-w-2xl mx-auto text-lg sm:text-xl xl:text-2xl">
		Report em menos de <span class="font-bold">1 min!</span>
	</h3>

	<div
		class="flex justify-around mt-10 max-w-[177px] sm:max-w-[390px] md:max-w-[590px] lg:max-w-[810px] xl:max-w-[1012px] mx-auto [&>*:nth-child(even)]:-mb-12 [&>*:nth-child(even)]:mt-12"
	>
		{#each images as image, index}
			<div class="rounded-2xl border-4 overflow-hidden">
				<CldImage
					width={177}
					height={380}
					src={image}
					alt={`App - Ecrã ${index + 1}`}
					sizes="100vw"
					priority={true}
				/>
			</div>
		{/each}
	</div>
</section>

<section class="container mx-auto px-4 lg:px-8 mt-12 sm:mt-24">
	<h2
		class="mx-auto max-w-xl xl:max-w-3xl text-eco-gradient text-center text-2xl sm:text-3xl xl:text-5xl leading-normal"
	>
		Quando encontrar uma área poluída
		<span class="font-bold">fotografe e inclua a geolocalização</span>
	</h2>

	<p class="mt-6 xl:mt-8 mx-auto max-w-xl xl:max-w-2xl text-lg sm:text-xl xl:text-2xl text-center">
		Garantimos que o report é enviado para a entidade responsável por limpar a zona indentificada,
		garantido que a <span class="font-bold">situação é resolvida de forma rápida e eficaz</span>.
	</p>
</section>
