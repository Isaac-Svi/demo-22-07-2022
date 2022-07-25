const myArray = [
    { id: 1, name: 'bob' },
    { id: 2, name: 'joe' },
];

const forEach = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
};

forEach(myArray, (element) => console.log(element));

const map = (arr, cb) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i], i, arr));
    }

    return newArr;
};

const justIds = map(myArray, (element) => element.id);
console.log(justIds);
