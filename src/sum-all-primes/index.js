module.exports = value => {
    let sum = 0
    for (let i = 2; i <= value; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }

    return sum
}

const isPrime = value => {
    if (value < 2) return false
    if (value === 2) return true
    if (value === 3) return true

    const root = Math.sqrt(value)
    for (let i = 2; i <= root; i++) {
        if (value % i === 0) {
            return false
        }
    }

    return true
}
