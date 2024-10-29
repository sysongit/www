import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    // date: z.date(),
    // lastEdited: z.date(),
  }),
});

const labCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

const secretCollection = defineCollection({});

export const collections = {
  posts: postsCollection,
  lab: labCollection,
  secret: secretCollection,
};
