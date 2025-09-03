// src/pages/rss.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  return rss({
    title: 'VitalEdge Blog',
    description: 'Longevity, wellness, biohacking & product reviews.',
    site: context.site, // uses `site` from astro.config.mjs
    items: posts
      .sort((a, b) => Number(new Date(b.data.pubDate)) - Number(new Date(a.data.pubDate)))
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: new Date(post.data.pubDate),
        link: `/blog/${post.slug}/`,
      })),
    stylesheet: true, // optional: pretty default XSL
  });
}
