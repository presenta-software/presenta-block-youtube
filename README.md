## Presenta Youtube Block

This block displays and manages a [Youtube](https:/www.youtube.com) video within a [Presenta](https://lib.presenta.cc) project.

## Installation

#### From `unpkg`:

```html
<script src="https://unpkg.com/@presenta/block-youtube"></script>
```

#### From `npm`:

```shell
npm install @presenta/block-youtube
```

then include in the browser with:

```html
<script src="/node_modules/@presenta/lib/dist/presenta-block-youtube.min.js"></script>
```

or using a bundler:

```js
import BlockYoutube from '@presenta/block-youtube'
```

### Usage

Here the required setting:

```js
{
    type: 'youtube',
    url: 'http://youtube.com/watch?v=<YOUTUBE-ID>'
}
```

You can also specify only the Youtube ID:

```js
{
    type: 'youtube',
    url: '<YOUTUBE-ID>'
}
```

The block will show the Youtube thumbnail for the preview. 
By using the keyboard SPACE you can toggle the playback.
The first time the player will be also loaded before the playback.

Additional settings alongside their defaults:

```js
{
    type: 'youtube',
    url: '<YOUTUBE-ID>'
    autoplay: false,
    loop: false,
    preload: false
}
```

The `preload` parameter will load the player behind the scene, this way it will be ready for immediate playback. The downside is some glitch when the block will be shown due the Youtube heavyness during initial loading.

