import type { IconKey } from "@/data/portfolio";

type Props = {
  name: IconKey;
  className?: string;
};

/**
 * Iconos SVG inline (sin dependencias externas) para mantener el bundle ligero
 * y el control total del estilo. Trazo limpio estilo "engineer".
 */
const paths: Record<IconKey, React.ReactNode> = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.86c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-.95 1.83-1.95 3.77-1.95C20.6 8.69 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9V9Z" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3 6.5 9 6 9-6" fill="none" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v12" fill="none" />
      <path d="m7 11 5 5 5-5" fill="none" />
      <path d="M4 21h16" fill="none" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" fill="none" />
      <path d="M20 4 10 14" fill="none" />
      <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" fill="none" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4" fill="none" />
      <path d="m16 8 4 4-4 4" fill="none" />
      <path d="m13 6-2 12" fill="none" />
    </>
  ),
  ai: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="3" fill="none" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" fill="none" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  infra: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" fill="none" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" fill="none" />
      <circle cx="7" cy="7" r="0.6" />
      <circle cx="7" cy="17" r="0.6" />
    </>
  ),
  dev: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" fill="none" />
      <path d="M8 21h8M12 17v4" fill="none" />
    </>
  ),
};

export default function Icon({ name, className = "h-5 w-5" }: Props) {
  const isFilled = name === "github" || name === "linkedin";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
