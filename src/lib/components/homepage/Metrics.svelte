<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
</script>

<section class="container mx-auto px-4 lg:px-8 mt-24">
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
