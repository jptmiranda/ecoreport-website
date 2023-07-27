<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-14">
	<div class="flex flex-col lg:flex-row items-center justify-center gap-x-32">
		<div>
			<h2
				class="text-eco-gradient text-2xl sm:text-3xl xl:text-5xl leading-normal font-bold text-center lg:text-left"
			>
				Dados e Métricas
			</h2>

			<h3
				class="mt-6 text-xl sm:text-2xl xl:text-3xl text-dark-green max-w-[356px] text-center lg:text-left mx-auto lg:mx-0"
			>
				Consciencialização para <span class="font-bold">um Portugal mais limpo</span>
			</h3>

			<p class="mt-6 max-w-[502px] text-center lg:text-left">
				No EcoReport, <span class="font-bold"
					>acreditamos na transparência e no poder dos dados para impulsionar a mudança</span
				>. Disponibilizamos as métricas e informações dos reports de poluição submetidos pelos
				utilizadores. A partilha dos dados visa
				<span class="font-bold"
					>promover a consciencialização não apenas entre os cidadãos, mas também entre as entidades
					responsáveis pela limpeza e segurança</span
				> do território nacional.
			</p>

			<p class="mt-6 max-w-[502px] text-center lg:text-left">
				Acreditamos que, ao compartilhar essas informações, podemos <span class="font-bold"
					>criar uma consciência coletiva e promover ações efetivas para um Portugal mais limpo e
					sustentável</span
				>.
			</p>

			<div class="grid place-content-center lg:place-content-start">
				<a
					href="/reports"
					class="mt-6 py-4 px-9 rounded-[65px] border border-light-green shadow-s text-dark-green font-semibold text-xl inline-block"
				>
					Explorar Dados e Métricas
				</a>
			</div>
		</div>

		<CldImage
			class="rounded mt-12 lg:mt-0"
			src="landing_metrics_oi2d64"
			alt="Métricas"
			width={431}
			height={538}
		/>
	</div>
</section>
