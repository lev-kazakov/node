console.log('scheduling nextTick task')
process.nextTick(() => {
	console.log('running nextTick callback')
})

console.log('scheduling 0-sec timer')
setTimeout(() => {
    console.log('running 0-sec timer callback')
}, 0)
