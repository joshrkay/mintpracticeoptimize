"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { LeafImage } from "./mint";

const xAt = (y: number) => 50 + 13 * Math.sin(y / 190) + 5 * Math.sin(y / 67);
// Mint puts out its leaves in opposite pairs at each joint of the stem, and each
// pair sits at right angles to the last, so every other pair looks shorter.
const NODE_GAP = 210;

/**
 * A mint runner that grows down the side of the page as the visitor scrolls,
 * following the plant's own pattern: a jointed stem with a pair of leaves at
 * each joint and new growth at the tip. On narrower screens, where there is no
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

  // The home page tells the growth story in photographs; the runner is for the other pages.
  const hidden = pathname === "/";

  const { path, nodes } = useMemo(() => {
    const points: string[] = [];
    for (let y = 0; y <= height; y += 20)
      points.push(`${xAt(y).toFixed(1)} ${y}`);
    const nodes = [];
    for (let y = 170, i = 0; y < height - 80; y += NODE_GAP, i++) {
      nodes.push({ y, x: xAt(y), turned: i % 2 === 1, variant: i });
    }
    return { path: points.length > 1 ? `M${points.join("L")}` : "", nodes };
  }, [height]);

  useEffect(() => {
    const main = document.querySelector("main");
    const root = svg.current;
    if (!main || !root || !height) return;
    const stems = [...root.querySelectorAll<SVGPathElement>(".vine-stem")];
    const tip = root.querySelector<SVGGElement>(".vine-tip");
    const nodeEls = [...root.querySelectorAll<SVGGElement>(".vine-node")];
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const top = main.getBoundingClientRect().top;
      const reach = still
        ? height
        : Math.max(0, Math.min(height, innerHeight * 0.62 - top));
      for (const stem of stems)
        stem.style.setProperty("stroke-dashoffset", String(1 - reach / height));
      // New growth leans the way the stem is heading.
      const lean =
        (Math.atan2(xAt(reach + 12) - xAt(reach - 12), 24) * -180) / Math.PI;
      tip?.setAttribute(
        "transform",
        `translate(${xAt(reach).toFixed(1)} ${reach.toFixed(1)}) rotate(${lean.toFixed(1)})`,
      );
      for (const el of nodeEls)
        el.classList.toggle("on", Number(el.dataset.y) < reach - 10);
      const page = document.documentElement;
      const progress = scrollY / Math.max(1, page.scrollHeight - innerHeight);
      bar.current?.style.setProperty(
        "--progress",
        String(still ? 1 : progress),
      );
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

  if (hidden) return null;

  return (
    <>
      <svg
        ref={svg}
        aria-hidden="true"
        width="100"
        height={height}
        className="pointer-events-none absolute top-0 left-[max(0px,calc((100vw-72rem)/2-5.75rem))] z-10 hidden overflow-visible xl:block"
      >
        {/* The stem: a dark edge with a lighter core, like the one in the photographs. */}
        <path
          d={path}
          pathLength="1"
          className="vine-stem fill-none stroke-[#46601f]"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d={path}
          pathLength="1"
          className="vine-stem fill-none stroke-[#8fae4a]"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {nodes.map((node) => (
          <g
            key={node.y}
            className="vine-node"
            data-y={node.y}
            transform={`translate(${node.x.toFixed(1)} ${node.y})`}
          >
            <circle r="4" className="vine-joint fill-[#46601f]" />
            {[1, -1].map((side) => (
              <g
                key={side}
                transform={`rotate(${side * (node.turned ? 138 : 108)})`}
              >
                <g
                  className="vine-leaf"
                  style={{ transitionDelay: side === 1 ? "0ms" : "90ms" }}
                >
                  <g
                    className="sway"
                    style={{ animationDelay: `${-((node.y + side) % 5)}s` }}
                  >
                    <LeafImage
                      length={node.turned ? 27 : 40}
                      variant={node.variant + (side === 1 ? 0 : 1)}
                    />
                  </g>
                </g>
              </g>
            ))}
          </g>
        ))}
        {/* New growth at the tip: a small pair of leaves just opening. */}
        <g className="vine-tip">
          {[1, -1].map((side) => (
            <g key={side} transform={`rotate(${180 + side * 24})`}>
              <LeafImage length={17} variant={side} />
            </g>
          ))}
        </g>
      </svg>
      <div
        ref={bar}
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-16 z-20 h-[3px] xl:hidden"
      >
        <div className="h-full origin-left scale-x-[var(--progress,0)] bg-[#46601f]" />
      </div>
    </>
  );
}
