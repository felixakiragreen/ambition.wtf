import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import mdx from 'vite-plugin-mdx'
import rehypeSlug from 'rehype-slug'

// `options` are passed to `@mdx-js/mdx`
const options = {
  // See https://mdxjs.com/advanced/plugins
  remarkPlugins: [
    // E.g. `remark-frontmatter`
  ],
  rehypePlugins: [
    rehypeSlug
  ],
}

export default defineConfig({
  plugins: [
    //
    reactRefresh(),
    mdx(options),
  ],
})
