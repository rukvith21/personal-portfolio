/** Public asset base for static CDN/Pages deploys (no trailing slash). */
export const assetBase = (process.env.NEXT_PUBLIC_ASSET_PREFIX ?? "").replace(
  /\/$/,
  "",
);

export function publicAsset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${assetBase}${normalized}`;
}
