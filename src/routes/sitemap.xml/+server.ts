export async function GET() {
	const pages = ['app', 'partnerships', 'reports', 'sponsors'];

	const dynamicPages = await fetch(
		`https://api.storyblok.com/v2/cdn/stories?token=${import.meta.env.VITE_PUBLIC_STORYBLOK_TOKEN}`
	)
		.then((resp) => resp.json())
		.then((data) => {
			return data.stories.map((story: any) => {
				const lastModification = new Date(story.published_at);
				const day =
					lastModification.getDate() < 10
						? `0${lastModification.getDate()}`
						: lastModification.getDate();
				const month =
					lastModification.getMonth() < 10
						? `0${lastModification.getMonth()}`
						: lastModification.getMonth();
				const year = lastModification.getFullYear();

				return {
					fullSlug: story.full_slug,
					lastModification: `${year}-${month}-${day}`
				};
			});
		});

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};

	const website = 'https://www.ecoreport.pt';

	return new Response(
		`
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
          <loc>${website}</loc>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>
        ${pages.map(
					(page) => `
        <url>
          <loc>${website}/${page}</loc>
          <changefreq>daily</changefreq>
          <priority>0.6</priority>
        </url>
        `
				)}
        ${dynamicPages.map(
					(page: any) => `
        <url>
          <loc>${website}/${page.fullSlug}</loc>
          <lastmod>${page.lastModification}</lastmod>
          <priority>0.6</priority>
        </url>
        `
				)}
      </urlset>`.trim(),
		{
			headers
		}
	);
}
