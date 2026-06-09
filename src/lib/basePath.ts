/**
 * Prefija una ruta absoluta con el `basePath` del despliegue (necesario en
 * GitHub Pages cuando el sitio se sirve bajo `/<nombre-repo>`).
 *
 * Úsalo SOLO en enlaces normales (<a href>) a archivos de `/public`, como el
 * CV. NO lo uses con `next/image`, que ya aplica el basePath automáticamente.
 * Las URLs externas (http) o `mailto:` se devuelven sin tocar.
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
