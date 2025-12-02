import ImageClient from "./image-form";

export default function ImagePage() {
  return (
    <div className="mx-auto h-screen w-full max-w-7xl p-4">
      <div className="my-4 pb-4">
        <h2 className="font-bold text-2xl">Image Generator</h2>
      </div>
      <ImageClient />
    </div>
  );
}
