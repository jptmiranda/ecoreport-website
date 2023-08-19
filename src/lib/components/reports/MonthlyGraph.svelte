<script lang="ts">
	import type { MonthlyReport } from '$lib/types';
	import Utils from '$lib/utils';
	import type { ApexOptions } from 'apexcharts';
	import { onMount } from 'svelte';

	export let data: MonthlyReport[];
	let chartElement: HTMLElement;

	const options: ApexOptions = {
		chart: {
			type: 'area',
			height: 280,
			animations: {
				speed: 300,
				animateGradually: {
					delay: 0
				}
			},
			toolbar: { show: false }
		},
		dataLabels: {
			enabled: false
		},
		markers: {
			size: 4
		},
		stroke: {
			curve: 'smooth'
		},
		fill: {
			type: 'gradient',
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.4,
				opacityTo: 0.6,
				stops: [0, 90, 100]
			}
		},
		series: [
			{
				name: 'Total',
				data: data.map((report) => report.total)
			},
			{
				name: 'Resolvidos',
				data: data.map((report) => report.resolved)
			}
		],
		xaxis: {
			categories: data.map((report) => {
				let date = new Date(report.month);

				return Utils.getMonthText(date.getMonth()) + ' ' + date.getFullYear();
			})
		}
	};

	onMount(async () => {
		const ApexCharts = (await import('apexcharts')).default;
		const chart = new ApexCharts(chartElement, options);
		chart.render();
	});
</script>

<section class="container mx-auto">
	<div bind:this={chartElement} />
</section>
