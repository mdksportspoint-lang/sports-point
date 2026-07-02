import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  alt,
}: {
  images: string[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  alt: string;
}) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);
  const touchStart = useRef<{ x: number; y: number; t: number } | null>(null);
  const pinchStart = useRef<{ dist: number; zoom: number } | null>(null);

  const total = images.length;
  const canPrev = total > 1;
  const canNext = total > 1;

  const go = (dir: 1 | -1) => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    onIndexChange((index + dir + total) % total);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && canNext) go(1);
      if (e.key === "ArrowLeft" && canPrev) go(-1);
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(4, z + 0.5));
      if (e.key === "-") setZoom((z) => Math.max(1, z - 0.5));
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (zoom > 1) {
      dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
      (e.target as Element).setPointerCapture?.(e.pointerId);
    }
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current && zoom > 1) {
      setOffset({
        x: dragStart.current.ox + (e.clientX - dragStart.current.x),
        y: dragStart.current.oy + (e.clientY - dragStart.current.y),
      });
    }
  };
  const onPointerUp = () => {
    dragStart.current = null;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStart.current = { dist: Math.hypot(dx, dy), zoom };
    } else if (e.touches.length === 1 && zoom === 1) {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, t: Date.now() };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchStart.current) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const next = Math.max(1, Math.min(4, pinchStart.current.zoom * (dist / pinchStart.current.dist)));
      setZoom(next);
      if (next === 1) setOffset({ x: 0, y: 0 });
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    pinchStart.current = null;
    if (touchStart.current && zoom === 1 && e.changedTouches.length === 1) {
      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0 && canNext) go(1);
        else if (dx > 0 && canPrev) go(-1);
      }
    }
    touchStart.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`${alt} — image ${index + 1} of ${total}`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <button
          onClick={() => setZoom((z) => Math.max(1, z - 0.5))}
          aria-label="Zoom out"
          className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition disabled:opacity-40"
          disabled={zoom <= 1}
        >
          <ZoomOut className="h-5 w-5" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.min(4, z + 0.5))}
          aria-label="Zoom in"
          className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur transition disabled:opacity-40"
          disabled={zoom >= 4}
        >
          <ZoomIn className="h-5 w-5" />
        </button>
        <div className="hidden sm:flex items-center px-3 h-11 rounded-full bg-white/10 text-white text-sm backdrop-blur">
          {index + 1} / {total}
        </div>
      </div>

      {canPrev && (
        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="hidden sm:flex absolute left-4 z-10 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      {canNext && (
        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="hidden sm:flex absolute right-4 z-10 h-14 w-14 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}

      <div
        className="w-full h-full flex items-center justify-center overflow-hidden touch-none select-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={(e) => {
          if (e.target === e.currentTarget && zoom === 1) onClose();
        }}
      >
        <img
          src={images[index]}
          alt={`${alt} — ${index + 1}`}
          draggable={false}
          className="max-w-[92vw] max-h-[85vh] object-contain transition-transform duration-200 will-change-transform"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            cursor: zoom > 1 ? "grab" : "zoom-in",
          }}
          onDoubleClick={() => {
            setZoom((z) => (z > 1 ? 1 : 2));
            setOffset({ x: 0, y: 0 });
          }}
        />
      </div>

      {total > 1 && (
        <div className="absolute bottom-6 inset-x-0 flex justify-center gap-1.5 px-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setZoom(1);
                setOffset({ x: 0, y: 0 });
                onIndexChange(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
