const longestWord = require('./')

describe('longestWord', () => {
    it('should return the longest word in a sentence', () => {
        expect(longestWord('hello there, my name is Rupert')).toBe('Rupert')
    })

    it('should return the longest words in a sentence as an array if more than one', () => {
        expect(longestWord('hello there, my name is Rupert the Second')).toEqual(['Rupert', 'Second'])
    })
})
