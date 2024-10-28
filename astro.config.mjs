import { defineConfig } from "astro/config";

// const setLayout = () => {
//   return function (_, file) {
//     file.data.astro.frontmatter.layout =
//       file.data.astro.frontmatter.layout || "/src/layouts/Post.astro";
//   };
// };

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["normalize.css"],
    },
  },
  // markdown: {
  //   remarkPlugins: [setLayout],
  // },
  integrations: [mdx()],
});
