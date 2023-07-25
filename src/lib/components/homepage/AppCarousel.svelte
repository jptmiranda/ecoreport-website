<script lang="ts">
	import { onMount } from 'svelte';
	import BlazeSlider from 'blaze-slider';
	import { CldImage } from 'svelte-cloudinary';

	let carousel: HTMLElement;
	const images = [
		'app_screen_1_s0uwvo',
		'app_screen_2_gmxrwl',
		'app_screen_3_iurvxl',
		'app_screen_4_ed8qmx',
		'app_screen_5_kp7lyq'
	];

	onMount(() => {
		new BlazeSlider(carousel, {
			all: {
				enableAutoplay: true,
				autoplayInterval: 3000,
				loop: true,
				slideGap: '24px',
				slidesToShow: 1
			},
			'(min-width: 576px)': {
				slidesToShow: 2
			},
			'(min-width: 768px)': {
				slidesToShow: 3
			},
			'(min-width: 1024px)': {
				slidesToShow: 4
			},
			'(min-width: 1280px)': {
				slidesToShow: 5,
				enableAutoplay: false,
				loop: false
			}
		});
	});
</script>

<h2 class="text-center max-w-2xl mx-auto text-dark-green text-[32px] leading-[130%]">
	O EcoReport torna
	<span class="font-bold"> fácil e acessível reportar áreas poluídas</span>.
</h2>

<h3 class="mt-12 text-center max-w-2xl mx-auto text-[32px] leading-[130%]">
	Report em menos de <span class="font-bold">1 min!</span>
</h3>

<div
	bind:this={carousel}
	class="mt-10 blaze-slider max-w-[177px] sm:max-w-[390px] md:max-w-[590px] lg:max-w-[810px] xl:max-w-[1012px] mx-auto"
>
	<div class="blaze-container">
		<div class="blaze-track-container">
			<div class="blaze-track">
				{#each images as image, index}
					<div class="rounded-2xl border-4 overflow-hidden">
						<CldImage
							width={177}
							height={380}
							src={image}
							alt={`App - Ecrã ${index + 1}`}
							sizes="100vw"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.blaze-slider {
		--slides-to-show: 1;
		--slide-gap: 24px;
	}

	@media (min-width: 576px) {
		.blaze-slider {
			--slides-to-show: 2;
		}
	}

	@media (min-width: 1024px) {
		.blaze-slider {
			--slides-to-show: 3;
		}
	}

	@media (min-width: 1280px) {
		.blaze-slider {
			--slides-to-show: 4;
		}
	}

	@media (min-width: 1536px) {
		.blaze-slider {
			--slides-to-show: 5;
		}
	}
</style>
