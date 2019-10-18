const reverseString = require('./')

describe('reverseString', () => {
    it('should reverse a string', () => {
        const result = reverseString('hello world')
        expect(result).toBe('dlrow olleh')
    })
})
