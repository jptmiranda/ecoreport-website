<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
</script>

<section class="container mx-auto px-4 lg:px-8 mt-12 xl:mt-24">
	<h2
		class="text-eco-gradient font-bold text-2xl sm:text-3xl xl:text-5xl leading-normal text-center"
	>
		Tipos de poluição que pode reportar
	</h2>

	<div
		class="mt-8 sm:mt-12 xl:mt-16 flex flex-col items-center sm:grid sm:grid-cols-[repeat(2,minmax(0,507px))] justify-center gap-y-4 gap-x-5 md:gap-y-8 md:gap-x-10"
	>
		<div class="max-w-[507px] w-full rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_urban_ofvbba" alt="Tipo Urbano" width={507} height={165} sizes="100vw" />

			<div class="urban absolute inset-0 grid place-content-center">
				<div class="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
					Poluição <span class="font-bold">Urbana</span>
				</div>
			</div>
		</div>

		<div class="max-w-[507px] w-full rounded-lg overflow-hidden relative shadow-s">
			<CldImage
				src="type_forest_ikasyo"
				alt="Tipo Florestal"
				width={507}
				height={165}
				sizes="100vw"
			/>

			<div class="forest absolute inset-0 grid place-content-center">
				<div class="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
					Poluição <span class="font-bold">Florestal</span>
				</div>
			</div>
		</div>

		<div class="max-w-[507px] w-full rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_sea_ygvlkl" alt="Tipo Marítima" width={507} height={165} sizes="100vw" />

			<div class="sea absolute inset-0 grid place-content-center">
				<div class="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
					Poluição <span class="font-bold">Marítima</span>
				</div>
			</div>
		</div>

		<div class="max-w-[507px] w-full rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_beach_bivef5" alt="Tipo Balnear" width={507} height={165} sizes="100vw" />

			<div class="beach absolute inset-0 grid place-content-center">
				<div class="text-white text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
					Poluição <span class="font-bold">Balnear</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.urban {
		background: linear-gradient(0deg, #9fabbc 0%, rgba(159, 171, 188, 0) 100%);
	}

	.forest {
		background: linear-gradient(0, #007713 0%, rgba(255, 229, 136, 0) 100%);
	}

	.sea {
		background: linear-gradient(0, #69dbff 0%, rgba(105, 219, 255, 0) 100%);
	}

	.beach {
		background: linear-gradient(0, #c09932 0%, rgba(255, 229, 136, 0) 100%);
	}
</style>
