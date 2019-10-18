// const str = 'hello world'

//////////////////////////////////////////////////////////////////

// const reversed = str.split('').reverse().join('')
// console.log(reversed)

//////////////////////////////////////////////////////////////////

// let reversed = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]
// }
// console.log(reversed)

//////////////////////////////////////////////////////////////////

// let reversed = ''
// for (let char of str) {
//     reversed = char + reversed
// }
// console.log(reversed)

//////////////////////////////////////////////////////////////////

// let reversed = ''
// str.split('').forEach(char => reversed = char + reversed)
// console.log(reversed)

//////////////////////////////////////////////////////////////////

// let reversed = str.split('').reduce((prev, char) => char + prev)
// console.log(reversed)

module.exports = str => {
    return str.split('').reduce((prev, char) => char + prev)
}
