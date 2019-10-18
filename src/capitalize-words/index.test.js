const capitalizeWords = require('./')

describe('capitalizeWords', () => {
    it('should capitalize each word in a sentence', () => {
        const result = capitalizeWords('lucy in the sky with diamonds')
        expect(result).toBe('Lucy In The Sky With Diamonds')
    })
})
