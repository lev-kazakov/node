const demoPrint = string => {
	const placeholder = new Array(87).fill(' ')
    string && Array.prototype.unshift.apply(placeholder, `Userland: ${string}`.split(''))
    placeholder[86] = '|'
    console.log(placeholder.join(''))
}

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