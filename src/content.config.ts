import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const atlas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    area: z.enum([
      'Filosofía',
      'Computer Science', 
      'Machine Learning', 
      'Matemáticas', 
      'Geopolítica',
      'Apuntes Tec',
      'Biología', 
      'Economía', 
      'Otros']),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    relatedConcepts: z.array(z.string()).default([]),
    courses: z.array(z.object({ name: z.string(), link: z.string().url().optional() })).default([]),
    books: z.array(z.object({ title: z.string(), author: z.string().optional(), link: z.string().url().optional() })).default([]),
    projects: z.array(z.object({ name: z.string(), link: z.string().url() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { atlas };