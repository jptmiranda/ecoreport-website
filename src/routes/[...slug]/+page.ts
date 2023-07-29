import { error } from '@sveltejs/kit';

export async function load({ params, parent }) {
	const { storyblokApi } = await parent();

	try {
		const { data } = await storyblokApi.get(`cdn/stories/${params.slug}`, {
			version: 'draft'
		});

		return {
			story: data.story
		};
	} catch (err: any) {
		if (err.status === 404) {
			throw error(404, {
				message: 'Not found'
			});
		}
	}
}
