import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const wall = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/wall" }),
	schema: z.object({
		title: z.string(),
		image: z.string(),
		description: z.string(),
		artist: z.string(),
		dateOfCreation: z.string(),
		medium: z.string(),
		size: z.string(),
	}),
});

export const collections = { wall };