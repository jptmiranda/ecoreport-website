<script lang="ts">
	import { getContext } from 'svelte';
	const { width, height, xScale, yRange } = getContext<any>('LayerCake');

	export let gridlines = true;
	export let tickMarks = false;
	export let baseline = false;
	export let snapTicks = false;
	export let formatTick = (d: any) => d;
	export let ticks: any = undefined;
	export let xTick = 0;
	export let yTick = 16;

	$: isBandwidth = typeof $xScale.bandwidth === 'function';

	$: tickVals = Array.isArray(ticks)
		? ticks
		: isBandwidth
		? $xScale.domain()
		: typeof ticks === 'function'
		? ticks($xScale.ticks())
		: $xScale.ticks(ticks);

	function textAnchor(i: any) {
		if (snapTicks === true) {
			if (i === 0) {
				return 'start';
			}
			if (i === tickVals.length - 1) {
				return 'end';
			}
		}
		return 'middle';
	}
</script>

<g class="axis x-axis" class:snapTicks>
	{#each tickVals as tick, i (i)}
		<g class="tick tick-{i}" transform="translate({$xScale(tick)},{Math.max(...$yRange)})">
			{#if gridlines !== false}
				<line class="gridline" y1={$height * -1} y2="0" x1="0" x2="0" />
			{/if}
			{#if tickMarks === true}
				<line
					class="tick-mark"
					y1={0}
					y2={6}
					x1={isBandwidth ? $xScale.bandwidth() / 2 : 0}
					x2={isBandwidth ? $xScale.bandwidth() / 2 : 0}
				/>
			{/if}
			<text
				x={isBandwidth ? $xScale.bandwidth() / 2 + xTick : xTick}
				y={yTick}
				dx=""
				dy=""
				text-anchor={textAnchor(i)}>{formatTick(tick)}</text
			>
		</g>
	{/each}
	{#if baseline === true}
		<line class="baseline" y1={$height + 0.5} y2={$height + 0.5} x1="0" x2={$width} />
	{/if}
</g>

<style>
	.tick {
		font-size: 0.725em;
		font-weight: 200;
	}

	line,
	.tick line {
		stroke: #aaa;
		stroke-dasharray: 2;
	}

	.tick text {
		fill: #666;
	}

	.tick .tick-mark,
	.baseline {
		stroke-dasharray: 0;
	}
	/* This looks slightly better */
	.axis.snapTicks .tick:last-child text {
		transform: translateX(3px);
	}
	.axis.snapTicks .tick.tick-0 text {
		transform: translateX(-3px);
	}
</style>
