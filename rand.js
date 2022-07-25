const nums = [1, 2, 3, 4, 5];

const generateRandomNumberWithinRange = (min, max) => {
    return Math.floor(Math.random() * max + min);
};

const getUniqueIndexFromArray = (arr, previousIndex) => {
    let newIndex;

    do {
        newIndex = generateRandomNumberWithinRange(0, arr.length);
    } while (newIndex === previousIndex);

    return newIndex;
};

let currentIndex = 0;
setInterval(() => {
    currentIndex = getUniqueIndexFromArray(nums, currentIndex);
    console.log(currentIndex);
}, 500);
