// javascript
const getEleById = element => document.getElementById(element)

const navBar = getEleById('navBar');
const hamMenu = getEleById('hamMenu');
const backBtn = getEleById("backBtn");

hamMenu.addEventListener('click', function () {
    console.log("clicked")
    navBar.style.display = 'block'
    hamMenu.style.display = 'none'
})

backBtn.addEventListener('click', () => {
    navBar.style.display = 'none'
    hamMenu.style.display = 'block'
})