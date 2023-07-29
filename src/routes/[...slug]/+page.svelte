<script lang="ts">
	import { onMount } from 'svelte';
	import { StoryblokComponent, getStoryblokApi, useStoryblokBridge } from '@storyblok/svelte';

	export let data;

	onMount(async () => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<svelte:head>
	<title>{data.story.name}</title>
</svelte:head>

<div>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</div>
