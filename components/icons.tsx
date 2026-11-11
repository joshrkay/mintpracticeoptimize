import type { ReactNode } from "react";

const paths = {
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6" />
    </>
  ),
  card: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </>
  ),
  pen: <path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" />,
  heart: <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />,
  flow: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  megaphone: <path d="M4 10v4h3l8 4V6l-8 4H4ZM18 9a4 4 0 0 1 0 6M7 14v5h3v-3.5" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2 20a7 7 0 0 1 14 0M16 5a3.5 3.5 0 0 1 0 7M18 14.5a6 6 0 0 1 4 5.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.200 9.500l6.100-.9L12 3Z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  box: <path d="M3 8l9-5 9 5v8l-9 5-9-5V8ZM3 8l9 5 9-5M12 13v8" />,
  repeat: <path d="M4 12a8 8 0 0 1 14-5l2 2M20 4v5h-5M20 12a8 8 0 0 1-14 5l-2-2M4 20v-5h5" />,
  message: <path d="M4 5h16v11H9l-5 4V5ZM8 9h8M8 12h5" />,
  check: <path d="m5 12 5 5 9-10" />,
  alert: <path d="M12 8v5M12 16.5v.5" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

/** An icon on a soft mint tile. */
export function IconBadge({ name, tone = "soft" }: { name: IconName; tone?: "soft" | "solid" }) {
  return (
    <span
      className={`inline-flex size-12 shrink-0 items-center justify-center rounded-xl ${
        tone === "solid" ? "bg-mint-deep text-white" : "bg-mint-soft text-mint-deep"
      }`}
    >
      <Icon name={name} />
    </span>
  );
}
