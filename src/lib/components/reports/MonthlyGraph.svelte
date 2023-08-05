<script lang="ts">
	import Utils from '$lib/utils';
	import Chart, { type ChartItem } from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let data;

	let chartElement: ChartItem;

	const parsedData = {
		labels: data.map((month: any) => {
			let date = new Date(month.month);

			return Utils.getMonthText(date.getMonth()) + ' ' + date.getFullYear();
		}),
		datasets: [
			{
				label: 'Resolved',
				data: data.map((month: any) => month.resolved),
				borderColor: '#81AF5B',
				backgroundColor: (context: any) => {
					const backgroundColor = 'rgba(129, 175, 91, 0.3)';

					if (!context.chart.chartArea) return;
					const {
						ctx,
						chartArea: { top, bottom }
					} = context.chart;
					const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

					gradientBg.addColorStop(0, backgroundColor);
					gradientBg.addColorStop(1, 'rgba(129, 175, 91, 0)');

					return gradientBg;
				},
				tension: 0.4,
				fill: true
			},
			{
				label: 'Total',
				data: data.map((month: any) => month.total),
				borderColor: '#FF5A5A',
				backgroundColor: (context: any) => {
					const backgroundColor = 'rgba(255, 90, 90, 0.3)';

					if (!context.chart.chartArea) return;
					const {
						ctx,
						chartArea: { top, bottom }
					} = context.chart;
					const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

					gradientBg.addColorStop(0, backgroundColor);
					gradientBg.addColorStop(1, 'rgba(255, 90, 90, 0)');

					return gradientBg;
				},
				tension: 0.4,
				fill: true
			}
		]
	};

	onMount(() => {
		new Chart(chartElement, {
			type: 'line',
			data: parsedData,
			options: {
				responsive: true,
				plugins: {
					legend: {
						position: 'bottom'
					}
				},
				scales: {
					x: {
						grid: {
							display: false
						}
					}
				}
			}
		});
	});
</script>

<section class="container mx-auto px-4 lg:px-8 mt-8 lg:mt-12">
	<h2
		class="text-eco-gradient font-bold text-xl sm:text-2xl xl:text-4xl leading-normal text-center"
	>
		Total de Reports
	</h2>

	<p class="text-lg sm:text-xl text-center mt-4">
		O número de reports submetidos até o momento. Essa métrica mostra a dimensão do<br /> problema da
		poluição em Portugal e a importância de ação coletiva.
	</p>

	<canvas class="mt-16" bind:this={chartElement} />
</section>
