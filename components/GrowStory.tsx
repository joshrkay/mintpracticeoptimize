"use client";

import { useEffect, useRef, useState } from "react";
import { GrowingMint } from "./mint";

export type Stage = { name: string; title: string; body: string; note?: string };

/**
 * A pinned scene: the steps scroll past on one side while the plant on the
 * other grows from seed to full mint.
 */
export function GrowStory({ stages }: { stages: Stage[] }) {
  const scene = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = [...el.querySelectorAll<HTMLElement>("[data-stage]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const travelled = innerHeight * 0.65 - rect.top;
      const grow = Math.max(0, Math.min(1, travelled / (rect.height - innerHeight * 0.35)));
      el.style.setProperty("--grow", String(still ? 1 : grow));
      const middle = innerHeight * 0.55;
      let nearest = 0;
      steps.forEach((step, i) => {
        const r = step.getBoundingClientRect();
        const centre = (r.top + r.bottom) / 2;
        const best = steps[nearest].getBoundingClientRect();
        if (Math.abs(centre - middle) < Math.abs((best.top + best.bottom) / 2 - middle)) nearest = i;
      });
      setActive(nearest);
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={scene} data-no-reveal className="lg:grid lg:grid-cols-2 lg:gap-16">
      <div className="sticky top-16 z-[5] -mx-5 border-b border-line bg-paper/95 px-5 pt-4 pb-3 backdrop-blur lg:border-0 sm:-mx-8 sm:px-8 lg:static lg:order-2 lg:m-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
        <div className="flex flex-col items-center lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:justify-center">
          <GrowingMint ground tags className="relative w-[min(38vw,9.5rem)] sm:w-48 lg:w-[min(27rem,50vh)]" />
          <ol className="mt-3 flex gap-2 lg:mt-8" aria-hidden="true">
            {stages.map((stage, i) => (
              <li
                key={stage.name}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 sm:text-sm ${
                  i === active ? "bg-forest text-white" : i < active ? "bg-mint-soft text-mint-deep" : "bg-line/60 text-muted"
                }`}
              >
                {stage.name}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <ol className="lg:order-1">
        {stages.map((stage, i) => (
          <li
            key={stage.title}
            data-stage
            className={`flex min-h-[52vh] flex-col justify-center py-8 transition-opacity duration-500 lg:min-h-[72vh] ${
              i === active ? "opacity-100" : "opacity-30"
            }`}
          >
            <span className="font-display text-7xl leading-none text-leaf sm:text-8xl">0{i + 1}</span>
            <h3 className="mt-4 font-display text-4xl sm:text-5xl">{stage.title}</h3>
            <p className="mt-4 max-w-md text-xl leading-relaxed text-muted">{stage.body}</p>
            {stage.note && (
              <p className="mt-5 inline-block self-start rounded-full bg-lime px-4 py-2 font-semibold text-forest">
                {stage.note}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
