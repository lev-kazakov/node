const net = require('net')

const demoPrint = string => {
	const placeholder = new Array(87).fill(' ')
    string && Array.prototype.unshift.apply(placeholder, `Userland: ${string}`.split(''))
    placeholder[86] = '|'
    console.log(placeholder.join(''))
}

demoPrint('performing network I/O')

const socket = new net.Socket()

socket.on('error', function (err) {
    console.error(err);
    socket.destroy();
})

socket.on('data', (data) => {
    demoPrint(`data recieved on socket: "${data}"`)
});

socket.connect(8080, () => {
    demoPrint('socket connected. waiting for some data to arrive.')
    // socket.write('Hello server!\n')
});
