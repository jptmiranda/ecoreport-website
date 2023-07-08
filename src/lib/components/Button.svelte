<script lang="ts">
	export let text: string;
	export let type: 'submit' | 'reset' | 'button' = 'button';
	export let full: boolean;
	export let cta: boolean = false;
	export let action: (() => void) | undefined = undefined;

	const handleAction = () => {
		if (action) action();
	};
</script>

<button
	class="py-3 px-4 flex justify-between gap-x-2 rounded-md items-center bg-white shadow-button text-dark-green font-bold"
	class:w-full={full}
	class:bg-gradient-to-r={cta}
	class:from-dark-green={cta}
	class:to-green={cta}
	class:text-white={cta}
	{type}
	on:click={handleAction}
>
	{text}

	<slot name="suffix-icon" />
</button>
