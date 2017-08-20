const fs = require('fs')

const demoPrint = string => {
	const placeholder = new Array(87).fill(' ')
    string && Array.prototype.unshift.apply(placeholder, `Userland: ${string}`.split(''))
    placeholder[86] = '|'
    console.log(placeholder.join(''))
}

demoPrint('performing file I/O')
fs.readFile('./event_loop_demo/file.txt', (err, data) => {
    demoPrint(`file contents: "${data}"`)
})
