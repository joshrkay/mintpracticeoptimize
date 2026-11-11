"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GrowingMint, LooseLeaf } from "./mint";
import { Container } from "./ui";

export type Stage = {
  name: string;
  title: string;
  body: string;
  note?: string;
};

/**
 * The peak of the page. The steps scroll past on one side while the photographed
 * plant on the other rises from its base, and the focal plane moves with the
 * scroll: leaves near the lens soften as the plant sharpens.
 */
export function GrowStory({
  heading,
  stages,
}: {
  heading: string;
  stages: Stage[];
}) {
  const scene = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const steps = [...el.querySelectorAll<HTMLElement>("[data-stage]")];
    let frame = 0;

    const update = () => {
      frame = 0;
      const first = steps[0].getBoundingClientRect();
      const last = steps[steps.length - 1].getBoundingClientRect();
      const middle = innerHeight * 0.55;
      // Growth runs from the first step reaching the reading line to the last.
      const span =
        (last.top + last.bottom) / 2 - (first.top + first.bottom) / 2;
      const grow = Math.max(
        0,
        Math.min(1, (middle - first.top) / Math.max(1, span)),
      );
      el.style.setProperty("--grow", String(still ? 1 : grow));
      let nearest = 0;
      steps.forEach((step, i) => {
        const r = step.getBoundingClientRect();
        const best = steps[nearest].getBoundingClientRect();
        if (
          Math.abs((r.top + r.bottom) / 2 - middle) <
          Math.abs((best.top + best.bottom) / 2 - middle)
        )
          nearest = i;
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
    <section
      ref={scene}
      data-dark
      data-no-reveal
      className="relative bg-forest text-white"
    >
      {/* The stage: soft dark foliage far behind, and leaves close to the lens. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
          <div className="focus-back absolute -inset-[8%]">
            <Image
              src="/photos/mint-dark.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-50 blur-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(55%_60%_at_72%_45%,rgba(205,245,106,0.14),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,34,25,0.85)_0%,rgba(11,34,25,0.4)_55%,rgba(11,34,25,0.15)_100%)]" />
          <LooseLeaf
            variant={1}
            className="focus-near absolute -right-[5%] bottom-[2%] hidden w-[19vw] max-w-[20rem] rotate-[-32deg] lg:block"
          />
          <LooseLeaf
            variant={2}
            className="focus-near absolute bottom-[-12%] left-[40%] hidden w-[13vw] max-w-[14rem] rotate-[28deg] lg:block"
          />
        </div>
      </div>

      <Container className="relative pt-24 pb-10 sm:pt-32">
        <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
          {heading}
        </h2>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div className="sticky top-16 z-[5] -mx-5 border-b border-white/10 bg-forest/90 px-5 pt-4 pb-3 backdrop-blur sm:-mx-8 sm:px-8 lg:static lg:order-2 lg:m-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
            <div className="flex flex-col items-center lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)] lg:justify-center">
              <div className="focus-subject">
                <GrowingMint
                  ground
                  className="relative w-[5.5rem] sm:w-44 lg:w-[min(25rem,50vh)]"
                />
              </div>
              <ol className="mt-3 flex gap-2 lg:mt-10" aria-hidden="true">
                {stages.map((stage, i) => (
                  <li
                    key={stage.name}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 sm:text-sm ${
                      i === active
                        ? "bg-lime text-forest"
                        : i < active
                          ? "bg-white/20 text-white"
                          : "bg-white/8 text-white/50"
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
                className={`flex min-h-[62svh] flex-col justify-center py-8 transition-opacity duration-500 lg:min-h-[78vh] ${
                  i === active ? "opacity-100" : "opacity-30"
                }`}
              >
                <h3 className="font-display text-5xl tracking-tight sm:text-7xl">
                  {stage.title}
                </h3>
                <p className="mt-5 max-w-md text-xl leading-relaxed text-white/75">
                  {stage.body}
                </p>
                {stage.note && (
                  <p className="mt-6 inline-block self-start rounded-full bg-lime px-4 py-2 font-semibold text-forest">
                    {stage.note}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
