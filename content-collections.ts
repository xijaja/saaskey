import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { remarkGfm } from "fumadocs-core/mdx-plugins";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { z } from "zod";

const TABLE_TITLE_REPLACE_REGEXP = /^##\s/;

// 从内容中提取目录
// Extract table of contents from content
function extractTableOfContents(content: string): Array<{ title: string; slug: string }> {
  const headings = content.match(/^##\s(.+)$/gm);
  const slugger = new GithubSlugger();
  return (
    headings?.map((heading: string) => {
      const title = heading.replace(TABLE_TITLE_REPLACE_REGEXP, "");
      return {
        title,
        slug: slugger.slug(title),
      };
    }) || []
  );
}

// 从内容中提取图片
// Extract images from content
function extractImages(content: string): string[] {
  return content.match(/(?<=<Image[^>]*\bsrc=")[^"]+(?="[^>]*\/>)/g) || [];
}

// 从内容中提取推文 ID
// Extract tweet IDs from content
function extractTweetIds(content: string): string[] {
  const tweetMatches = content.match(/<Tweet\sid="[0-9]+"\s\/>/g);
  return (
    tweetMatches
      ?.map((tweet: string) => {
        const match = tweet.match(/[0-9]+/g);
        return match ? match[0] : "";
      })
      .filter(Boolean) || []
  );
}

// 从内容中提取 GitHub 仓库
// Extract GitHub repositories from content
function extractGithubRepos(content: string): string[] {
  const githubMatches = content.match(/<GitHub\srepo="[a-zA-Z0-9-]+"\s\/>/g);
  return (
    githubMatches
      ?.map((github: string) => {
        const match = github.match(/[a-zA-Z0-9-]+(?=\/)/g);
        return match ? match[0] : "";
      })
      .filter(Boolean) || []
  );
}

// 计算阅读时间
// Calculate reading time
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/g).filter(Boolean).length;
  return Math.ceil(words / 200);
}

// 博客文章集合
// Blog post collection
const BlogPost = defineCollection({
  name: "BlogPost",
  directory: "src/content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    cover: z.string(),
    date: z.string(),
    published: z.boolean().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const rawContent = document.content as string;
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkGfm],
    });
    return {
      ...document,
      slug: document.slug,
      mdx,
      tableOfContents: extractTableOfContents(rawContent),
      images: extractImages(rawContent),
      tweetIds: extractTweetIds(rawContent),
      githubRepos: extractGithubRepos(rawContent),
      readingTime: calculateReadingTime(rawContent),
    };
  },
});

export default defineConfig({
  collections: [BlogPost],
});
