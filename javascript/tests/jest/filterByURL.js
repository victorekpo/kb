const filterByURL = (inputArr, searchTerm) => {
    const regex = new RegExp(searchTerm, "i"); //case insensitive flag
    return inputArr.filter((item) => {
        return item.url.match(regex);
    })
}

const input = [
    { id: 1, url: "https://www.google.com" },
    { id: 2, url: "https://www.yahoo.com" },
    { id: 3, url: "https://www.bing.com" },
];
//filterbyURL(input, "google")
//console.log(input[0].url.match("google"));

module.exports = {
    filterByURL,
    input
}
//export default filterByURL;