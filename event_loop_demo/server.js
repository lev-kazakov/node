const rl = require('readline').createInterface({ input: process.stdin })

require('net')
	.createServer((s) => { 
		console.info('socket connected ===================\n')
		s.on('error', () => {
			console.info('\n================ socket disconnected\n')
			s.destroy()
		})
		rl.on('line', (input) => {
			!s.destroyed && s.write(input)
		})
	})
	.listen(8080, () => console.info('listening on port 8080\n'))
