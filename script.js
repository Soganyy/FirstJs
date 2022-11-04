const inputText = document.querySelector('#taskEnter');
const mainButton = document.querySelector('.mainButtonSt');
const delBtnFirst = document.querySelector('.cancelButton');
const list = document.querySelector('.listOutput');
const sortBtn = document.querySelector('.buttonSort');
const image = document.querySelector('.image1');   

delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
});

mainButton.addEventListener('click', () => {

    let sec = document.createElement('div');
    sec.className = `delLsDivBtn${inputText.value}`;
    sec.setAttribute('id', 'sortingDiv');
    sec.style = "style = 100%; display: flex; flex-direction: row; margin-top: 20px; height: 20px";
    list.append(sec);

    let listText = document.createElement('p');
    listText.innerHTML = inputText.value;
    listText.style.textAlign = "left";
    listText.style.marginTop = "2px";
    sec.append(listText);
    
    let deleteButton = document.createElement('button');
    deleteButton.className = `deleteListElement${inputText.value}`;
    deleteButton.setAttribute('id', 'sortingDelButton')
    deleteButton.innerHTML = 'x';
    deleteButton.style = "border-radius: 50%; height: 25px; width: 25px font-size: 15px; text-decoration-color: gray; background-color: white; border: 2px gray solid; position: absolute; left: 800px";
    sec.append(deleteButton);

    const delLsElement = document.querySelector(`.deleteListElement${inputText.value}`);
    const divDelete = document.querySelector(`.delLsDivBtn${inputText.value}`);

    delLsElement.addEventListener('click', () => {
        divDelete.remove(); 
    });
});

sortBtn.addEventListener('click', () => {
    
    if(image.getAttribute('src') == '.\\photos\\icon.png'){

        let paragNodes = document.querySelectorAll('p');
        let sortingArr = [];

        for(let i = 0; i < paragNodes.length; i++){
            sortingArr[i] = paragNodes[i].innerHTML;
        }

        sortingArr.sort();

        for(let i = 0; i < paragNodes.length; i++){
            paragNodes[i].innerHTML = sortingArr[i];
        }

        const sortingDiv = document.querySelectorAll('#sortingDiv');
        const sortingDelButton = document.querySelectorAll('#sortingDelButton');

        for(let i = 0; i < sortingArr.length; i++){
            sortingDiv[i].className = `delLsDivBtn${sortingArr[i]}`;
            sortingDelButton[i].className = `deleteListElement${sortingArr[i]}`;
        }

        image.setAttribute('src', '.\\photos\\iconReverse.png');
    }
    else if(image.getAttribute('src') == '.\\photos\\iconReverse.png'){
        
        let paragNodes = document.querySelectorAll('p');
        let sortingArr = [];

        for(let i = 0; i < paragNodes.length; i++){
            sortingArr[i] = paragNodes[i].innerHTML;
        }

        sortingArr.sort().reverse();

        for(let i = 0; i < paragNodes.length; i++){
            paragNodes[i].innerHTML = sortingArr[i];
        }

        const sortingDiv = document.querySelectorAll('#sortingDiv');
        const sortingDelButton = document.querySelectorAll('#sortingDelButton');

        for(let i = 0; i < sortingArr.length; i++){
            sortingDiv[i].className = `delLsDivBtn${sortingArr[i]}`;
            sortingDelButton[i].className = `deleteListElement${sortingArr[i]}`;
        }

        image.setAttribute('src', '.\\photos\\icon.png');
    };
});