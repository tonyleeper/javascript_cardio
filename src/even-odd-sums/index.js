module.exports = values =>
    values.reduce(
        (acc, curr) => {
            if (curr % 2 === 0) {
                acc[0] += curr
            } else {
                acc[1] += curr
            }

            return acc
        },
        [0, 0]
    )
