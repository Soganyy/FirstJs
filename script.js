// array
let mainArr = [];

// Input
const inputText = document.querySelector('#taskEnter')

// Main button
const mainButton = document.querySelector('.mainButtonSt')

// Delete button
const delBtnFirst = document.querySelector('.cancelButton')

// List
const list = document.querySelector('.listOutput')

// List elements 
let listElements = document.createElement('div')
listElements.style = "width: 80%;" + 
    "display: flex;" +
    "flex-direction: column;";
list.append(listElements);

let i = 0;

mainButton.addEventListener('click', () => {
    mainArr[mainArr.length] = inputText.value;

    let sec = document.createElement('div')
    sec.className = `delLsDivBtn${i}`;
    sec.style = "style = 100%;" +
        "display: flex;" + 
        "flex-direction: row;" + 
        "margin-top: 20px";

    let listText = document.createElement('li');
    // listText.style = "display: flex;" + "text-align: left;";
    listText.innerHTML = mainArr[mainArr.length - 1];
    listText.style.textAlign = "left";
    sec.append(listText);
    listElements.append(sec);
    
    let deleteButton = document.createElement('button');
    deleteButton.className = `deleteListElement${i}`;
    deleteButton.innerHTML = 'x';
    deleteButton.style = "border-radius: 50%;" +
        "height: 25px;" +
        "width: 25px" +
        "font-size: 15px;" +
        "text-decoration-color: gray;" +
        "background-color: white;" +
        "border: 2px gray solid;" +
        "position: absolute;" +
        "left: 54%";
    sec.append(deleteButton);

    // Deleting List element
    const delLsElement = document.querySelector(`.deleteListElement${i}`);
    const divDelete = document.querySelector(`.delLsDivBtn${i}`);

    delLsElement.addEventListener('click', () => {
        divDelete.remove();
        
        let numOfButton = delLsElement.className.match(/(\d+)/);
        delete mainArr[numOfButton[0]];

        // for(let m = 0; m < mainArr.length; m++) {
        //     const index = array.indexOf(undefined);
        //     mainArr.splice(index, 1);
        // }
        // i--;

        // console.log(mainArr);
    })

    i++;
});

// Delete button in input
delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
});

// Sorting
const sortBtn = document.querySelector('.buttonSort');

sortBtn.addEventListener('click', () => {
    let arrSorted = [...mainArr];
    
    for(let m = 0; m < arrSorted.length; m++) {
        index = arrSorted.indexOf(undefined);
        if(index > 0){
        arrSorted.splice(index, 1);
        }
    }

    arrSorted.sort();
    
    const listElements = document.querySelectorAll('li');
    for(let l = 0; l < arrSorted.length; l++) {
        listElements[l].innerHTML = arrSorted[l];
    }
});