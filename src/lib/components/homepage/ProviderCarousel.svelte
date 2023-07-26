<script lang="ts">
	import { onMount } from 'svelte';
	import BlazeSlider from 'blaze-slider';

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
				{#each Array(16) as _}
					<div class="shadow-s px-9 py-4">
						<div class="bg-light-green w-full h-24 grid place-content-center">
							<div class="text-eco-gradient text-2xl font-bold">Parceiro</div>
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
