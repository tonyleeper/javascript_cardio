const chunkArray = require('./')

describe('chunkArray', () => {
    it('should chunk an array', () => {
        expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])
        expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
    })
})
