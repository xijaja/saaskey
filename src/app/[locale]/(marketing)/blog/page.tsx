import { allBlogPosts, type BlogPost } from "content-collections";
import { getBlurDataURL } from "@/lib/utils";
import BlogCard from "./blog-card";

export default async function Posts() {
  // 只显示已发布的文章
  // Only show published posts
  const publishedPosts = allBlogPosts.filter((post: BlogPost) => post.published !== false);

  // 按日期排序，最新的在前
  // Sort by date, newest first
  const sortedPosts = [...publishedPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 预先获取所有封面图片的 blurDataURL
  // Pre-fetch all cover images blurDataURL
  const postsWithBlurData = await Promise.all(
    sortedPosts.map(async (post) => ({
      post,
      blurDataURL: await getBlurDataURL(post.cover as string),
    }))
  );

  return (
    <div className="mx-auto mt-14 w-full px-2">
      <div className="mb-12">
        <h1 className="mb-4 font-display font-extrabold text-4xl text-gray-700 sm:text-5xl">Blog</h1>
        <p className="text-gray-500 text-lg">Discover the latest articles, tutorials, and insights</p>
      </div>

      {sortedPosts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {postsWithBlurData.map(({ post, blurDataURL }) => (
            <BlogCard blurDataURL={blurDataURL} key={post._meta.path} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
