type Point = [number, number];

/** Position and heading (degrees) at `t` along a cubic curve. */
export function alongCurve([p0, p1, p2, p3]: [Point, Point, Point, Point], t: number) {
  const u = 1 - t;
  const at = (i: 0 | 1) =>
    u ** 3 * p0[i] + 3 * u * u * t * p1[i] + 3 * u * t * t * p2[i] + t ** 3 * p3[i];
  const slope = (i: 0 | 1) =>
    3 * u * u * (p1[i] - p0[i]) + 6 * u * t * (p2[i] - p1[i]) + 3 * t * t * (p3[i] - p2[i]);
  return { x: at(0), y: at(1), heading: (Math.atan2(slope(1), slope(0)) * 180) / Math.PI };
}
