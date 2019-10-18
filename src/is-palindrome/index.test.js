const isPalindrome = require('./')

describe('isPalindrome', () => {
    it('return true for a palindrome string', () => {
        expect(isPalindrome('racecar')).toBe(true)
        expect(isPalindrome('hannah')).toBe(true)
        expect(isPalindrome('12345654321')).toBe(true)
    })

    it('return false for a non-palindrome string', () => {
        expect(isPalindrome('hello')).toBe(false)
        expect(isPalindrome('123456')).toBe(false)
    })
})
