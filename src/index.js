import marked from 'marked'

const markdown = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  sceneConfig.blocks.forEach(block => {
    if (block.type === 'text' && !block.marked) {
      block.text = marked(block.text)
      block.marked = true
    }
  })
}

export default markdown

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.addModule('markdown', markdown)
}
