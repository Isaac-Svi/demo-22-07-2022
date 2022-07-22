const obj = {
    boolean: false,
    number: 4,
    object: {
        boolean: true,
    },
    array: ['asd', 'sdf', 'dfg'],
};

// obj.boolean = true;

// x = obj

// const x = {};
// for (const key in obj) {
//     x[key] = obj[key]; // key = object
// }
// const x = Object.assign({}, obj);

// const x = { ...obj };
const x = JSON.parse(JSON.stringify(obj));
x.boolean = true;
x.object.boolean = false;
x.array[1] = 'hello JSON';

console.log('x', JSON.stringify(x, null, 4));
console.log('obj', JSON.stringify(obj, null, 4));
