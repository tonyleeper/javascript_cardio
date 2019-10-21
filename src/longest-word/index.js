module.exports = sentence => {
    const words = sentence.match(/[a-zA-Z0-9]+/g)
    const sorted = words.sort((a, b) => b.length - a.length)
    const longestWords = words.filter(word => word.length === sorted[0].length)

    return longestWords.length === 1 ? longestWords[0] : longestWords
}
