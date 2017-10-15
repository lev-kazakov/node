const net = require('net')

const socket = new net.Socket()

socket.on('error', function (err) {
    console.error(err);
    socket.destroy();
})

socket.on('data', (data) => {
    console.log(`data recieved on socket: "${data}"`)
});

console.log('performing network I/O')
socket.connect(8080, () => {
    console.log('socket connected. waiting for some data to arrive.')
    // socket.write('Hello server!\n')
});
