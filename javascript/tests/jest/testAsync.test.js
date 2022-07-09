const add = require('./testAsync');

describe('Async tests', () => {

    //OLD METHOD DON'T USE
    it('Should run test after 2 seconds', (done) => {
        setTimeout(() => {
            expect(1).toBe(1);
            done();
        }, 2000);
    })

    //BETTER METHOD
    it('Should not accept negative numbers, but add positive values', async () => {
        await add(3,4).then((sum) => {
            expect(sum).toBe(7);
        })
    })

    it('Should not accept negative numbers, but add positive values', async () => {
        await expect(add(3,4)).resolves.toBe(7);
    })

    it('Should not accept negative numbers, but add positive values', async () => {
        await expect(add(-3,4)).rejects.toThrowError('Number must be greater than zero');
    })
})

