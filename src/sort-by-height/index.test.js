const sortByHeight = require('./')

describe('sortByHeight', () => {
    it('should sort an array of numbers in ascending order but leave any values of -1 in their original positions', () => {
        expect(sortByHeight([-1, 1500, 190, 170, -1, -1, 160, 180])).toEqual([-1, 160, 170, 180, -1, -1, 190, 1500])
    })
})
