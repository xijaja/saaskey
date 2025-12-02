"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Regex patterns defined at top level for performance
const YOUTUBE_REGEX = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
const VIMEO_REGEX = /(?:vimeo\.com\/)(\d+)/;
const LOOM_REGEX = /(?:loom\.com\/(?:share|embed)\/)([a-zA-Z0-9]+)/;

type VideoProps = {
  src: string;
  title?: string;
  thumbnail?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
  autoplay?: boolean;
  caption?: string;
};

export function Video({
  src,
  title = "Video",
  thumbnail,
  aspectRatio = "16/9",
  autoplay = false,
  caption,
}: VideoProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay);

  // Extract video ID and platform from URL
  const getVideoEmbed = (url: string) => {
    // YouTube
    const youtubeMatch = url.match(YOUTUBE_REGEX);
    if (youtubeMatch) {
      return {
        platform: "youtube",
        id: youtubeMatch[1],
        embedUrl: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=${autoplay ? 1 : 0}`,
        thumbnailUrl: thumbnail || `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`,
      };
    }

    // Vimeo
    const vimeoMatch = url.match(VIMEO_REGEX);
    if (vimeoMatch) {
      return {
        platform: "vimeo",
        id: vimeoMatch[1],
        embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=${autoplay ? 1 : 0}`,
        thumbnailUrl: thumbnail,
      };
    }

    // Loom
    const loomMatch = url.match(LOOM_REGEX);
    if (loomMatch) {
      return {
        platform: "loom",
        id: loomMatch[1],
        embedUrl: `https://www.loom.com/embed/${loomMatch[1]}?autoplay=${autoplay ? 1 : 0}`,
        thumbnailUrl: thumbnail,
      };
    }

    // Direct video file or unknown
    return {
      platform: "direct",
      id: "",
      embedUrl: url,
      thumbnailUrl: thumbnail,
    };
  };

  const videoData = getVideoEmbed(src);

  const aspectRatioClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  }[aspectRatio];

  if (videoData.platform === "direct") {
    return (
      <figure className="my-8">
        <div className={`relative ${aspectRatioClass} w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800`}>
          <video autoPlay={autoplay} className="h-full w-full object-cover" controls src={src} title={title}>
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </div>
        {caption && (
          <figcaption className="mt-2 text-center text-gray-600 text-sm dark:text-gray-400">{caption}</figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-8">
      <div className={`relative ${aspectRatioClass} w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800`}>
        {!isPlaying && videoData.thumbnailUrl ? (
          <button
            aria-label={`Play ${title}`}
            className="group relative h-full w-full"
            onClick={() => setIsPlaying(true)}
            type="button"
          >
            <Image alt={title} className="h-full w-full object-cover" fill src={videoData.thumbnailUrl} />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform group-hover:scale-110">
                <Play className="h-8 w-8 text-white" fill="white" />
              </div>
            </div>
          </button>
        ) : (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            src={videoData.embedUrl}
            title={title}
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-gray-600 text-sm dark:text-gray-400">{caption}</figcaption>
      )}
    </figure>
  );
}
