# Your photos and videos

The current files are connected to eight memory categories using their numbered filename prefixes:

- `1`: where it started
- `2`: camp, cricket, and Imagica
- `3`: first birthday together
- `4`: dates and little rituals
- `5`: second birthday
- `6`: the cutie that is you
- `7`: recent favourite moments
- `8` and `9`: building a new life together at USYD and Bondi

Each category has a `media` list near the top of `script.js`. Add more photos or short videos
to a category in the order they should appear:

```js
media: [
  { type: "image", src: "photos/01-the-beginning.jpg", file: "01-the-beginning.jpg" },
  { type: "video", src: "photos/01-the-beginning-clip.mp4", file: "01-the-beginning-clip.mp4" },
  { type: "image", src: "photos/01-another-photo.jpg", file: "01-another-photo.jpg" },
],
```

The left and right buttons inside each frame move through that memory's media. Videos preview
muted inside the scrapbook and open with normal playback controls when tapped.

Use JPG, PNG, or WebP for photos. MP4 (H.264) is the safest video format for mobile browsers;
keep clips short and compressed so the birthday page loads quickly.
