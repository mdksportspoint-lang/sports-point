import { useState } from "react";
import { Lightbox } from "./Lightbox";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        className="group relative block w-full aspect-square overflow-hidden rounded-3xl bg-muted border border-border"
        aria-label={`Open ${alt} gallery`}
      >
        <img
          src={images[0]}
          alt={alt}
          loading="eager"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur opacity-0 group-hover:opacity-100 transition">
          Tap to zoom
        </div>
      </button>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 sm:grid-cols-5 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="aspect-square rounded-xl overflow-hidden bg-muted border border-border hover:border-accent transition"
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={src}
                alt={`${alt} thumbnail ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {open && (
        <Lightbox
          images={images}
          index={index}
          onIndexChange={setIndex}
          onClose={() => setOpen(false)}
          alt={alt}
        />
      )}
    </div>
  );
}
