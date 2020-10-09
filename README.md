## PRESENTA Youtube Block

This block displays and manages a [Youtube](https:/www.youtube.com) video within a [PRESENTA Lib](https://lib.presenta.cc) document.

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#installing-a-plugin).

### Usage

To configure this block use this setting:

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

The block will show the Youtube thumbnail for the quick preview. 
By using the keyboard `SPACE` key you can toggle the playback.
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

| Prop name | Description                                                  | Default value | Possible values       |
| --------- | ------------------------------------------------------------ | ------------- | --------------------- |
| url       | Define the ratio between width and height                    |               | youtube               |
| autoplay  | Override `aspect` inferring it from the container size       | true          | true,false            |
| loop      | The color scheme class to apply to the whole presentation, such as `.vibrant` |               | Any valid class value |
| preload   | The fontkit class to apply to the whole presentation, such as `.original` |               | Any valid class value |
|           |                                                              |               |                       |