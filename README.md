# Word of Light Publishing — Ellen Lyon

The website for Vermont author Ellen Lyon and Word of Light Publishing, featuring her book *The Stress-less Lamb: Conversations between the Lamb and the Shepherd*.

**Website:** https://wordoflightpublishing.com/ (the custom domain set in `CNAME`). The GitHub Pages address, https://johnlyon-groundfloorindustries.github.io/WOLP/, redirects to it.

## Pages

| Page | Path | What is on it |
| --- | --- | --- |
| Home | `index.html` | The book with Amazon links, and "Kind words": 19 reader reviews and 23 reader photos in carousels, plus a download of the original reviews as a Word document. |
| About & ministry | `about-us/` | Ellen's background and ministry. |
| Contact & connect | `contact-us/` | An email link and social links. |

## Files

| File | Purpose |
| --- | --- |
| `index.html`, `about-us/`, `contact-us/` | The three pages. |
| `style.css`, `script.js` | Shared styling and behavior, including the menu and carousels. |
| `assets/` | Book cover, photos, the Still Waters hero image and `reader-reviews.docx`. |
| `CNAME` | The custom domain GitHub Pages serves the site on. |

## Custom domain

GitHub Pages publishes the root of the `main` branch and serves it on the domain named in `CNAME`. The site loads only while that domain's DNS points to GitHub Pages. If the DNS is missing or the domain lapses, both addresses above stop working, because the GitHub Pages address redirects to the domain.

To serve the site from the GitHub Pages address instead, clear the custom domain under **Settings → Pages** and delete `CNAME` if it is still in the repository.

## Viewing and updating

No installation or build step. A push to `main` updates the site within a minute or two.

To preview locally, run `python -m http.server 8000` from this folder, then open http://localhost:8000 in a browser.

## Notes

- Links are relative, so the site works on a custom domain or in a GitHub Pages project subfolder.
- Fonts load from Google Fonts. Amazon and social links need an internet connection.
- Email buttons open the visitor's email application. There is no contact form and no newsletter signup.
- Left out of this version on purpose: home address, phone numbers, X and LinkedIn links, the ministry program section, reviewer resources and the original ellenlyon.com links.
