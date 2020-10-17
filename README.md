# PRESENTA Youtube Block

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
By using the keyboard `SPACE` key you can toggle the playback betweet play/pause.
The first time the player needs to be loaded before the playback begins.

| Prop name | Description                                                | Default value | Possible values             |
| --------- | ---------------------------------------------------------- | ------------- | --------------------------- |
| type      | Define this block type **(required)**                      |               | youtube                     |
| url       | The full URL or the ID of the Youtube video **(required)** |               | Any valid Youtube URL or ID |
| autoplay  | Begin the playback as soon as it's loaded                  | true          | true,false                  |
| loop      | Loop the playback                                          | false         | Any valid class value       |
| preload   | Preload the player                                         | false         | Any valid class value       |
|           |                                                            |               |                             |

The `preload` parameter will load the player behind the scene, this way it will be ready for immediate playback. The downside is some glitch when the block will be shown due the Youtube heavyness during initial loading.



## Development

Run the watcher:

    npm start

and the local webserver

    npm run test