// const buttonFormOn = document.querySelector('.page button');
// const page = document.querySelector('.page');
// const modalWrap = document.querySelector('.modal-wrap');
// const buttonSendForm = document.querySelector('.send')
// const exit = document.querySelector('.x')

// buttonFormOn.addEventListener('click', function(){
//     page.classList.toggle('blur');
//     modalWrap.classList.toggle('active');
// })

// buttonSendForm.addEventListener('click', function(){
//     page.classList.toggle('blur');
//     modalWrap.classList.toggle('active');
// })

// exit.addEventListener('click', function(){
//     page.classList.toggle('blur');
//     modalWrap.classList.toggle('active');
// })

// --------------------------------------------------

const page = document.querySelector('.page');
const modalWrap = document.querySelector('.modal-wrap');
const button = document.querySelectorAll('.button');



function formActivation (){
    page.classList.toggle('blur');
    modalWrap.classList.toggle('active');
}

function clickButtons (){
    for (let i=0; i<button.length; i++) {
    button[i].addEventListener('click', formActivation)
}}

clickButtons (clickButtons)

// --------------------------------------------------
