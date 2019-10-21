module.exports = str => {
    return str
        .toLowerCase()
        .replace(/[a-z]/g, char => (char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)))
        .replace(/[aeiou]+/g, vowel => vowel.toUpperCase())
}
