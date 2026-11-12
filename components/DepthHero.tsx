"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { LooseLeaf } from "./mint";

/**
 * A photographic hero built in planes: a backdrop, drifting mid-distance leaves,
 * the copy, the sprig, and out-of-focus leaves close to the lens. Scrolling and
 * the pointer move each plane by a different amount, which is what gives depth.
 * `pinned` holds the scene while the planes travel; without it the scene scrolls
 * away normally and only the pointer moves it.
 */
export function DepthHero({
  children,
  pinned = false,
  subjectClass = "",
}: {
  children: ReactNode;
  pinned?: boolean;
  /** Extra classes for the sprig, to place it differently on a particular page. */
  subjectClass?: string;
}) {
  const scene = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scene.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const wide = matchMedia("(min-width: 1024px)");
    const target = { x: 0, y: 0 };
    const now = { x: 0, y: 0 };
    let frame = 0;

    const tick = () => {
      frame = 0;
      now.x += (target.x - now.x) * 0.07;
      now.y += (target.y - now.y) * 0.07;
      const rect = el.getBoundingClientRect();
      const header = 64;
      // Pinned (large screens only): progress runs while the scene is held in place.
      // Otherwise the hero scrolls away normally, so progress runs across its own height.
      // Using the pinned formula on a phone squeezed the whole animation into ~60px.
      const travel =
        pinned && wide.matches
          ? rect.height - (innerHeight - header)
          : rect.height * 0.9;
      el.style.setProperty(
        "--p",
        String(
          Math.max(0, Math.min(1, (header - rect.top) / Math.max(1, travel))),
        ),
      );
      el.style.setProperty("--mx", now.x.toFixed(4));
      el.style.setProperty("--my", now.y.toFixed(4));
      if (Math.abs(target.x - now.x) + Math.abs(target.y - now.y) > 0.002)
        frame = requestAnimationFrame(tick);
    };
    const wake = () => {
      frame ||= requestAnimationFrame(tick);
    };
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      target.x = (e.clientX / innerWidth) * 2 - 1;
      target.y = (e.clientY / innerHeight) * 2 - 1;
      wake();
    };
    wake();
    addEventListener("scroll", wake, { passive: true });
    addEventListener("resize", wake);
    addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      removeEventListener("scroll", wake);
      removeEventListener("resize", wake);
      removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, [pinned]);

  return (
    <section
      ref={scene}
      data-hero
      data-dark
      data-pinned={pinned ? "" : undefined}
      className={`depth relative bg-forest text-white ${pinned ? "lg:h-[175vh]" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${pinned ? "min-h-[calc(100svh-4rem)] lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]" : ""}`}
      >
        {/* Backdrop */}
        <div className="depth-back absolute -inset-[6%]">
          <Image
            src="/photos/mint-dark.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Shade only where the words sit, and a little light from the upper right. */}
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,34,25,0.94)_0%,rgba(11,34,25,0.78)_38%,rgba(11,34,25,0.2)_72%,rgba(11,34,25,0.05)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_70%_at_82%_18%,rgba(205,245,106,0.16),transparent_70%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest to-transparent" />

        {/* Leaves in the middle distance, slightly soft */}
        <div
          aria-hidden="true"
          className="depth-mid pointer-events-none absolute inset-0 hidden sm:block"
        >
          <LooseLeaf
            variant={2}
            className="absolute top-[12%] left-[52%] w-16 rotate-[140deg] opacity-70 blur-[2px]"
          />
          <LooseLeaf
            variant={3}
            className="absolute top-[70%] left-[44%] w-12 rotate-[-60deg] opacity-60 blur-[3px]"
          />
        </div>

        {/* The sprig */}
        <div
          aria-hidden="true"
          className={`depth-subject pointer-events-none absolute right-[-6%] bottom-[-4%] w-[46%] max-w-[12.5rem] sm:right-[3%] sm:w-[34%] sm:max-w-[15rem] lg:top-1/2 lg:right-[7%] lg:bottom-auto lg:w-[26%] lg:max-w-[30rem] xl:w-[34%] ${subjectClass}`}
        >
          <Image
            src="/photos/mint-crown.webp"
            alt=""
            width={510}
            height={454}
            priority
            sizes="(min-width: 1024px) 34vw, 62vw"
            className="h-auto w-full drop-shadow-[0_40px_45px_rgba(0,0,0,0.55)]"
          />
        </div>

        {/* The words */}
        <div
          className={`depth-copy relative ${pinned ? "flex min-h-[calc(100svh-4rem)] items-center lg:h-full lg:min-h-0" : ""}`}
        >
          {children}
        </div>

        {/* Leaves close to the lens: large and out of focus */}
        <div
          aria-hidden="true"
          className="depth-front pointer-events-none absolute inset-0"
        >
          <LooseLeaf
            variant={1}
            className="absolute -bottom-[38%] -left-[13%] w-[36vw] max-w-[26rem] rotate-[38deg] blur-[9px] sm:w-[24vw] lg:-bottom-[42%] lg:w-[22vw]"
          />
          <LooseLeaf
            variant={2}
            className="absolute -top-[16%] -right-[6%] hidden w-[20vw] max-w-[24rem] rotate-[205deg] blur-[12px] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
