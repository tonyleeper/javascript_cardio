module.exports = (array, ...remove) => {
    return array.filter(value => !remove.includes(value))
}
