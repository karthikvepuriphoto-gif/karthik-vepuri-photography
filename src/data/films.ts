/** Wedding highlights are from @karthikmahendravepur. Short films are from @karthikvepurishortfilms. */
export type Film = {
  title: string;
  url: string;
  kind: "highlight" | "teaser" | "short-film";
  /** Vertical Shorts use a portrait frame. Widescreen films stay 16:9. */
  portrait?: boolean;
  paragraphs?: string[];
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
    paragraphs: [
      "The inspiration for this film began with a simple, unsettling question: What happened to John? He was a delivery driver who never missed a shift, yet one day during the pandemic, someone else showed up in his place. That small disruption lingered with me. We cross paths with strangers every day—on our commute, at the store, in the neighborhood—and without realizing it, they become part of the rhythm of our lives. When one of them suddenly disappears, even briefly, a quiet worry rises. We wonder where they are, whether they're safe, and what their absence means.",
      "From that feeling, this story emerged.",
      "I wanted to explore how easily a life can slip into danger unnoticed, and how a moment of awareness from another person can change everything. In the film, a young girl sees an elderly man in distress and chooses to act. Her decision is small, instinctive, and profoundly human. Yet it becomes the difference between life and loss.",
      "Compassion is not grand or dramatic. It is often a single call, a single gesture, made at the right time. We may never know the private battles of the people we pass each day, but we can notice, care, and respond.",
      "A call made in time can save a life. That truth is the heartbeat of this film.",
    ],
  },
  {
    kind: "short-film",
    title: "GD || Short Film",
    url: "https://www.youtube.com/watch?v=phALNyRhqt8",
    paragraphs: [
      "In 2017, when my wife was pregnant with our first baby, she was diagnosed with Gestational Diabetes (GD). It was scary at the beginning—we never thought that this can be managed with the diet. When we successfully managed GD with diet, we decided to share our story with everyone. We want to give hope to people who are in a similar situation.",
      "Special thanks to Vahini & Prithvi for volunteering to make this film happen.",
    ],
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
