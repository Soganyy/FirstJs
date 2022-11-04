const inputText = document.querySelector('#taskEnter');
const mainButton = document.querySelector('.mainButtonSt');
const delBtnFirst = document.querySelector('.cancelButton');
const list = document.querySelector('.listOutput');
const sortBtn = document.querySelector('.buttonSort');
const image = document.querySelector('.image1');

delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
});

let i = 0;
mainButton.addEventListener('click', () => {

    let sec = document.createElement('div');
    sec.className = `delLsDivBtn${i}`;
    sec.setAttribute('id', 'sortingDiv');
    sec.style = "style = 100%; display: flex; flex-direction: row; margin-top: 20px; height: 20px";
    list.append(sec);

    let listText = document.createElement('p');
    listText.innerHTML = inputText.value;
    listText.style.textAlign = "left";
    listText.style.marginTop = "2px";
    sec.append(listText);
    
    let deleteButton = document.createElement('button');
    deleteButton.className = `deleteListElement${i}`;
    deleteButton.setAttribute('id', 'sortingDelButton')
    deleteButton.innerHTML = 'x';
    deleteButton.style = "border-radius: 50%; height: 25px; width: 25px font-size: 15px; text-decoration-color: gray; background-color: white; border: 2px gray solid; position: absolute; left: 800px";
    sec.append(deleteButton);

    const delLsElement = document.querySelector(`.deleteListElement${i}`);
    const divDelete = document.querySelector(`.delLsDivBtn${i}`);

    delLsElement.addEventListener('click', () => {
        divDelete.remove(); 
    });
    i++;
});

sortBtn.addEventListener('click', () => {
    
    if(image.getAttribute('src') == '.\\photos\\icon.png'){

        let paragNodes = document.querySelectorAll('p');
        let sortingArr = [];

        for(let j = 0; j < paragNodes.length; j++){
            sortingArr[j] = paragNodes[j].innerHTML;
        }

        sortingArr.sort();

        for(let j = 0; j < paragNodes.length; j++){
            paragNodes[j].innerHTML = sortingArr[j];
        }

        const sortingDiv = document.querySelectorAll('#sortingDiv');
        const sortingDelButton = document.querySelectorAll('#sortingDelButton');

        for(let j = 0; j < sortingArr.length; j++){
            sortingDiv[j].className = `delLsDivBtn${j}`;
            sortingDelButton[j].className = `deleteListElement${j}`;
        }

        image.setAttribute('src', '.\\photos\\iconReverse.png');
    }
    else if(image.getAttribute('src') == '.\\photos\\iconReverse.png'){
        
        let paragNodes = document.querySelectorAll('p');
        let sortingArr = [];

        for(let j = 0; j < paragNodes.length; j++){
            sortingArr[j] = paragNodes[j].innerHTML;
        }

        sortingArr.sort().reverse();

        for(let j = 0; j < paragNodes.length; j++){
            paragNodes[j].innerHTML = sortingArr[j];
        }

        const sortingDiv = document.querySelectorAll('#sortingDiv');
        const sortingDelButton = document.querySelectorAll('#sortingDelButton');

        for(let j = 0; j < sortingArr.length; j++){
            sortingDiv[j].className = `delLsDivBtn${j}`;
            sortingDelButton[j].className = `deleteListElement${j}`;
        }

        image.setAttribute('src', '.\\photos\\icon.png');
    };
});