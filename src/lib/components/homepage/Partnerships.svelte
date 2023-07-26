<section class="container mx-auto px-4 lg:px-8 mt-12 xl:mt-36">
	<div class="flex flex-col-reverse xl:flex-row items-center justify-center gap-x-10">
		<div class="mt-8 xl:mt-0 hidden sm:grid grid-cols-[repeat(2,minmax(0,297px))] gap-x-6 gap-y-10">
			{#each Array(6) as _}
				<div class="shadow-s px-9 py-4">
					<div class="bg-light-green w-full h-24 grid place-content-center">
						<div class="text-eco-gradient text-2xl font-bold">Parceiro</div>
					</div>
				</div>
			{/each}
		</div>

		<div>
			<h2
				class="text-eco-gradient text-2xl sm:text-3xl xl:text-5xl leading-normal font-bold text-center xl:text-left"
			>
				Conheça os nossos parceiros
			</h2>

			<h3
				class="mt-6 text-xl sm:text-2xl xl:text-3xl text-dark-green max-w-[447px] mx-auto xl:mx-0 text-center xl:text-left"
			>
				Ao unirmos forças, aumentamos a eficácia das nossas iniciativas para <span class="font-bold"
					>promover um Portugal mais verde e sustentável</span
				>.
			</h3>

			<p class="mt-6 max-w-[492px] font-bold mx-auto xl:mx-0 text-center xl:text-left">
				Valorizamos a colaboração dos nossos parceiros alinhados com a visão do EcoReport, e que
				desempenham um papel vital na concretização dos nossos objectivos.
			</p>

			<div class="grid place-content-center xl:place-content-start">
				<a
					href="/reports"
					class="mt-6 py-4 px-9 rounded-[65px] border border-light-green shadow-s text-dark-green font-semibold text-xl inline-block"
				>
					Conhecer todos os parceiros
				</a>
			</div>
		</div>
	</div>
</section>
