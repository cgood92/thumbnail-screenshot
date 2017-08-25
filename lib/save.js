const BINARY = 'binary'

const fs = require('fs')

const write =
  filename =>
    data => new Promise((resolve, reject) => {
      fs.writeFile(filename, data.toString(BINARY), {encoding: BINARY}, err => {
        if (err) {
          return reject(err)
        }
        return resolve()
      })
    })

module.exports = write
