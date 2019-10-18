module.exports = () => {
    const fizzbuzz = []
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzbuzz.push('FizzBuzz')
            continue
        }

        if (i % 3 === 0) {
            fizzbuzz.push('Fizz')
            continue
        }

        if (i % 5 === 0) {
            fizzbuzz.push('Buzz')
            continue
        }

        fizzbuzz.push(i)
    }

    return fizzbuzz
}
