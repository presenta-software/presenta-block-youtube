import css from './style.css'

let apiReady = false
const delayCreatePlayers = []
const loadAPI = () => {
  const api = document.querySelector('#presenta-youtube-iframe-api-script')
  if (!api) {
    var tag = document.createElement('script')
    tag.id = 'presenta-youtube-iframe-api-script'
    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      apiReady = true
      delayCreatePlayers.forEach(f => f())
    }
  }
}

const block = function (el, config) {
  const previewMode = config._mode === 'preview'
  const presentMode = config._mode === 'present'
  const printMode = config._mode === 'print'

  const keyToggle = config.key || ' '

  const child = document.createElement('div')
  child.classList.add(css.youtube)

  var playerID = 'presenta-player-' + Math.random()
  var blocker = !config.controls ? `<div class="${css.blockmouse}"></div>` : ''

  child.innerHTML = `
    <div id="${playerID}"></div>
    <img src="${config.thumb}" />
    ${blocker}`

  el.appendChild(child)

  loadAPI()

  var player
  let isPlaying = false

  const createPlayer = () => {
    setTimeout(() => {
      player = new YT.Player(playerID, {
        height: '100%',
        width: '100%',
        videoId: config.url,
        playerVars: {
          autoplay: config.autoplay ? 1 : 0,
          controls: config.controls ? 1 : 0,
          loop: config.loop ? 1 : 0,
          modestbranding: 1,
          end: config.end || null,
          start: config.start || 0
        },
        events: {
          onReady: e => {
            if (!config.preload) {
              playVideo()
            } else {
              player.playVideo()
              player.pauseVideo()
            }
          },
          onStateChange: e => {
            if (e.data === 0) {
              child.classList.remove(css.playing)
            }
          }
        }
      })
    })
  }

  this.beforeDestroy = () => {
    config._rootElement.removeEventListener('keyup', setKeyListener)
    el.removeEventListener('click', toggleVideo)
  }

  this.stepForward = (step) => {
  }

  const playVideo = () => {
    // if (config.start) {
    //   player.seekTo(config.start)
    // } else {
    player.playVideo()
    // }
    child.classList.add(css.playing)
    isPlaying = true
  }
  const stopVideo = () => {
    player.pauseVideo()
    isPlaying = false
  }

  const toggleVideo = () => {
    if (player) {
      if (isPlaying) {
        stopVideo()
      } else {
        playVideo()
      }
    } else {
      if (!apiReady) {
        delayCreatePlayers.push(createPlayer)
      } else {
        createPlayer()
      }
    }
  }

  const setKeyListener = e => {
    if (e.key === keyToggle) {
      toggleVideo()
      e.stopPropagation()
      e.preventDefault()
    }

    if (player) {
      if (e.key === 'm') {
        if (player.isMuted()) {
          player.unMute()
        } else {
          player.mute()
        }
      }
      if (e.key === '+') {
        let v = player.getVolume()
        v += 10
        player.setVolume(v)
      }
      if (e.key === '-') {
        let v = player.getVolume()
        v -= 10
        player.setVolume(v)
      }
    }
  }
  if (presentMode) {
    config._rootElement.addEventListener('keyup', setKeyListener)
    el.addEventListener('click', toggleVideo)
  }

  if (config.autoplay || config.preload) {
    if (presentMode) toggleVideo()
  }

  if (printMode) toggleVideo()
}

export default block

block.install = Presenta => {
  Presenta.addBlock('youtube', block)
  if (Presenta.io.addPreload) Presenta.io.addPreload({ type: 'youtube', field: 'thumb', as: 'image' })
}

// this is called by PRESENTA instance passing the projectConfig
block.run = config => {
  config.scenes.forEach(s => {
    s.blocks.forEach(b => {
      if (b.type === 'youtube') {
        b.thumb = `https://i.ytimg.com/vi/${b.url}/hqdefault.jpg` // hqdefault or maxresdefault
      }
    })
  })
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
