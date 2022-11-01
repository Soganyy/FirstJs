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

// List elements //calismayan style
let listElements = document.createElement('div')
listElements.style = "width: 80%;" + 
    "display: flex;" +
    "flex-direction: column;";
list.append(listElements);

mainButton.addEventListener('click', () => {
    mainArr[mainArr.length] = inputText.value;

    let sec = document.createElement('div')
    sec.style = "style = 100%;" +
        "display: flex;" + 
        "flex-direction: row-reverse;" + 
        "margin-top: 2px";
    
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.style = "border-radius: 50%;" +
        "height: 25px;" +
        "width: 25px" +
        "font-size: 15px;" +
        "text-decoration-color: gray;" +
        "background-color: white;" +
        "border: 2px gray solid;";
    sec.append(deleteButton);

    let listText = document.createElement('li');
    listText.innerHTML = mainArr[mainArr.length - 1];
    listText.style.textAlign = "left";
    sec.append(listText);
    listElements.append(sec);
});

delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
})

