console.log('scheduling nextTick task')
process.nextTick(() => {
	console.log('running nextTick callback')
})
