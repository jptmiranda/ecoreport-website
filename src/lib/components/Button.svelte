<script lang="ts">
	export let text: string;
	export let full: boolean;
	export let type: 'submit' | 'reset' | 'button' = 'button';
</script>

<button
	class="py-3 px-4 flex justify-between gap-x-2 rounded-md items-center bg-white shadow-button text-dark-green font-bold"
	class:w-full={full}
	{type}
>
	{text}

	<slot name="suffix-icon" />
</button>
