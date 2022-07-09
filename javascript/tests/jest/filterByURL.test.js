const { filterByURL, input } = require('./filterByURL.js');

describe('Filter Functions', () => {
    it('Should filter the URLs by the search term', () => {
        const result = [{ id: 1, url: "https://www.google.com" }];

        expect(filterByURL(input, "google")).toEqual(result); //toEqual is used for objects/arrays
    })

    it('Should filter the URLs by the search term', () => {
        const result = [{ id: 1, url: "https://www.google.com" }];

        expect(filterByURL(input, "GOOGLE")).toEqual(result); //toEqual is used for objects/arrays
    })

});

