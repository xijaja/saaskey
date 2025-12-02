import type { Metadata } from "next";
import { SITE } from "@/config/site";

export type ConstructMetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title = SITE.title,
  description = SITE.description,
  image = SITE.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: ConstructMetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords: SITE.keywords,
    authors: SITE.authors,
    creator: SITE.creator,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: SITE.name,
      url: SITE.url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE.twitterHandle,
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export const HOME_DOMAIN = process.env.NODE_ENV === "production" ? SITE.url : "http://localhost:3000";
