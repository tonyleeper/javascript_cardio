const seekAndDestroy = require('./')

describe('seekAndDestroy', () => {
    it('remove the specified elements from the array returning the leftover elements as an array', () => {
        expect(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)).toEqual([3, 4, 'hello'])
    })
})
