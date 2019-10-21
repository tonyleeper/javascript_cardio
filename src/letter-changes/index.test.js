const letterChanges = require('./')

describe('letterChanges', () => {
    it('should change every letter of a string to the one that follows it, and then capitilize the vowels. z should change to A', () => {
        expect(letterChanges('Hello There')).toBe('Ifmmp UIfsf')
    })
})
