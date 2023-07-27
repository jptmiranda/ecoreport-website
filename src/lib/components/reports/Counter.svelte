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
			if (value < 100) {
				return 1;
			} else if (value > 100 && value <= 1000) {
				return 10;
			} else if (value > 1000 && value <= 10000) {
				return 100;
			} else {
				return 1000;
			}
		};

		const increaseElementNumber = () => {
			const finalNumber = value;
			increaseNumberRecursive(0, finalNumber);
		};

		const increaseNumberRecursive = (i: number, finalNumber: number) => {
			if (i <= finalNumber) {
				if (displayValue) displayValue.innerHTML = nFormatter(i, 1);

				const difference = Math.abs(finalNumber - i);
				setTimeout(
					function () {
						const increaseFactor = getIncreaseFactor(
							difference >= getIncreaseFactor(finalNumber) ? finalNumber : difference
						);
						increaseNumberRecursive(i + increaseFactor, finalNumber);
					},
					difference >= getIncreaseFactor(finalNumber) ? 20 : 5
				);
			}
		};

		increaseElementNumber();
	});
</script>

<div class="text-center">
	<div
		bind:this={displayValue}
		id="displayValue"
		class="text-5xl font-bold leading-normal"
		class:text-red-400={type === 'negative'}
		class:text-[#81AF5B]={type === 'positive'}
	>
		0
	</div>

	<div>{description}</div>
</div>
