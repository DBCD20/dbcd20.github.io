import mdx from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = mdx({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // 👇 Enables static export
  output: 'export',
}

export default withMDX(nextConfig)
