import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			type: z.literal('blog-post').default('blog-post'),
			status: z.enum(['idea', 'draft', 'ready', 'published']).default('draft'),
			pillar: z.enum(['ai-infra', 'practitioner-craft', 'cross', 'enterprise-data', 'human-texture']),
			tags: z.array(z.string()),
			created: z.coerce.date(),
			updated: z.coerce.date().optional(),
			author: z.string().default('Dave Logan'),
			series: z.string().optional(),
			series_order: z.number().optional(),
			revision_stage: z.string().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { posts };
