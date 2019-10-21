module.exports = (a, b) => {
    return formatString(a) === formatString(b)
}

const formatString = str =>
    str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
