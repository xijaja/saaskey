import { allBlogPosts } from "content-collections";
import { ArrowLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Author from "@/components/article/author";
import BlurImage from "@/components/article/blur-image";
import { MDX } from "@/components/article/mdx";
import { constructMetadata } from "@/components/blocks/metadata";
import { SITE } from "@/config/site";
import { Link, routing } from "@/i18n/routing";
import { formatDate, getBlurDataURL } from "@/lib/utils";

// 为所有博客文章生成静态参数
// Generate static params for all blog posts
export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = [];
  for (const locale of routing.locales) {
    for (const post of allBlogPosts) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }
  return params;
}

// 为博客文章生成 SEO 元数据
// Generate SEO metadata for the blog post
export async function generateMetadata({ params }: Props): Promise<Metadata | undefined> {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) {
    return;
  }
  return constructMetadata({
    title: `${post.title} - ${SITE.name}`,
    description: post.description || SITE.description,
    image: post.cover || SITE.ogImage,
  });
}

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = allBlogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const imageSources = Array.isArray(post.images) ? post.images : [];
  const [thumbnailBlurhash, images] = await Promise.all([
    getBlurDataURL(post.cover as string),
    Promise.all(
      imageSources.map(async (src: string) => ({
        src,
        blurDataURL: await getBlurDataURL(src),
      }))
    ),
  ]);
  // 获取相关文章 todo: 可以排除当前文章
  // Get related articles
  const relatedArticles = (post.tags || [])
    .map((tag) => allBlogPosts.find((p) => p.tags?.includes(tag)))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article>
      <div className="mx-auto mt-14 w-full max-w-7xl px-2.5 lg:px-20">
        <Link className="mb-4 flex items-center gap-2 text-gray-500 text-sm hover:text-gray-800" href="/blog">
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to all posts</span>
        </Link>
        <div className="flex max-w-3xl flex-col space-y-4">
          <h1 className="text-balance font-display font-extrabold text-3xl text-gray-700 sm:text-4xl sm:leading-snug">
            {post.title}
          </h1>
          <p className="text-gray-500 text-xl">{post.description}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>
      </div>

      <div className="relative pb-16">
        <div className="absolute top-52 h-[calc(100%-13rem)] w-full border border-gray-200 bg-white/50 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur-lg" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-4 gap-5 px-0 pt-10 lg:gap-10 lg:px-20">
          <div className="relative col-span-4 flex flex-col space-y-8 bg-white sm:rounded-t-xl sm:border sm:border-gray-200 md:col-span-3">
            <BlurImage
              alt={post.title}
              blurDataURL={thumbnailBlurhash}
              className="aspect-1200/630 rounded-t-xl object-cover"
              height={630}
              src={post.cover as string}
              width={1200} // cause it's above the fold
            />
            <MDX
              className="px-5 pt-4 pb-20 sm:px-10"
              code={post.mdx}
              images={images.map((image) => ({
                ...image,
                alt: post.title,
              }))}
            />
          </div>
          <div className="sticky top-20 col-span-1 mt-48 hidden flex-col divide-y divide-gray-200 self-start sm:flex">
            <div className="flex flex-col space-y-4 py-5">
              <p className="text-gray-500 text-sm">Written by</p>
              <Author updatedAt={post.date} username={post.author ?? "xijaja"} />
            </div>
            {relatedArticles.length > 0 && (
              <div className="flex flex-col space-y-4 py-5">
                <p className="text-gray-500 text-sm">Read more</p>
                <ul className="flex flex-col space-y-4">
                  {relatedArticles.map((relatedPost, index) => (
                    <li key={index}>
                      <Link className="group flex flex-col space-y-2" href={`/blog/${relatedPost.slug}`}>
                        <p className="font-semibold text-gray-700 underline-offset-4 group-hover:underline">
                          {relatedPost.title}
                        </p>
                        <p className="line-clamp-2 text-gray-500 text-sm underline-offset-2 group-hover:underline">
                          {relatedPost.description}
                        </p>
                        <p className="text-gray-400 text-xs underline-offset-2 group-hover:underline">
                          {formatDate(relatedPost.date)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
