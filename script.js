const btn = document.getElementById('menu-btn');
const mobile_menu = document.getElementById('menu')


btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    mobile_menu.classList.toggle('open-menu')
    document.body.classList.toggle('no-scroll')
})