<script lang="ts">
	import { onMount } from 'svelte';

	export let value: number;
	export let description: string;
	export let type: 'neutral' | 'positive' | 'negative' = 'neutral';

	let displayValue: HTMLElement;

	const nFormatter = (num: number, digits: number) => {
		const lookup = [
			{ value: 1, symbol: '' },
			{ value: 1e3, symbol: 'K' },
			{ value: 1e6, symbol: 'M' },
			{ value: 1e9, symbol: 'G' }
		];
		const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
		const item = lookup
			.slice()
			.reverse()
			.find(function (item) {
				return num >= item.value;
			});

		return item ? (num / item.value).toFixed(digits).replace(regex, '$1') + item.symbol : '0';
	};

	onMount(() => {
		const getIncreaseFactor = (value: number) => {
			if (value <= 100) {
				return 1;
			} else if (value <= 1000) {
				return 10;
			} else if (value <= 10000) {
				return 100;
			} else {
				return 1000;
			}
		};

		const increaseElementNumber = (i = 0) => {
			if (i >= value) return;

			const difference = Math.abs(value - i);
			const increaseFactorValue = getIncreaseFactor(value);
			const increaseFactor = getIncreaseFactor(
				difference >= increaseFactorValue ? value : difference
			);
			const delay = difference >= increaseFactorValue ? 20 : 5;

			i += increaseFactor;

			if (displayValue) displayValue.innerHTML = nFormatter(i, 1);

			setTimeout(() => increaseElementNumber(i), delay);
		};

		increaseElementNumber();
	});
</script>

<div class="text-center">
	<div
		bind:this={displayValue}
		id="displayValue"
		class="text-2xl sm:text-3xl xl:text-5xl font-bold leading-normal"
		class:text-red-500={type === 'negative'}
		class:text-[#81AF5B]={type === 'positive'}
	>
		0
	</div>

	<div>{description}</div>
</div>
