module.exports = sentence => {
    return sentence
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ')
}
