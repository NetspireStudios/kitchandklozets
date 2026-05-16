# /assets

Static images served straight from the hosting layer. Every folder is
referenced by an absolute path (`/assets/<folder>/<file>`) — no build
step rewrites these, so the file name on disk is the URL.

## Folder map

| Folder            | Used by                                                | Naming                                                        |
| ----------------- | ------------------------------------------------------ | ------------------------------------------------------------- |
| `accessories/`    | Closet / kitchen accessory rows                        | `<slug>.png` matching the rail item slug                      |
| `cabinets/`       | Cabinet diagram + front images for the RTA browser    | `<subcategory-slug>-diagram.png`, `-front.png`                |
| `closet/`         | Closet Line page hero, about, anatomy, configurations  | `closet-*.jpg`, `pure-white-closet.png`, `anatomy-*.png`      |
| `crafted/`        | Crafted Cabinets page hero, intro, six room categories | `crafted-*.jpeg`, `room-<category>.jpeg`                       |
| `finishes/`       | RTA finish landing pages, card thumbnails, mega menu   | `card-<finish>.jpg`, `<finish>-hero.jpg`, `<code>-feature-N.jpg` |
| `home/`           | Home page hero + dark Why-Choose banner                | `home-hero.jpg`, `why-choose-bg-*.jpg`                        |
| `logo.png`        | Brand mark, favicon, footer logo                       | Single root-level asset                                       |

## Adding a new image

1. Drop the file into the matching folder. If a new category is being
   added, create the folder.
2. Reference it as `/assets/<folder>/<filename>` in the HTML or JSX.
3. If the file would replace an existing asset, **rename it** rather
   than overwriting in place. The CDN caches assets for 24 hours, so
   a fresh URL guarantees the change goes live immediately.

## Cache policy

`firebase.json` sets `/assets/**` to `max-age=86400, must-revalidate`,
so visitors revalidate after a day. JSX/JS/CSS gets a 1-hour cache.
No `immutable` directive anywhere, so renaming is the only required
cache-busting step.
