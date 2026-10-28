/** Highlight films. Paste a YouTube watch, youtu.be, shorts, or embed URL into `url`.
 *  Leave `url` empty and the slot is not shown. */
export type FilmSlot = {
  title: string;
  url: string;
};

export const films: FilmSlot[] = [
  { title: "Highlight 1", url: "" },
  { title: "Highlight 2", url: "" },
  { title: "Highlight 3", url: "" },
];

/** Returns a nocookie embed URL, or null when the slot is empty or not a YouTube link. */
export function youtubeEmbed(url: string): string | null {
  const trimmed = url.trim();
  if (!trimmed) return null;
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^www\./, "");
  if (host === "youtu.be") {
    const id = parsed.pathname.split("/").filter(Boolean)[0];
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  if (host !== "youtube.com" && host !== "youtube-nocookie.com") return null;
  if (parsed.pathname === "/watch") {
    const id = parsed.searchParams.get("v");
    return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
  }
  const parts = parsed.pathname.split("/").filter(Boolean);
  if ((parts[0] === "embed" || parts[0] === "shorts") && parts[1]) {
    return `https://www.youtube-nocookie.com/embed/${parts[1]}`;
  }
  return null;
}
