const getTheTitles = function(bookArray) {
    if (bookArray.length === 0) return [];

    let titleArray = [];
    bookArray.forEach(book => {
        titleArray.push(book['title']);
    });

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
