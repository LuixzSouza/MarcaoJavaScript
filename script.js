const menus = document.getElementsByClassName("item-menu");
console.log(menus);

const arrayMennu = Array.from(menus)

arrayMennu.forEach((menus) => {
    console.log(menus.textContent)
})