import Image from "next/image";
import PromptInput from "./prompt-input";

const TILE_HEIGHTS = [320, 260, 300, 360, 360, 300, 420, 240, 380, 420, 440, 460, 340, 280, 240, 240];
const COLUMN_COUNT = 4;

export default function VideoPage() {
  // 将图片分配到不同的列中
  // Assign pictures to different columns to make the page more responsive
  const columns = Array.from({ length: COLUMN_COUNT }, () => [] as number[]);
  TILE_HEIGHTS.forEach((height, idx) => {
    columns[idx % COLUMN_COUNT].push(height);
  });

  return (
    <div className="relative mx-auto h-screen w-full max-w-7xl p-4">
      <div className="my-4 pb-4">
        <h2 className="font-bold text-2xl">Video Generator</h2>
      </div>
      <div className="flex gap-4 pb-32">
        {columns.map((columnHeights, colIdx) => (
          <div className="flex flex-1 flex-col gap-4" key={`column-${colIdx}`}>
            {columnHeights.map((height, itemIdx) => {
              const globalIdx = colIdx + itemIdx * COLUMN_COUNT;
              return (
                <div
                  className="relative w-full overflow-hidden rounded-xl bg-muted"
                  key={`placeholder-tile-${globalIdx}`}
                  style={{ height }}
                >
                  <Image
                    alt={`占位图 ${globalIdx + 1}`}
                    className="object-cover"
                    fill
                    priority={globalIdx < 4}
                    sizes="(max-width: 1024px) 25vw, 25vw"
                    src="/placeholder.svg"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-50 bg-linear-to-b from-transparent to-background/80 pb-6 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4">
          <PromptInput />
        </div>
      </div>
    </div>
  );
}
