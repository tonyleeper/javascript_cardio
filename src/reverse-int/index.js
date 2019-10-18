module.exports = value => {
    return (
        parseInt(
            value
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(value)
    )
}
