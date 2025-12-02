import Link from "next/link";

import BlurImage from "@/components/article/blur-image";
import { timeAgo } from "@/lib/utils";

type Author = {
  name: string;
  image: string;
};

type Authors = {
  [key: string]: Author;
};

export const authors: Authors = {
  Sherwin: {
    name: "Sherwin",
    image: "https://github.com/xijaja.png",
  },
};

type AuthorProps = {
  username: string;
  updatedAt?: string;
  imageOnly?: boolean;
};

export default function Author({ username, updatedAt, imageOnly }: AuthorProps) {
  const author = authors[username];
  if (!author) {
    return null;
  }
  if (imageOnly) {
    return (
      <BlurImage
        alt={author.name}
        className="rounded-full transition-all group-hover:brightness-90"
        height={36}
        src={author.image}
        width={36}
      />
    );
  }

  if (updatedAt) {
    return (
      <div className="flex items-center space-x-3">
        <BlurImage alt={author.name} className="rounded-full" height={36} src={author.image} width={36} />
        <div className="flex flex-col">
          <p className="text-sm text-warm-white/80">Written by {author.name}</p>
          <time className="font-light text-sm text-warm-white/60" dateTime={updatedAt}>
            Last updated {timeAgo(new Date(updatedAt))}
          </time>
        </div>
      </div>
    );
  }

  return (
    <Link
      className="group flex items-center space-x-3"
      href="https://github.com/xijaja"
      rel="noopener noreferrer"
      target="_blank"
    >
      <BlurImage
        alt={username}
        className="rounded-full transition-all group-hover:brightness-90"
        height={40}
        src="/avatar.jpg"
        width={40}
      />
      <div className="flex flex-col">
        <p className="font-semibold text-warm-white">{author.name}</p>
        <p className="text-sm text-warm-white/60">@{username}</p>
      </div>
    </Link>
  );
}
