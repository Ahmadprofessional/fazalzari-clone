/**
 * Blur placeholder data URLs for Next.js Image components.
 * These are tiny inline SVGs (~120 bytes each) that show instantly
 * while the real image loads — eliminates the "blank white box" flash.
 *
 * Usage:
 *   import { BLUR_CREAM, BLUR_DARK } from "@/lib/blur";
 *   <Image placeholder="blur" blurDataURL={BLUR_CREAM} ... />
 */

/** Warm cream (#f7efe2) — for product cards, category images, light backgrounds */
export const BLUR_CREAM =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iI2Y3ZWZlMiIvPjwvc3ZnPg==";

/** Dark ink (#0a0a0a) — for hero images, dark overlays, lookbook banners */
export const BLUR_DARK =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzBhMGEwYSIvPjwvc3ZnPg==";

/** Muted gold (#b8935a) — for product gallery, atelier contexts */
export const BLUR_GOLD =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0iIzFhMTYxMCIvPjwvc3ZnPg==";
