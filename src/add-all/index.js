module.exports = (...values) => {
    return values.reduce((sum, value) => sum + value, 0)
}
