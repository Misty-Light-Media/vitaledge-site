import { rss } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'VitalEdge Blog',
    description: 'Longevity, wellness, biohacking, and product reviews.',
    site: context.site, // uses astro.config.mjs `site`
    items: posts
      .sort((a, b) => Number(new Date(b.data.pubDate)) - Number(new Date(a.data.pubDate)))
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        pubDate: new Date(post.data.pubDate),
      })),
  });
}
