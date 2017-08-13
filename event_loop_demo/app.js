const net = require('net')
const fs = require('fs')

const demoPrint = string => {
	const placeholder = new Array(87).fill(' ')
    string && Array.prototype.unshift.apply(placeholder, `Userland: ${string}`.split(''))
    placeholder[86] = '|'
    console.log(placeholder.join(''))
}

demoPrint('scheduling 1st resolved promise task')
Promise.resolve().then(() => {
    demoPrint('running 1st resolved promise callback')
})

demoPrint('scheduling 1st immediate task')
setImmediate(() => {
	demoPrint('running 1st setImmediate callback')
})

demoPrint('scheduling 1st nextTick task')
process.nextTick(() => {
	demoPrint('running 1st nextTick callback')
})

demoPrint('scheduling 1st 0-sec timer')
setTimeout(() => {
	demoPrint('running 1st 0-sec timer callback')
}, 0)

demoPrint(/*===================================================================*/)
demoPrint('scheduling 2nd resolved promise task')
;(async () => {
    await 'something'
    demoPrint('running 2nd resolved promise callback')
})()


demoPrint('scheduling 2nd immediate task')
setImmediate(() => {
	demoPrint('running 2nd setImmediate callback')
})

demoPrint('scheduling 2nd nextTick task')
process.nextTick(() => {
	demoPrint('running 2nd nextTick callback')
})

demoPrint('scheduling 2nd 0-sec timer')
setTimeout(() => {
	demoPrint('running 2nd 0-sec timer callback')
}, 0)

demoPrint(/*===================================================================*/)
demoPrint('scheduling 3rd resolved promise task')
Promise.resolve().then(() => {
	demoPrint('running 3rd resolved promise callback')
})

demoPrint('scheduling 3rd immediate task')
setImmediate(() => {
	demoPrint('running 3rd setImmediate callback')
})

demoPrint('scheduling 3rd nextTick task')
process.nextTick(() => {
	demoPrint('running 3rd nextTick callback')
})

demoPrint('scheduling 3rd 0-sec timer')
setTimeout(() => {
	demoPrint('running 3rd 0-sec timer callback')
}, 0)

demoPrint('scheduling a 3 sec timer')
setTimeout(() => {
	demoPrint('running 3 sec timer callback')
}, 1000)

demoPrint(/*===================================================================*/)
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

demoPrint(/*===================================================================*/)
demoPrint('performing file I/O')
fs.readFile('./event_loop_demo/file.txt', (err, data) => {
  demoPrint(`file contents: "${data}"`)
})

demoPrint(/*===================================================================*/)
let thingsLeftToDo = true
process.on('beforeExit', () => {
    demoPrint('running "beforeExit" callback')
    thingsLeftToDo && setTimeout(() => {
        demoPrint('i have things left to do')
        thingsLeftToDo = false
    }, 0)
})

process.on('exit', () => {
    demoPrint('running "exit" callback')
    setTimeout(() => {
        demoPrint('will never get here :(')
    }, 0)
})

//process._rawDebug()