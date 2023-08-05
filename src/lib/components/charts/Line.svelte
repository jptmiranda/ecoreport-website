<script>
	import { getContext } from 'svelte';
	import { line, curveLinear, curveCatmullRom } from 'd3-shape';

	const { data, xGet, yGet } = getContext('LayerCake');

	export let stroke = '#ab00d6';
	export let curve = curveCatmullRom.alpha(0.5);

	$: path = line().x($xGet).y($yGet).curve(curve);
	// .defined($y)
</script>

<path class="path-line" d={path($data)} {stroke} />

<style>
	.path-line {
		fill: none;
		stroke-linejoin: round;
		stroke-linecap: round;
		stroke-width: 2;
	}
</style>
