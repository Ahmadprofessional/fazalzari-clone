export { cn } from "cn";

/**
 * Deterministic number formatting for prices (e.g. 385000 -> "385,000").
 * Avoids Intl.NumberFormat locale inconsistencies between Node SSR and browser hydration.
 */
export function formatPrice(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
