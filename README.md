# Karthik Vepuri Photography

Portfolio site for Karthik Vepuri, wedding photographer and filmmaker in Lincoln, Nebraska. Static [Astro](https://astro.build) build, published with GitHub Pages.

Live URL, once Pages is enabled:

https://karthikvepuriphoto-gif.github.io/karthik-vepuri-photography/

The site is built for that project path. Links, images, and the sitemap all use the base `/karthik-vepuri-photography/`.

## Run locally

Node 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321/karthik-vepuri-photography/

`npm run dev` builds the smaller image derivatives first, then starts Astro. The originals in `public/photos/` are what the lightbox and the home hero use.

```bash
npm run build
npm run preview
```

The preview server uses the same base path.

## GitHub Pages

Deploys are defined in `.github/workflows/pages.yml`. A push to `main` installs dependencies, runs `npm run build`, and publishes the `dist/` folder with GitHub Actions.

In the repository settings:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The first successful run of “Deploy GitHub Pages” is what puts the site on the URL above. No `gh-pages` branch is used.

## Photographs

Curated JPEGs live in `public/photos/`, one folder per gallery:

| Gallery | Folder |
| --- | --- |
| Indian Weddings | `public/photos/indian-weddings/` |
| American Weddings | `public/photos/american-weddings/` |
| Maternity | `public/photos/maternity/` |
| Children & Family | `public/photos/children-family/` |
| Couple Photography | `public/photos/couple-photography/` |
| Events | `public/photos/events/` |

`portraits-headshots/` from the source set is not a separate page. The fall portrait is in Children & Family. The graduation candle detail is in Events. A duplicate of the dental-graduation cookies was already in Events and was not added twice.

There is no Silhouettes gallery. The curated archive did not include a silhouette set; couple portraits stay in Couple Photography.

### Add a photograph

1. Export a web-sized JPEG and put it in the matching folder above. Keep the provided originals as they are; the site does not recompress them for the lightbox.
2. Add an entry to that gallery in `src/data/galleries.ts` with `file`, `width`, `height`, and a descriptive `alt`.
3. Run `npm run catalog` (or `npm run dev` / `npm run build`). The script checks that every file on disk is listed, that every listing exists, and that the pixel size matches. It also writes `public/photos/w800/` and `public/photos/w1400/` for the gallery grids. Those derivatives are gitignored.

To feature a frame on the home page, add its path to `featuredIds` in the same file. The home hero is `heroFile`.

## Films

`src/data/films.ts` lists the highlight films and teasers. Each entry has a `title`, a YouTube `url`, and a `kind` of `highlight` or `teaser`. Set `portrait: true` for a vertical Short. The channel link is `youtube` in `src/data/site.ts`:

https://www.youtube.com/@karthikmahendravepur

## Contact details

Email, the YouTube channel, and the Facebook page are in `src/data/site.ts`.

```ts
email: "hello@karthikvepuri.com"
```

Change that string to replace the address everywhere: the mailto links, the contact form, and the footer. The form opens the visitor’s email app. It does not store messages.

## Stack

- Astro, multi-page, no client framework
- Original JPEGs plus generated srcset widths
- Accessible gallery lightbox (keyboard arrows, Escape, focus return)
- GitHub Actions → GitHub Pages
