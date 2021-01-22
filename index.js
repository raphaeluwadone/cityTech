const menuIcon = document.querySelector('.menu')
const menuHide = document.querySelector('.menu-hide')
const dropDown = document.querySelector('.dropdown-menu');

menuIcon.addEventListener('click', ()=> {
    dropDown.classList.remove('invisible')
    dropDown.classList.add('visible')
})

menuHide.addEventListener('click', ()=> {
    dropDown.classList.add('invisible')
    dropDown.classList.remove('visible')
})

// window.addEventListener('onload', () => {
//     setTimeout(() => {
        
//     }, );
// })