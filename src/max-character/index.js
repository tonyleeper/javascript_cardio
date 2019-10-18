module.exports = str => {
    const charMap = {}
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    let candidateChar = str[0]
    let candidateCount = 0
    for (let char in charMap) {
        let count = charMap[char]
        if (count > candidateCount) {
            candidateChar = char
            candidateCount = count
        }
    }

    return candidateChar
}
