const PresentaMarkdownModule = require('../dist/presenta-markdown-module')

var scene = {
  blocks: [
    {
      type: 'text',
      text: '# Title'
    }
  ]
}

new PresentaMarkdownModule(null, null, scene)

console.log(scene)
