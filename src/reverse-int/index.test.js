const reverseInt = require('./')

describe('reverseInt', () => {
    it('should reverse a positive integer', () => {
        expect(reverseInt(123456)).toBe(654321)
    })

    it('should reverse a negative integer', () => {
        expect(reverseInt(-123456)).toBe(-654321)
    })
})
