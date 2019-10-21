module.exports = array => {
    //return array.reduce((prev, curr) => prev.concat(curr), [])
    return [].concat(...array)
}
