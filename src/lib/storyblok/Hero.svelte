<script lang="ts">
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok: any;
</script>

<h1 use:storyblokEditable={blok} class="py-8 mb-6 text-5xl font-bold text-center">
	{blok.title}
</h1>
