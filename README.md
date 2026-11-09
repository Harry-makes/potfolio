# Thimira Theekshana — GitHub Pages layout fix

This version fixes the unstyled **Selected Film Work** grid on the live GitHub Pages website. The complete styling and functionality are included in `index.html` so it no longer depends on GitHub serving a matching `styles.css` or `script.js`.

## Update your existing site (harry-makes.github.io/potfolio/)

1. Open https://github.com/harry-makes/potfolio
2. Open `index.html`, click the pencil icon **Edit this file**, and replace its contents with those from this package's `index.html`. Alternatively use **Add file → Upload files** to replace the existing file and commit.
3. If the `assets` directory is missing `filmmaking.webp` or `portrait.webp`, upload the two `assets` files into your existing repository's `assets/` folder. Do not upload the parent folder containing the files.
4. Click **Commit changes**.
5. When GitHub Pages finishes deploying, open https://harry-makes.github.io/potfolio/?v=2 or hard-refresh with Cmd+Shift+R (Mac) / Ctrl+Shift+R (Windows).

You do **not** need to replace `styles.css` or `script.js`. They are no longer referenced by this version of the website. If they remain in GitHub, they won't interfere.

## Contents
- `index.html`: complete website including all layout CSS and JavaScript
- `assets/filmmaking.webp`: hero image
- `assets/portrait.webp`: About image
- `favicon.svg`: website favicon
- `.nojekyll`: standard static-site configuration file (may be hidden in Finder)
- `reel_links.csv`: video/project links and spaces for confirmed client names

## Notes
- The Work section contains 8 featured reels plus an archive of 23 unique provided links.
- The six-photo gallery has been removed, as requested.
- The brand/project thumbnail images are not included yet; add those once you provide reel covers.
- Your contact info: theekshanat655@gmail.com | WhatsApp +94 75 530 0294 | Call +94 78 694 6774.
- The reel preview uses Instagram/Facebook embeds that may be blocked by the platforms. Each reel still has a link to its original post.
- To change colors, edit the `:root` CSS variables inside the `<style>` section of `index.html`.

