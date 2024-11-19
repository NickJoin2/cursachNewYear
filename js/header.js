const open = document.querySelector('.header__menu')
const close = document.querySelector('.close')
const menu = document.querySelector('.adaptive__menu')


open.addEventListener('click', () => {
    menu.classList.add('open')
})

close.addEventListener('click', () => {
    menu.classList.remove('open')
})