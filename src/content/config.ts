import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const labCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
});

const secretCollection = defineCollection({});

export const collections = {
  posts: postsCollection,
  lab: labCollection,
  secret: secretCollection,
};
