const flattenArray = require('./')

describe('flattenArray', () => {
    it('should flatten an array', () => {
        expect(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(flattenArray([[1, 2], [3, 4], [5, 6], [7]])).toEqual([1, 2, 3, 4, 5, 6, 7])
    })
})
