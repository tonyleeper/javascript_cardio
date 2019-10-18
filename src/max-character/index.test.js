const maxCharacter = require('./')

describe('maxCharacter', () => {
    it('should return the most frequent character in a string', () => {
        expect(maxCharacter('onefinedayedwardwenttoplay')).toBe('e')
    })
})
