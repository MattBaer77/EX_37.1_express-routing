const {mean} = require('./mean')

describe('main cases', function() {

    test('should return mean', function() {

        expect(mean([1,2,3])).toEqual(2)
        expect(mean([1,2,3,4])).toEqual(2.5)

    })

})

describe('edge cases', function() {

    test('should return mean', function() {

        expect(mean([1])).toEqual(1)
        expect(mean([-1])).toEqual(-1)
        expect(mean([])).toEqual(NaN)
        expect(mean(['A'])).toEqual(NaN)

    })

})
