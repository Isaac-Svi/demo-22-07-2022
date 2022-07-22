const boxes = document.querySelectorAll('.box');
const smallBoxes = document.querySelectorAll('.small-box');

// 1
let currentlyDraggedBox = null;

// 3
// const DTO = (function () {
//     const data = {};

//     function getData(key) {
//         return data[key];
//     }

//     function setData(key, val) {
//         data[key] = val;
//     }

//     return {
//         getData,
//         setData,
//     };
// })();

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    // 1
    e.target.append(currentlyDraggedBox);

    // 2
    // const id = e.dataTransfer.getData('text/plain');
    // const currentlyDraggedBox = document.getElementById(id);
    // e.target.append(currentlyDraggedBox);

    // 3
    // const id = DTO.getData('draggedId');
    // const currentlyDraggedBox = document.getElementById(id);
    // e.target.append(currentlyDraggedBox);
}

function handleDragStart(e) {
    // 1
    currentlyDraggedBox = e.target;

    // 2
    // e.dataTransfer.setData('text/plain', e.target.id);

    // 3
    // DTO.setData('draggedId', e.target.id);
}

smallBoxes.forEach((smallBox) => {
    smallBox.addEventListener('dragstart', handleDragStart);
});

boxes.forEach((box) => {
    box.addEventListener('dragover', handleDragOver);
    box.addEventListener('drop', handleDrop);
});
