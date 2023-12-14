const findTheOldest = function(peopleArray) {
    const currentDay = new Date();
    const currentYear = currentDay.getFullYear();
    let theOldest = {};
    let maxAge = 0;

    peopleArray.forEach(person => {
        let age;

        if (person.yearOfDeath === undefined) {
            age = currentYear - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        if (age > maxAge) {
            maxAge = age;
            theOldest = person;
        }
    });

    return theOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
