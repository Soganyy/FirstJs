let mainArr = [];

const inputText = document.querySelector('#taskEnter')
const mainButton = document.querySelector('.mainButtonSt')
const delBtnFirst = document.querySelector('.cancelButton')
const list = document.querySelector('.listOutput')

let listElements = document.createElement('div')
listElements.style = "width: 80%;" + 
    "display: flex;" +
    "flex-direction: column;";
list.append(listElements);

let i = 0;
mainButton.addEventListener('click', () => {
    mainArr[mainArr.length] = inputText.value;

    let sec = document.createElement('div')
    sec.className = `delLsDivBtn${inputText.value}`;
    sec.setAttribute('id', 'buttonForRearranging');
    sec.style = "style = 100%;" +
        "display: flex;" + 
        "flex-direction: row;" + 
        "margin-top: 20px";

    let listText = document.createElement('li');
    listText.innerHTML = mainArr[mainArr.length - 1];
    listText.style.textAlign = "left";
    sec.append(listText);
    listElements.append(sec);
    
    let deleteButton = document.createElement('button');
    deleteButton.className = `deleteListElement${inputText.value}`;
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

    // Deleting element div and value in array
    const delLsElement = document.querySelector(`.deleteListElement${inputText.value}`);
    const divDelete = document.querySelector(`.delLsDivBtn${inputText.value}`);
    delLsElement.addEventListener('click', () => {
        divDelete.remove();
        
        let deletingElement = divDelete.className.substring(11);
        mainArr.forEach(function(element) {
            if(element == deletingElement) {
                delete mainArr[mainArr.indexOf(element)];
            };
        });
    });
    i++;
});

// Delete button in input
delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
});

const sortBtn = document.querySelector('.buttonSort');
const image = document.querySelector('.image1');   

sortBtn.addEventListener('click', () => {
    let arrSorted = [...mainArr];
    
    if(image.getAttribute('src') == '.\\photos\\icon.png'){
        arrSorted.sort();

        console.log(arrSorted)
    
        const listElements = document.querySelectorAll('li');
        for(let l = 0; l < arrSorted.length; l++) {
            if(arrSorted.indexOf(undefined) >= 0) {
                arrSorted.splice(arrSorted.indexOf(undefined), 1);
            }
        }

        console.log(arrSorted)

        const divReArrange = document.querySelectorAll('#buttonForRearranging');
        for(let l = 0; l < divReArrange.length; l++){
            divReArrange[l].className = arrSorted[l];
        }

        for(let l = 0; l < arrSorted.length; l++) {
            listElements[l].innerHTML = arrSorted[l];
        }

        image.setAttribute('src', '.\\photos\\iconReverse.png');
    }
    else if(image.getAttribute('src') == '.\\photos\\iconReverse.png'){
        for(let l = 0; l < arrSorted.length; l++) {
            if(arrSorted.indexOf(undefined) >= 0) {
                arrSorted.splice(arrSorted.indexOf(undefined), 1);
            }
        }

        arrSorted.reverse();

        const listElements = document.querySelectorAll('li');
        for(let l = 0; l < arrSorted.length; l++) {
            listElements[l].innerHTML = arrSorted[l];
        }

        image.setAttribute('src', '.\\photos\\icon.png');
    }
});