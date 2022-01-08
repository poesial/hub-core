import path from 'path'


export default function (moduleOptions) {

  const templates = [
    'pages/OtherEdit.vue',
    'store/other.js',
  ];

  templates.forEach((template) => {
    this.addTemplate({
      src: path.resolve(__dirname, template),
      fileName: 'others/' + template
    })
  })

  this.addLayout(path.resolve(__dirname, 'layouts/OtherLayout.vue'), 'other')

  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}

module.exports.meta = require('../package.json')
