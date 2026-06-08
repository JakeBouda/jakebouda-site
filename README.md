# jakebouda.com

Personal website built with [Astro](https://astro.build), deployed via Cloudflare Pages.

## Local development

```bash
# 1. Install dependencies (only needed once)
npm install

# 2. Start the dev server — opens at http://localhost:4321
npm run dev
```

Any file you save will instantly reload in the browser. No manual refresh needed.

## Project structure

```
src/
  layouts/
    BaseLayout.astro   ← Nav, footer, <head> — shared by every page
  pages/
    index.astro        ← About / Home  →  /
    cv.astro           ← CV            →  /cv
    research.astro     ← Research      →  /research
    blog/
      index.astro      ← Blog index    →  /blog
  styles/
    global.css         ← All CSS lives here
public/
  favicon.svg          ← Browser tab icon
  cv.pdf               ← (add your PDF here for the download link)
```

## How to add a blog post

1. Create `src/pages/blog/my-post-title.astro`
2. Copy the structure from another page and fill in your content
3. Add an entry to the `posts` array in `src/pages/blog/index.astro` so it shows up in the index

## How to deploy (Cloudflare Pages)

1. Push this folder to a GitHub repository (public or private)
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → Pages → Create a project
3. Connect your GitHub repo
4. Set the build command to: `npm run build`
5. Set the output directory to: `dist`
6. Click Deploy — Cloudflare builds and deploys automatically

**Custom domain:** In Cloudflare Pages → your project → Custom domains, add your domain.
Since your domain is already on Cloudflare, it will set up DNS for you automatically.

## Customizing

- **Colors & fonts:** Edit the CSS variables at the top of `src/styles/global.css`
- **Nav links / footer:** Edit `src/layouts/BaseLayout.astro`
- **Content:** Edit the `.astro` files in `src/pages/`
- **Add your CV PDF:** Drop `cv.pdf` into the `public/` folder — the download button on the CV page will work automatically
