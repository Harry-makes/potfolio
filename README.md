# Thimira Theekshana — Personal Portfolio

A responsive, dark-crimson portfolio built using plain HTML, CSS, and JavaScript. Ready for GitHub Pages.

## Run locally

Double-click `index.html` or run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Publish to username.github.io

1. Create a GitHub account, or sign in to your existing one.
2. Create a **public** repository named exactly `<YOUR-GITHUB-USERNAME>.github.io` (replace the placeholder with your actual username).
3. Upload **the contents of this folder**, not the ZIP file, to the **root** of the repository. You must have `index.html`, `styles.css`, `script.js`, `favicon.svg`, `.nojekyll`, and the `assets` folder at the repository root.
4. On GitHub open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/(root)**, then Save.
5. Visit `https://<YOUR-GITHUB-USERNAME>.github.io/`. Publishing can take up to about 10 minutes.

## Before sharing publicly

- Contact details are set to **theekshanat655@gmail.com**, **WhatsApp +94 75 530 0294**, and **mobile +94 78 694 6774**. Update `index.html` if these change.
- The previous six-tile stills/BTS gallery was removed by request. The Work section now focuses exclusively on published video reels.
- The hero uses a behind-the-scenes image, not video. Add your own showreel URL once ready.
- The site includes **8 selected social reels with on-demand preview** and a toggle for all **23 unique reels** (11 Instagram and 12 Facebook). The duplicated Instagram URL from the original list was intentionally included once.
- **Filming and editing credits** are shown throughout the video section, based on the portfolio owner's attribution.
- **Brand/client names are not yet verified**: replace the generic labels in `index.html` and add approved brand names/logos only after confirming which client appears in each linked reel. Instagram/Facebook may block external embeds, so each reel has a working original-post link.
- A `reel_links.csv` file lists every reel and provides a blank column for verified brand/client names.
- The two remaining photos (on-set hero and personal portrait) each appear once. Only images currently used by the page are included under `assets/`.
- Verify that you have rights to publicly publish the remaining imagery and any identifiable people depicted in it.

## Update content

`index.html`: names, descriptions, project titles and links.

`styles.css`: colors (`--red`, `--bg`, `--fg`), typography and layout.

`assets/`: images. Match the corresponding filenames referenced in `index.html`.

No frameworks or build tools required.

## Upcoming reel thumbnails

Once you provide approved reel thumbnail images, place them in `assets/` and link them to the corresponding featured reel cards in `index.html`.
