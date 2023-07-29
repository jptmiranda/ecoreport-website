import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';

export async function load() {
	storyblokInit({
		accessToken: import.meta.env.VITE_PUBLIC_STORYBLOK_TOKEN,
		use: [apiPlugin],
		components: {
			page: (await import('$lib/storyblok/Page.svelte')).default,
			hero: (await import('$lib/storyblok/Hero.svelte')).default
		}
	});

	const storyblokApi = useStoryblokApi();

	return {
		storyblokApi
	};
}
