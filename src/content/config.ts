import { z, defineCollection } from 'astro:content';
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    author: z.string().optional(),
    heroImage: z.string().optional(),
    previewImage: z.string().optional(),
  })
});
export const collections = { blog };
