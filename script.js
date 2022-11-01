// array
let mainArr = [];

// Input
const inputText = document.querySelector('#taskEnter')

// Main button
const mainButton = document.querySelector('.mainButtonSt')

// Delete button
const delBtnFirst = document.querySelector('.cancelButton')

mainButton.addEventListener('click', () => {
    console.log(inputText.value)
});

delBtnFirst.addEventListener('click', () => {
    inputText.value = '';
})
