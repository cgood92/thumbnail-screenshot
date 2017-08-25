const readHTML = require('./lib/readHTML')
const capture = require('./lib/capture')
const save = require('./lib/save')
const done = require('./lib/done')

// Config
const distDirectory = './images/'
const layoutDirectory = './layouts/'
const layoutExtension = '.html'

// Inputs
const targetLayout = 'layout-1'
const filename = 'test.png'
const mustache = {
  color1: 'yellow',
  color2: 'red',
  color3: 'blue',
}

// Combining config + inputs
const distImageFile = distDirectory + filename
const targetLayoutFile = layoutDirectory + targetLayout + layoutExtension

// Execute
capture(readHTML(targetLayoutFile, mustache))
  .then(save(distImageFile))
  .then(done)
