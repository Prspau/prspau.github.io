/**
 * Configuración preparada para despliegue estático en GitHub Pages.
 *
 * - `output: "export"` genera un sitio 100% estático en la carpeta `out/`.
 * - En GitHub Pages, si el repo NO es `usuario.github.io`, el sitio se sirve
 *   bajo `/<nombre-repo>`. Detectamos ese caso automáticamente en CI a partir
 *   de la variable `GITHUB_REPOSITORY` (formato "usuario/repo") y ajustamos
 *   `basePath`. En local, `basePath` queda vacío.
 */
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repo.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS && repo && !isUserSite ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath,
  // GitHub Pages no puede usar el optimizador de imágenes de Next.
  images: { unoptimized: true },
  // Exponemos el basePath al cliente para enlaces a assets estáticos (p. ej. el CV).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
