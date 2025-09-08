import { clsx } from "clsx";

// cn is a utility function that joins multiple class names safely.
//This means you can pass undefined, false, null, etc., and only valid class strings get joined.

export function cn(...inputs) {
  return clsx(...inputs);
}
