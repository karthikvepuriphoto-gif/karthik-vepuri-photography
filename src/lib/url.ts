/** Site path with the GitHub Pages base prefix. */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL;
  if (!path) return base;
  return `${base}${path.replace(/^\//, "")}`;
}

export function photoUrl(file: string, size?: "w800" | "w1400"): string {
  if (!size) return url(`photos/${file}`);
  return url(`photos/${size}/${file}`);
}

export function normalizePath(path: string): string {
  const stripped = path.replace(/\/$/, "");
  return stripped === "" ? "/" : stripped;
}
