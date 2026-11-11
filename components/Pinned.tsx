"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * A scene that holds still while the visitor scrolls through it. The section is
 * `vh` viewport-heights tall; its contents stay pinned under the header, and
 * `--p` runs from 0 to 1 across the scroll so CSS can drive the scene.
 * With `desktopOnly`, small screens get an ordinary unpinned section.
 */
export function Pinned({
  vh,
  desktopOnly = false,
  className = "",
  children,
  ...rest
}: {
  vh: number;
  desktopOnly?: boolean;
  className?: string;
  children: ReactNode;
} & Record<`data-${string}`, string | boolean | undefined>) {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = section.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = 64;
      const rect = el.getBoundingClientRect();
      const travel = Math.max(1, rect.height - (innerHeight - header));
      el.style.setProperty("--p", String(Math.max(0, Math.min(1, (header - rect.top) / travel))));
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
      ref={section}
      {...rest}
      style={{ "--pin-h": `${vh}vh`, "--p": 0 } as CSSProperties}
      className={`relative ${desktopOnly ? "lg:h-[var(--pin-h)]" : "h-[var(--pin-h)]"} ${className}`}
    >
      <div
        className={
          desktopOnly
            ? "lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-hidden"
            : "sticky top-16 h-[calc(100svh-4rem)] overflow-hidden"
        }
      >
        {children}
      </div>
    </section>
  );
}
