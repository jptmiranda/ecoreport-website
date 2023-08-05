<script lang="ts">
	import { getContext } from 'svelte';
	import { area, curveCatmullRom } from 'd3-shape';

	const { data, xGet, yGet, yScale } = getContext<any>('LayerCake');
	export let fill: string = '#ab00d610';
	export let curve = curveCatmullRom.alpha(0.5);

	$: path = area()
		.x($xGet)
		.y1($yGet)
		.y0(() => $yScale(0))
		.curve(curve);
</script>

<path d={path($data)} {fill} />
