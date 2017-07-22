const rl = require('readline').createInterface({ input: process.stdin })

require('net')
	.createServer((s) => { 
		console.log('socket connected ===================\n')
		s.on('error', () => {
			console.log('\n================ socket disconnected\n')
			s.destroy()
		})
		rl.on('line', (input) => {
			!s.destroyed && s.write(input)
		})
	})
	.listen(8080)
