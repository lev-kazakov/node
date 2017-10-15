const fs = require('fs')

console.log('performing file I/O')
fs.readFile('./event_loop_demo/file.txt', (err, data) => {
    console.log(`file contents: "${data}"`)
})
