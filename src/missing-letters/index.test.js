const missingLetters = require('./')

describe('missingLetters', () => {
    it('should find the missing letter in an ascending sequence of letters', () => {
        expect(missingLetters('abcdfgh')).toBe('e')
    })

    it('should return undefined if all letters of the alphabet are present', () => {
        expect(missingLetters('abcdefghijklmnopqrstuvwxyz')).toBeUndefined()
    })
})
