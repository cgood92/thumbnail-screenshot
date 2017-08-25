const webshot = require('webshot')

const config = {
  siteType: 'html',
  // renderDelay: 5000,
  phantomConfig: {
    'ignore-ssl-errors': 'true',
    'ssl-protocol':'any',
  },
  settings: {
    resourceTimeout: 5000,
  },
  screenSize: {
    width: 400,
    height: 400,
  },
  shotSize: {
    width: 400,
    height: 400,
  },
}

const promise = stream => new Promise(resolve => stream.on('data', resolve))

const capture = content => promise(webshot(content, null, config))

module.exports = capture
