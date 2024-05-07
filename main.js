const burguerMenu = document.querySelector('#burguer_menu')
const exitMenu = document.querySelector('#exit_menu')
const menuModal = document.querySelector('#menu_modal')

burguerMenu.addEventListener('click', openModal)
exitMenu.addEventListener('click', closeModal)

function openModal() {
    burguerMenu.style.display = 'none'
    exitMenu.style.display = 'block'
    menuModal.style.display = 'flex'
} 

function closeModal() {
    exitMenu.style.display = 'none'
    burguerMenu.style.display = 'block'
    menuModal.style.display = 'none'
}