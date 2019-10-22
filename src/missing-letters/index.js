module.exports = sequence => {
    for (let i = 1; i < sequence.length; i++) {
        const expectedCharCode = sequence.charCodeAt(i - 1) + 1
        if (sequence.charCodeAt(i) !== expectedCharCode) {
            return String.fromCharCode(expectedCharCode)
        }
    }

    return undefined
}
