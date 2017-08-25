const fs = require('fs')
const mustache = require('mustache')

const read = filename => fs.readFileSync(filename, 'utf8')
const render = (view, data) => mustache.render(view, data)

const merge = (filename, data) => render(read(filename), data)

module.exports = merge
