import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        year: z.number(),
        title: z.string(),
        description: z.string(),
        size: z.enum(['large', 'normal']).default('normal'),
        tags: z.array(z.string()).default([]),
        image: z.string().optional()
    })
})

export const collections = {
    'projects': projectsCollection
}