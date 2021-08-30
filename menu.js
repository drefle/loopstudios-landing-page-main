let menu = document.querySelector(".header__content__menu")
let body = document.querySelector("body")

function popmenu(){
    menu.style.display = "flex"
    body.style.overflow = "hidden"
}
function depopmenu(){
    menu.style.display = "none"
    body.style.overflow = "auto"

}

