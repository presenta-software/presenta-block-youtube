import css from './style.css'
import getYTId from 'get-youtube-id'

var apiReady = false
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
    }
  }
}

const block = function (el, config, rootElement, projectConfig) {
  const previewMode = projectConfig.mode === 'preview'
  const presentMode = projectConfig.mode === 'present'

  const child = document.createElement('div')
  child.classList.add(css.youtube)

  var playerID = 'presenta-player-' + Math.random()
  const id = config.url.length === 11 ? config.url : getYTId(config.url)
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg` // hqdefault or maxresdefault

  child.innerHTML = `
    <div id="${playerID}"></div>
    <img src="${thumb}" />
    <div class="${css.blockmouse}"></div>
  `

  el.appendChild(child)

  loadAPI()

  var player
  let isPlaying = false

  const createPlayer = () => {
    setTimeout(() => {
      player = new YT.Player(playerID, {
        height: '100%',
        width: '100%',
        videoId: id,
        autoplay: config.autoplay ? 1 : 0,
        loop: config.loop,
        controls: config.controls ? 1 : 0,
        modestbranding: 1,
        events: {
          onReady: e => {
            if (!config.preload) {
              playVideo()
            } else {
              player.playVideo()
              player.pauseVideo()
            }
          },
          onStateChange: e => console.log('change', e)
        }
      })
    })
  }

  this.beforeDestroy = () => {
    rootElement.removeEventListener('keyup', setKeyListener)
  }

  this.stepForward = (step) => {
  }

  const playVideo = () => {
    player.playVideo()
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
      createPlayer()
    }
  }

  const setKeyListener = e => {
    if (e.key === ' ') {
      toggleVideo()
      e.stopPropagation()
      e.preventDefault()
    }
  }
  if (presentMode) rootElement.addEventListener('keyup', setKeyListener)

  if (config.autoplay || config.preload) {
    if (presentMode) toggleVideo()
  }
}

export default block

block.install = Presenta => {
  Presenta.addBlock('youtube', block)
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
