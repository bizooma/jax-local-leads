import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FirmCard } from "./FirmCard";
import type { Firm, PracticeAreaSlug } from "@/data/firms";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  firms: Firm[];
  filter: PracticeAreaSlug | "all";
}

export function FirmCardCarousel({ firms, filter }: Props) {
  const filtered =
    filter === "all"
      ? firms
      : firms.filter((f) => f.practice_areas.includes(filter));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (filtered.length === 0) {
    return (
      <div className="mt-8 rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
        No firms match the selected practice area.
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4">
          {filtered.map((firm) => (
            <div
              key={firm.id}
              className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[45%] lg:basis-[31%]"
            >
              <FirmCard firm={firm} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-end gap-2">
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all hover:bg-accent/10 disabled:opacity-40"
          aria-label="Previous"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground shadow-card transition-all hover:bg-accent/10 disabled:opacity-40"
          aria-label="Next"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
