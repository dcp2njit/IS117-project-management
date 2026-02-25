import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.boolean(),
    featured: z.boolean(),
    role: z.string(),
    timeframe: z.string(),
    team: z.string(),
    stack: z.array(z.string()),
    summary: z.string(),
    outcomes: z.array(z.string()),
    claims: z.array(
      z.object({
        claim: z.string(),
        receiptLabel: z.string(),
        receiptUrl: z.string().url(),
        receiptType: z.string(),
      })
    ),
    heroImage: z.string(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
