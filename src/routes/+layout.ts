import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/svelte';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

export const load = async ({ data }) => {
	storyblokInit({
		accessToken: import.meta.env.VITE_PUBLIC_STORYBLOK_TOKEN,
		use: [apiPlugin],
		components: {
			page: (await import('$lib/storyblok/Page.svelte')).default,
			hero: (await import('$lib/storyblok/Hero.svelte')).default
		}
	});

	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event: { fetch },
		serverSession: data.session
	});
	const storyblokApi = useStoryblokApi();

	return {
		storyblokApi,
		supabase
	};
};
