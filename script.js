/* *************** Menu ****************** */
/**Funcion Anonima autoejecutable */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

        $btnMenu.addEventListener("click", e => {
          $btnMenu.firstElementChild.classList.toggle("none");
          $btnMenu.lastElementChild.classList.toggle("none");
          $menu.classList.toggle("is-active")
        });
        /*Tecnica de delegacion de eventos */
        d.addEventListener("click",e =>{
            if(!e.target.matches(".menu a")) return false;
            $btnMenu.firstElementChild.classList.remove("none");
            $btnMenu.lastElementChild.classList.add("none");
            $menu.classList.remove("is-active")
        });
})(document)