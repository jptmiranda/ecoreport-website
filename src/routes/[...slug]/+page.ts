export async function load({ params, parent }) {
	const { storyblokApi } = await parent();
	const { data } = await storyblokApi.get(`cdn/stories/${params.slug}`, {
		version: 'draft'
	});

	return {
		story: data.story
	};
}
