<script lang="ts">
	import BlazeSlider from 'blaze-slider';
	import 'blaze-slider/dist/blaze.css';
	import { onMount } from 'svelte';

	const partnerships: string[] = Array(16).fill('Parceiro');
	let carousel: HTMLElement;

	onMount(() => {
		new BlazeSlider(carousel, {
			all: {
				enableAutoplay: true,
				autoplayInterval: 4000,
				slidesToShow: 1,
				loop: true,
				slideGap: '25px'
			},
			'(min-width: 576px)': {
				slidesToShow: 2
			},
			'(min-width: 1024px)': {
				slidesToShow: 3
			},
			'(min-width: 1280px)': {
				slidesToShow: 4
			},
			'(min-width: 1536px)': {
				slidesToShow: 5
			}
		});
	});
</script>

<div bind:this={carousel} class="blaze-slider">
	<div class="blaze-container">
		<div class="blaze-track-container">
			<div class="blaze-track py-4 px-2">
				{#each partnerships as partnership}
					<div class="shadow-s px-9 py-4">
						<div class="bg-light-green w-full h-24 grid place-content-center">
							<div
								class="text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-2xl bg-clip-text leading-normal font-bold inline-block"
							>
								{partnership}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.blaze-slider {
		--slides-to-show: 1;
		--slide-gap: 25px;
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
