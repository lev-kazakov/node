const net = require('net')
const fs = require('fs')

const demoPrint = string => {
	const placeholder = new Array(87).fill(' ')
    string && Array.prototype.unshift.apply(placeholder, `Userland: ${string}`.split(''))
    placeholder[86] = '|'
    console.log(placeholder.join(''))
}

demoPrint('scheduling nextTick task')
process.nextTick(() => {
	demoPrint('running nextTick callback')
})

demoPrint('scheduling 0-sec timer')
setTimeout(() => {
    demoPrint('running 0-sec timer callback')
}, 0)
