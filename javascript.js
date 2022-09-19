((d) => { 
    const $btnMenu = d.querySelector(".header__container__menu__btn"),
    $menu = d.querySelector(".header__container__menu")

    $btnMenu.addEventListener("click", e => {  
        $btnMenu.firstElementChild.classList.toggle("none") 
        $btnMenu.lastElementChild.classList.toggle("none") 
        $menu.classList.toggle("is-active"); 
    })

    d.addEventListener("click", (e) => {
        
        if(!e.target.matches(".header__container__menu a")) return false; 

        $btnMenu.firstElementChild.classList.remove("none") 
        $btnMenu.lastElementChild.classList.add("none")
        $menu.classList.remove("is-active"); 
    });

})(document);