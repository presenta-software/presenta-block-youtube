# PRESENTA Youtube Block

![](https://img.shields.io/npm/v/@presenta/block-youtube)

This block displays and manages a [Youtube](https://www.youtube.com) video within a [PRESENTA Lib](https://github.com/presenta-software/presenta-lib) document.

## Installation


Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `block-youtube`

## Usage

To configure this block use this setting:

```js
{
    type: 'youtube',
    url: '...'
}
```

The block will show the Youtube thumbnail for the fast preview. 
By using the keyboard `SPACE` key, or clicking on it, you can toggle the playback betweet play/pause.
The first time the player needs to be loaded before the playback begins.

| Option   | Description                                                | Default | Values                      |
| -------- | ---------------------------------------------------------- | ------- | --------------------------- |
| type     | Define this block type **(required)**                      |         | "youtube"                   |
| url      | The full URL or the ID of the Youtube video **(required)** |         | Any valid Youtube URL or ID |
| autoplay | Begin the playback as soon as it's loaded                  | true    | Boolean                     |
| loop     | Loop the playback                                          | false   | Boolean                     |
| start    | Time in seconds to start the video from                    | 0       | Number                      |
| preload  | Preload the player                                         | false   | Boolean                     |
| key      | Set the keeyboard char to trigger the playback             | ' '     | String char                 |
|          |                                                            |         |                             |

The `preload` parameter will load the player behind the scene, this way it will be ready for immediate playback. The downside is some glitch when the block will be shown due the Youtube heavyness during initial loading.

### Volume

Use the `m` key to toggle the mute. Use `+` and `-` to increase/descrease the volume by 10% factor.

## Development

Run the watcher:

    npm start

and the local webserver

    npm run test