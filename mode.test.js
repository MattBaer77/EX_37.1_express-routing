const {mode} = require('./mode')

describe('main cases', function() {

    test('should return mode', function() {

        expect(mode([1,2,3,4])).toEqual([1,2,3,4])
        expect(mode([1,2,3,3,4])).toEqual(3)

    })

})

describe('edge cases', function() {

    test('should return mode', function() {

        expect(mode([1])).toEqual(1)
        expect(mode([-1])).toEqual(-1)
        expect(mode([])).toEqual([])
        expect(mode(['A'])).toEqual(NaN)

    })

})
