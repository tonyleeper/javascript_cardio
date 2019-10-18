const reverse = require('../reverse-string')

module.exports = str => {
    return str === reverse(str)
}
