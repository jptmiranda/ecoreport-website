<script lang="ts">
	const partnerships: string[] = Array(16).fill('Parceiro');
</script>

<swiper-container slides-per-view={4} loop={true} autoplay={true} space-between={25}>
	{#each partnerships as partnership}
		<swiper-slide>
			<div class="card w-full h-[130px] rounded-[10px] bg-white px-9 py-4 shadow-md">
				<div class="bg-light-green w-full h-full grid place-content-center">
					<div
						class="uppercase text-transparent bg-gradient-to-r from-[#17742F] to-[#E0E482] text-xl bg-clip-text leading-normal font-bold inline-block"
					>
						{partnership}
					</div>
				</div>
			</div>
		</swiper-slide>
	{/each}
</swiper-container>
