/** Wedding highlights are from @karthikmahendravepur. Short films are from @karthikvepurishortfilms. */
export type Film = {
  title: string;
  url: string;
  kind: "highlight" | "teaser" | "short-film";
  /** Vertical Shorts use a portrait frame. Widescreen films stay 16:9. */
  portrait?: boolean;
};

export const films: Film[] = [
  {
    kind: "highlight",
    title: "Manasa Weds Rohan || Full Highlights",
    url: "https://www.youtube.com/watch?v=q_KBPYGIR_g",
  },
  {
    kind: "highlight",
    title: "Vikram Weds Haripriya Full Highlights",
    url: "https://www.youtube.com/watch?v=uOxMDUbimGk",
  },
  {
    kind: "highlight",
    title: "Shruti Weds Reginald || Full Highlights",
    url: "https://www.youtube.com/watch?v=3c2vJWnvS-I",
  },
  {
    kind: "highlight",
    title: "Alaina + Brandon || Wedding Highlights",
    url: "https://www.youtube.com/watch?v=P_tXz3C5PD0",
  },
  {
    kind: "short-film",
    title: "Friday - A Short Film by Karthik Vepuri",
    url: "https://www.youtube.com/watch?v=QwtNG1CtqTw",
  },
  {
    kind: "short-film",
    title: "GD || Short Film",
    url: "https://www.youtube.com/watch?v=phALNyRhqt8",
  },
  {
    kind: "teaser",
    title: "Manasa+Rohan Wedding Teaser",
    url: "https://www.youtube.com/watch?v=c7m9BcObJZ8",
  },
  {
    kind: "teaser",
    title: "Manasa ❤️ Rohan|| Save the Date (Short)",
    url: "https://www.youtube.com/watch?v=JYD6Qz-XW8k",
    portrait: true,
  },
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
