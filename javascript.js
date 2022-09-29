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

/* ----------ContactForm---------- */
((d) => {
    const $form = d.querySelector(".contact__form"),
    $loader = d.querySelector(".contact__form--loader"),
    $response = d.querySelector(".contact__form--response")

    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        $loader.classList.remove("none"); /* se ve el loader, desp mandamos la peticion a este servicio */
        fetch("https://formsubmit.co/ajax/llaminc704@gmail.com", {
            method: "POST",
            body: new FormData(e.target) /* q envie el formulario como tal, para el envio de los datos al servicio y obtengo los datos del e.target(q es el objeto que origina el evento) */
        })
        .then((res) => (res.ok ? res.json() : Promise.reject(res))) /* si res.ok valida a verdadero la rta que me da a form submit q la convierta a json, caso contrario q rechaze la promesa*/
        .then(json => {
            console.log(json);
            location.hash = "#gracias"; /* el objeto location es el que controla todo lo que entra en la url de la barra de direccion del navegador, entonces que agregue el hash y el gracias, asi se activa la pantalla modal */
            $form.reset(); /* el formulario se resetea */
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}` 
            $loader.classList.add("none");
        }).finally(() => {
            $loader.classList.add("none"); /* independientemente del resultado de la respuesta esto se ejecutará  */
            setTimeout(() => {
                location.hash = "#close" /* se vuelve a modificar para que se vaya */
            }, 3000)
        }) 
    });
})(document);