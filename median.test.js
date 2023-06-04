const {median} = require('./median')

describe('main cases', function() {

    test('should return median', function() {

        expect(median([1,2,3])).toEqual(2)
        expect(median([1,2,3,4])).toEqual(2.5)

    })

})

describe('edge cases', function() {

    test('should return median', function() {

        expect(median([1])).toEqual(1)
        expect(median([-1])).toEqual(-1)
        expect(median([])).toEqual(NaN)
        expect(median(['A'])).toEqual('A')

    })

})
