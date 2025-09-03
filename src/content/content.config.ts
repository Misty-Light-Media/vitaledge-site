// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    description: z.string(),
    heroImage: z.string().optional(),
    previewImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().url().optional(),
    readingTime: z.number().optional(),
  }),
});

// If you have /src/content/products, define it here too (or remove that folder)
// const products = defineCollection({ type: 'data', schema: z.any() });

export const collections = {
  blog,
  // products,
};
