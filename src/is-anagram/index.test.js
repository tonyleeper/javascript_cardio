const isAnagram = require('./')

describe('isAnagram', () => {
    it('should return true for an anagram match', () => {
        expect(isAnagram('elbow', 'below')).toBe(true)
    })

    it('should return false for a non anagram match', () => {
        expect(isAnagram('hello', 'world')).toBe(false)
    })

    it('should ignore non word characters and be case insensitive', () => {
        expect(isAnagram('Dormitory', 'dirty room##')).toBe(true)
    })
})
