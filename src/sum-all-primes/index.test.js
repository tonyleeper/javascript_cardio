const sumAllPrimes = require('./')

describe('sumAllPrimes', () => {
    it('should sum all the primes up to and including the number provided if prime', () => {
        expect(sumAllPrimes(10)).toBe(17) // == 2 + 3 + 5 + 7
    })
})
