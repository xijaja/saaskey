import type { BlogPost } from "content-collections";
import BlurImage from "@/components/article/blur-image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPost;
  blurDataURL: string;
};

export default function BlogCard({ post, blurDataURL }: BlogCardProps) {
  return (
    <Link className="group block h-full" href={`/blog/${post.slug}`}>
      <Card className="hover:-translate-y-1 h-full pt-0 transition-all duration-300 hover:shadow-lg">
        {post.cover && (
          <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
            <BlurImage
              alt={post.title}
              blurDataURL={blurDataURL}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              height={400}
              src={post.cover}
              width={600}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="line-clamp-2 text-xl group-hover:text-primary">{post.title}</CardTitle>
          <CardDescription className="line-clamp-2 text-base">{post.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-muted-foreground text-xs" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-between text-muted-foreground text-sm">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.readingTime && (
            <span className="flex items-center gap-1">
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
