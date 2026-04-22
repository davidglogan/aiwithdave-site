import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('posts')).filter(
		(post) => post.data.status === 'published',
	);
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.subtitle ?? post.data.title,
			pubDate: post.data.created,
			link: `/posts/${post.id}/`,
		})),
	});
}
