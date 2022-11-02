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
        



        let numOfButton = delLsElement.className.match(/(\d+)/)[0];
        console.log(numOfButton);
        // console.log(i);

        console.log(mainArr[numOfButton])
        delete mainArr[numOfButton];
        console.log(mainArr[numOfButton])
        // console.log(mainArr[numOfButton]);
        // console.log(undefined);

        let mainArrLength = mainArr.length;

        let index = mainArr.indexOf(mainArr[numOfButton]);
        mainArr.splice(index, 1)
        
        if(mainArr[m] == undefined && m < mainArrLength) {
            // console.log(mainArr[m])
            mainArr.splice(m, 1);
            mainArrLength --;
            // console.log(mainArrLength)
        }


        
        
        // i--;

        console.log(mainArr);
    });

    i++;
});

// Delete button in input
delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
});

// Sorting
const sortBtn = document.querySelector('.buttonSort');

// image for reverse
const image = document.querySelector('.image1');





sortBtn.addEventListener('click', () => {
    let arrSorted = [...mainArr];
    
    if(image.getAttribute('src') == '.\\photos\\icon.png'){
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

    image.setAttribute('src', '.\\photos\\iconReverse.png');
    }
    else if(image.getAttribute('src') == '.\\photos\\iconReverse.png'){
        arrSorted.reverse();

        const listElements = document.querySelectorAll('li');
        for(let l = 0; l < arrSorted.length; l++) {
            listElements[l].innerHTML = arrSorted[l];
        }

        image.setAttribute('src', '.\\photos\\icon.png');
    }

});


