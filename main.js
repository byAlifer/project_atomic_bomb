//Elements
const burguerMenu = document.querySelector('#burguer_menu')
const exitMenu = document.querySelector('#exit_menu')
const menuModal = document.querySelector('#menu_modal')

//events
burguerMenu.addEventListener('click', openModal)
exitMenu.addEventListener('click', closeModal)

//functions
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

//Fix Screen - menu (Mobile Edition)
function fixScreen() {
    let wScreen = window.innerWidth

    if(wScreen >= 781) {
        exitMenu.style.display = 'none'
        burguerMenu.style.display = 'none'
        menuModal.style.display = 'none'
    } else if(wScreen <= 780 && exitMenu.style.display == 'none') {
        burguerMenu.style.display = 'block'  
    }
}

window.addEventListener('resize', fixScreen)

//Vercel metrics
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();