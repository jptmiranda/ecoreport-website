<script>
	import AppCarousel from '$lib/components/homepage/AppCarousel.svelte';
	import Faqs from '$lib/components/homepage/Faqs.svelte';
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
			<h1 class="text-eco-gradient font-bold text-6xl leading-normal">
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
	<h2 class="text-eco-gradient font-bold text-5xl leading-normal text-center">
		Tipos de poluição que pode reportar
	</h2>

	<div class="mt-16 grid grid-cols-[repeat(2,minmax(0,507px))] justify-center gap-y-8 gap-x-10">
		<div class="rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_urban_ofvbba" alt="Tipo Urbano" width={507} height={165} sizes="100vw" />

			<div class="urban absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Urbana</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative shadow-s">
			<CldImage
				src="type_forest_ikasyo"
				alt="Tipo Florestal"
				width={507}
				height={165}
				sizes="100vw"
			/>

			<div class="forest absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Florestal</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_sea_ygvlkl" alt="Tipo Marítima" width={507} height={165} sizes="100vw" />

			<div class="sea absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Marítima</span></div>
			</div>
		</div>

		<div class="rounded-lg overflow-hidden relative shadow-s">
			<CldImage src="type_beach_bivef5" alt="Tipo Balnear" width={507} height={165} sizes="100vw" />

			<div class="beach absolute inset-0 grid place-content-center">
				<div class="text-white text-4xl">Poluição <span class="font-bold">Balnear</span></div>
			</div>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 mt-36">
	<div class="flex items-center gap-x-20 2xl:justify-center">
		<div class="flex gap-x-4 pt-4">
			<div class="w-[104px] h-[207px] border-4 border-[#312f2e] rounded-2xl" />

			<div class="w-[104px] h-[207px] border-4 border-[#312f2e] rounded-2xl" />

			<div class="w-[421px] h-[308px] border-4 border-[#312f2e] rounded-2xl" />
		</div>

		<div class="self-start">
			<h2 class="text-eco-gradient text-5xl leading-normal font-bold">A nossa missão</h2>

			<h3 class="mt-6 text-3xl text-dark-green max-w-[368px]">
				<span class="font-bold">Identificar, reportar e monitorizar</span> áreas afectadas pela poluição.
			</h3>

			<p class="mt-6 max-w-[396px]">
				O EcoReport é uma iniciativa dedicada a <span class="font-bold"
					>identificar e reportar zonas poluídas em todo o território português</span
				>. Com a nossa aplicação pode reportar áreas poluidas de forma rápida e eficiente.
			</p>
		</div>
	</div>

	<div class="grid place-content-center mt-24">
		<a
			href="/"
			class="py-4 px-9 rounded-[65px] border border-light-green shadow-s text-dark-green font-semibold text-xl"
		>
			Saber mais
		</a>
	</div>
</section>

<section class="container mx-auto px-4 mt-24">
	<div class="flex items-center justify-center gap-x-32">
		<div>
			<h2 class="text-eco-gradient text-5xl leading-normal font-bold">Dados e Métricas</h2>

			<h3 class="mt-6 text-3xl text-dark-green max-w-[356px]">
				Consciencialização para <span class="font-bold">um Portugal mais limpo</span>
			</h3>

			<p class="mt-6 max-w-[502px]">
				No EcoReport, <span class="font-bold"
					>acreditamos na transparência e no poder dos dados para impulsionar a mudança</span
				>. Disponibilizamos as métricas e informações dos reports de poluição submetidos pelos
				utilizadores. A partilha dos dados visa
				<span class="font-bold"
					>promover a consciencialização não apenas entre os cidadãos, mas também entre as entidades
					responsáveis pela limpeza e segurança</span
				> do território nacional.
			</p>

			<p class="mt-6 max-w-[502px]">
				Acreditamos que, ao compartilhar essas informações, podemos <span class="font-bold"
					>criar uma consciência coletiva e promover ações efetivas para um Portugal mais limpo e
					sustentável</span
				>.
			</p>

			<a
				href="/reports"
				class="mt-6 py-4 px-9 rounded-[65px] border border-light-green shadow-s text-dark-green font-semibold text-xl inline-block"
			>
				Explorar Dados e Métricas
			</a>
		</div>

		<CldImage
			class="rounded"
			src="landing_metrics_oi2d64"
			alt="Métricas"
			width={431}
			height={538}
		/>
	</div>
</section>

<section class="container mx-auto px-4 mt-36">
	<div class="flex items-center justify-center gap-x-10">
		<div class="grid grid-cols-[repeat(2,minmax(0,297px))] gap-x-6 gap-y-10">
			{#each Array(6) as _}
				<div class="shadow-s px-9 py-4">
					<div class="bg-light-green w-full h-24 grid place-content-center">
						<div class="text-eco-gradient text-2xl font-bold">Parceiro</div>
					</div>
				</div>
			{/each}
		</div>

		<div>
			<h2 class="text-eco-gradient text-5xl leading-normal font-bold">
				Conheça os nossos parceiros
			</h2>

			<h3 class="mt-6 text-3xl text-dark-green max-w-[447px]">
				Ao unirmos forças, aumentamos a eficácia das nossas iniciativas para <span class="font-bold"
					>promover um Portugal mais verde e sustentável</span
				>.
			</h3>

			<p class="mt-6 max-w-[492px] font-bold">
				Valorizamos a colaboração dos nossos parceiros alinhados com a visão do EcoReport, e que
				desempenham um papel vital na concretização dos nossos objectivos.
			</p>

			<a
				href="/reports"
				class="mt-6 py-4 px-9 rounded-[65px] border border-light-green shadow-s text-dark-green font-semibold text-xl inline-block"
			>
				Conhecer todos os parceiros
			</a>
		</div>
	</div>
</section>

<section class="container mx-auto px-4 mt-36">
	<Faqs />
</section>

<div class="container mx-auto px-4 mt-36">
	<h2 class="text-eco-gradient text-5xl leading-normal font-bold text-center max-w-[740px] mx-auto">
		Faça o Download do EcoReport e Junte-se à Comunidade
	</h2>

	<div class="mt-10 max-w-[596px] mx-auto text-center">
		<p class="font-bold text-xl">
			Torne-se um participante ativo na denúncia de áreas poluídas e contribua para a preservação do
			nosso ambiente natural.
		</p>

		<p class="mt-8">Juntos, podemos ter um impacto positivo em Portugal.</p>
	</div>

	<div class="grid place-content-center">
		<button
			class="mt-10 bg-gradient-to-r from-[#17742F] to-[#E0E482] text-white text-xl py-2 px-8 rounded-[34px]"
			type="button">Transfira a aplicação</button
		>
	</div>
</div>

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
