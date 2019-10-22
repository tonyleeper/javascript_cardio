const evenOddSums = require('./')

describe('evenOddSums', () => {
    it('should take an array and return an array containing the sums of even and odd numbers', () => {
        expect(evenOddSums([50, 60, 60, 45, 71])).toEqual([170, 116])
    })
})
