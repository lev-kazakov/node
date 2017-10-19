let doStuffBeforeExit = true
process.on('beforeExit', () => {
    console.log('running "beforeExit" callback')
    if (doStuffBeforeExit) {
        console.log('scheduling 0-sec timer')
        setTimeout(() => {
            console.log('doing some non async stuff')
            doStuffBeforeExit = false
        }, 0)
    }
})

process.on('exit', () => {
    console.log('running "exit" callback')
    setTimeout(() => {
        console.log('will never get here :(')
    }, 0)
})
