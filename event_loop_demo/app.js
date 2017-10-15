const net = require('net')
const fs = require('fs')

console.log('scheduling 1st immediate task')
setImmediate(() => {
	console.log('running 1st setImmediate callback')
})

console.log('scheduling 1st nextTick task')
process.nextTick(() => {
	console.log('running 1st nextTick callback')
})

console.log('scheduling 1st 0-sec timer')
setTimeout(() => {
	console.log('running 1st 0-sec timer callback')
}, 0)

console.log('scheduling 1st resolved promise task')
Promise.resolve().then(() => {
    console.log('running 1st resolved promise callback')
})

console.log(/*===================================================================*/)

console.log('scheduling 2nd immediate task')
setImmediate(() => {
	console.log('running 2nd setImmediate callback')
})

console.log('scheduling 2nd nextTick task')
process.nextTick(() => {
	console.log('running 2nd nextTick callback')
})

console.log('scheduling 2nd 0-sec timer')
setTimeout(() => {
	console.log('running 2nd 0-sec timer callback')
}, 0)

console.log('scheduling 2nd resolved promise task')
;(async () => {
    await 'something'
    console.log('running 2nd resolved promise callback')
})()

console.log(/*===================================================================*/)

console.log('scheduling 3rd immediate task')
setImmediate(() => {
	console.log('running 3rd setImmediate callback')
})

console.log('scheduling 3rd nextTick task')
process.nextTick(() => {
	console.log('running 3rd nextTick callback')
})

console.log('scheduling 3rd 0-sec timer')
setTimeout(() => {
	console.log('running 3rd 0-sec timer callback')
}, 0)

console.log('scheduling 3rd resolved promise task')
Promise.resolve().then(() => {
    console.log('running 3rd resolved promise callback')
})

console.log(/*===================================================================*/)

console.log('scheduling a 3 sec timer')
setTimeout(() => {
	console.log('running 3 sec timer callback')
}, 1000)

console.log(/*===================================================================*/)

console.log('performing file I/O')
fs.readFile('./event_loop_demo/file.txt', (err, data) => {
    console.log(`file contents: "${data}"`)
})

console.log(/*===================================================================*/)

console.log('performing network I/O')
const socket = new net.Socket()
socket.on('error', function (err) {
	console.error(err);
	socket.destroy();
})
socket.on('data', (data) => {
	console.log(`data recieved on socket: "${data}"`)
	// socket.destroy();
});
socket.connect(8080, () => {
	console.log('socket connected. waiting for some data to arrive.')
	// socket.write('Hello server!\n')
});

console.log(/*===================================================================*/)

let thingsLeftToDo = true
process.on('beforeExit', () => {
    console.log('running "beforeExit" callback')
    thingsLeftToDo && setTimeout(() => {
        console.log('i have things left to do')
        thingsLeftToDo = false
    }, 0)
})

process.on('exit', () => {
    console.log('running "exit" callback')
    setTimeout(() => {
        console.log('will never get here :(')
    }, 0)
})

//process._rawDebug()