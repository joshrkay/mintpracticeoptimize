"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { LeafImage } from "./mint";

const xAt = (y: number) => 44 + 15 * Math.sin(y / 190) + 6 * Math.sin(y / 67);

/**
 * A mint runner that grows down the side of the page as the visitor scrolls,
 * putting out a leaf every so often. On narrower screens, where there is no
 * margin to grow in, it becomes a stem along the top edge.
 */
export function Vine() {
  const pathname = usePathname();
  const svg = useRef<SVGSVGElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const measure = () => setHeight(main.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(main);
    return () => observer.disconnect();
  }, [pathname]);

  const { path, leaves } = useMemo(() => {
    const points: string[] = [];
    for (let y = 0; y <= height; y += 20) points.push(`${xAt(y).toFixed(1)} ${y}`);
    const leaves = [];
    for (let y = 150, i = 0; y < height - 60; y += 165, i++) {
      leaves.push({ y, x: xAt(y), side: i % 2 ? -1 : 1, size: 0.8 + ((i * 7) % 5) / 10 });
    }
    return { path: points.length > 1 ? `M${points.join("L")}` : "", leaves };
  }, [height]);

  useEffect(() => {
    const main = document.querySelector("main");
    const root = svg.current;
    if (!main || !root || !height) return;
    const stem = root.querySelector<SVGPathElement>(".vine-stem");
    const bud = root.querySelector<SVGCircleElement>(".vine-bud");
    const leafEls = [...root.querySelectorAll<SVGGElement>(".vine-leaf")];
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = main.getBoundingClientRect().top;
      const reach = still ? height : Math.max(0, Math.min(height, innerHeight * 0.62 - top));
      stem?.style.setProperty("stroke-dashoffset", String(1 - reach / height));
      bud?.setAttribute("cx", String(xAt(reach)));
      bud?.setAttribute("cy", String(reach));
      for (const el of leafEls) el.classList.toggle("on", Number(el.dataset.y) < reach - 8);
      const page = document.documentElement;
      const progress = scrollY / Math.max(1, page.scrollHeight - innerHeight);
      bar.current?.style.setProperty("--progress", String(still ? 1 : progress));
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
  }, [height, path]);

  return (
    <>
      <svg
        ref={svg}
        aria-hidden="true"
        width="96"
        height={height}
        className="pointer-events-none absolute top-0 left-[max(0px,calc((100vw-72rem)/2-5.5rem))] z-10 hidden xl:block"
      >
        <path d={path} pathLength="1" className="vine-stem fill-none stroke-[#3f8a45]" strokeWidth="3.5" strokeLinecap="round" />
        {leaves.map((leaf) => (
          <g key={leaf.y} transform={`translate(${leaf.x.toFixed(1)} ${leaf.y}) rotate(${leaf.side * 112}) scale(${leaf.size})`}>
            <g className="vine-leaf" data-y={leaf.y}>
              <g className="sway" style={{ animationDelay: `${-(leaf.y % 5)}s` }}>
                <LeafImage length={42} variant={(leaf.y / 165) | 0} />
              </g>
            </g>
          </g>
        ))}
        <circle className="vine-bud fill-[#b9e08a] stroke-[#2f6f36]" r="4.5" strokeWidth="2" />
      </svg>
      <div
        ref={bar}
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-16 z-20 h-[3px] xl:hidden"
      >
        <div className="h-full origin-left scale-x-[var(--progress,0)] bg-leaf" />
        <svg viewBox="-12 -44 24 48" className="absolute -top-3 left-[calc(var(--progress,0)*100%)] w-4 -translate-x-1/2 rotate-[100deg]">
          <LeafImage length={42} />
        </svg>
      </div>
    </>
  );
}
