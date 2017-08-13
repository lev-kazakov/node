const net = require('net')
const fs = require('fs')

const demoPrint = string => {
	const placeholer = new Array(57).fill(' ')
    Array.prototype.unshift.apply(placeholer, `Userland: ${string}`.split(''))
    placeholer[56] = '|'
    console.log(placeholer.join(''))
}

demoPrint('scheduling 1st resolved promise task')
Promise.resolve().then(() => {
	demoPrint('1st resolved promise task done')
})

demoPrint('scheduling 1st immediate task')
setImmediate(() => {
	demoPrint('1st setImmediate task done')
})

demoPrint('scheduling 1st nextTick task')
process.nextTick(() => {
	demoPrint('1st nextTick task done')
})

demoPrint('scheduling 1st 0-sec timer')
setTimeout(() => {
	demoPrint('1st 0-sec timer is due')
}, 0)

demoPrint(/*===================================================================*/)
demoPrint('scheduling 2nd resolved promise task')
Promise.resolve().then(() => {
	demoPrint('2nd resolved promise task done')
})

demoPrint('scheduling 2nd immediate task')
setImmediate(() => {
	demoPrint('2nd setImmediate task done')
})

demoPrint('scheduling 2nd nextTick task')
process.nextTick(() => {
	demoPrint('2nd nextTick task done')
})

demoPrint('scheduling 2nd 0-sec timer')
setTimeout(() => {
	demoPrint('2nd 0-sec timer is due')
}, 0)

demoPrint(/*===================================================================*/)
demoPrint('scheduling 3rd resolved promise task')
Promise.resolve().then(() => {
	demoPrint('3rd resolved promise task done')
})

demoPrint('scheduling 3rd immediate task')
setImmediate(() => {
	demoPrint('3rd setImmediate task done')
})

demoPrint('scheduling 3rd nextTick task')
process.nextTick(() => {
	demoPrint('3rd nextTick task done')
})

demoPrint('scheduling 3rd 0-sec timer')
setTimeout(() => {
	demoPrint('3rd 0-sec timer is due')
}, 0)

demoPrint('scheduling a 3 sec timer')
setTimeout(() => {
	demoPrint('3 sec timer is due')
}, 1000)

demoPrint('performing network I/O')
const socket = new net.Socket()
socket.on('error', function (err) {
	console.error(err);
	socket.destroy();
})
socket.on('data', (data) => {
	demoPrint(`data recieved on socket: "${data}"`)
	// socket.destroy();
});
socket.connect(8080, () => {
	demoPrint('socket connected. waiting for some data to arrive.')
	// socket.write('Hello server!\n')
});

demoPrint('performing file I/O')
fs.readFile('./event_loop_demo/file.txt', (err, data) => {
  demoPrint(`file contents: "${data}"`)
})

//process._rawDebug()