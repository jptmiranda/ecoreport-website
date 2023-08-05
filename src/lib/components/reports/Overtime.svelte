<script lang="ts">
	import { LayerCake, Svg, flatten, groupLonger } from 'layercake';
	import { scaleOrdinal } from 'd3-scale';
	import { timeParse, timeFormat } from 'd3-time-format';
	import { format, precisionFixed } from 'd3-format';
	import AxisX from '../charts/MultiLine/AxisX.svelte';
	import AxisY from '../charts/MultiLine/AxisY.svelte';
	import MultiLines from '../charts/MultiLine/MultiLines.svelte';

	export let data: any;

	const xKeyCast = timeParse('%Y-%m-%d');
	const seriesNames = Object.keys(data[0]).filter((d) => d !== 'month');
	const seriesColors = ['#ffe4b8', '#ffb3c0', '#ff7ac7', '#ff00cc'];
	const formatTickX = timeFormat('%b. %e');
	const formatTickY = (d: any) => format(`.${precisionFixed(d)}s`)(d);
	let groupedData: any;
	let mappedTicks: any;

	$: if (data && data.length > 0) {
		data.forEach((d: any) => {
			d.month = typeof d.month === 'string' ? xKeyCast(d.month) : d.month;
			seriesNames.forEach((name) => {
				d[name] = +d[name];
			});
		});

		groupedData = groupLonger(data, seriesNames, {
			groupTo: 'type',
			valueTo: 'value'
		});

		mappedTicks = data.map((d: any) => d.month).sort((a: any, b: any) => a - b);
	}
</script>

{#if groupedData && groupedData.length > 0 && mappedTicks && mappedTicks.length > 0}
	<div class="w-full h-[250px]">
		<LayerCake
			padding={{ top: 7, right: 10, bottom: 20, left: 25 }}
			x={'month'}
			y={'value'}
			z={'type'}
			yDomain={[0, null]}
			zScale={scaleOrdinal()}
			zRange={seriesColors}
			flatData={flatten(groupedData, 'values')}
			data={groupedData}
		>
			<Svg>
				<AxisX
					gridlines={false}
					ticks={mappedTicks}
					formatTick={formatTickX}
					snapTicks={true}
					tickMarks={true}
				/>
				<AxisY ticks={4} formatTick={formatTickY} />
				<MultiLines />
			</Svg>
		</LayerCake>
	</div>
{/if}
