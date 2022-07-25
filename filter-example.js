// function filter(array, cb) {
//     // cb contains condition
//     const newArray = [];

//     for (let i = 0; i < array.length; i++) {
//         const conditionResult = cb(array[i], i, array);

//         if (conditionResult === true) {
//             newArray.push(array[i]);
//         }
//     }

//     return newArray;
// }

// const arr = [1, 2, 3, 4, 5];

// const newArr = filter(arr, (val) => {
//     return val < 4;
// });

// console.log(arr);
// console.log(newArr);

const arr = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 4) {
        newArr.push(arr[i]);
    }
}

console.log(arr);
console.log(newArr);

console.log(arr.filter((val) => val < 4));
