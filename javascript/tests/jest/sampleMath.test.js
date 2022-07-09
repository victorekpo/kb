const checkTip = require('./sampleMath');

describe('Math tests for functions', () => { //tests grouped together
    //test cases
    it('Should calculate total after tip has been added.', () => {
        //writing the test
        const total = checkTip(10,.5);
        expect(total).toBe(15);

    })

    it('Should calculate total after tip has been added, with default tip value.', () => {
        //writing the test
        const total = checkTip(20);
        expect(total).toBe(24); //toBe is used for primite types, referential values

    })
})