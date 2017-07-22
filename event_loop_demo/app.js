const net = require('net')
const fs = require('fs')

console.log(/*===================================================================*/)
console.log("scheduling 1st resolved promise task...\n")
Promise.resolve().then(function () {console.log("1st resolved promise task done.\n")})

console.log("scheduling 1st immediate task...\n")
setImmediate(function () {console.log("1st setImmediate task done.\n")})

console.log("scheduling 1st nextTick task...\n")
process.nextTick(function () {console.log("1st nextTick task done.\n")})

console.log("scheduling 1st 0-sec timer...\n")
setTimeout(function () {console.log("1st 0-sec timer is due.\n")}, 0)

console.log(/*===================================================================*/)
console.log("scheduling 2nd resolved promise task...\n")
Promise.resolve().then(function () {console.log("2nd resolved promise task done.\n")})

console.log("scheduling 2nd immediate task...\n")
setImmediate(function () {console.log("2nd setImmediate task done.\n")})

console.log("scheduling 2nd nextTick task...\n")
process.nextTick(function () {console.log("2nd nextTick task done.\n")})

console.log("scheduling 2nd 0-sec timer...\n")
setTimeout(function () {console.log("2nd 0-sec timer is due.\n")}, 0)

console.log(/*===================================================================*/)
console.log("scheduling 3rd resolved promise task...\n")
Promise.resolve().then(function () {console.log("3rd resolved promise task done.\n")})

console.log("scheduling 3rd immediate task...\n")
setImmediate(function () {console.log("3rd setImmediate task done.\n")})

console.log("scheduling 3rd nextTick task...\n")
process.nextTick(function () {console.log("3rd nextTick task done.\n")})

console.log("scheduling 3rd 0-sec timer...\n")
setTimeout(function () {console.log("3rd 0-sec timer is due.\n")}, 0)

console.log(/*===================================================================*/)
console.log("scheduling a 3 sec timer...\n")
setTimeout(function () {console.log("3 sec timer is due.\n")}, 1000)

console.log("performing network I/O...\n\n")
const socket = new net.Socket()
socket.on('error', function (err) {
	console.error(err);
	socket.destroy();
})
socket.on('data', function(data) {
	console.log(`data recieved on socket: "${data}".\n`);
	// socket.destroy();
});
socket.connect(8080, function() {
	console.log('socket connected. waiting for some data to arrive...\n')
	// socket.write('Hello server!\n')
});

console.log("performing file I/O...\n\n")
fs.readFile('./file.txt', function (err, data) {
  console.log(`\nfile contents: "${data}".\n`)
})

console.log(/*===================================================================*/)
//process._rawDebug()