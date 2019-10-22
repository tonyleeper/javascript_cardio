const addAll = require('./')

describe('addAll', () => {
    it('should add all the arguments', () => {
        expect(addAll(1, 2, 3, 4)).toBe(10)
    })
})
