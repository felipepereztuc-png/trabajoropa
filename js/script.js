function mostrarMenu(){

    let menu = document.getElementById("submenu");

    menu.classList.toggle("activo");

}
/* =========================
   MENÚ PRODUCTOS
========================= */

const productosBtn = document.getElementById("productosBtn");
const submenu = document.getElementById("submenu");

productosBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    submenu.classList.toggle("mostrar");

});


/* Cerrar menú al tocar afuera */

document.addEventListener("click", function() {

    submenu.classList.remove("mostrar");

});


/* =========================
   CARRUSEL
========================= */

let slideActual = 0;

const slides = document.querySelectorAll(".slide");
const puntos = document.querySelectorAll(".punto");


function mostrarSlide(numero) {

    slides.forEach(function(slide) {
        slide.classList.remove("activo");
    });

    puntos.forEach(function(punto) {
        punto.classList.remove("activo-punto");
    });


    slides[numero].classList.add("activo");

    puntos[numero].classList.add("activo-punto");

}


function cambiarSlide(direccion) {

    slideActual += direccion;


    if (slideActual >= slides.length) {
        slideActual = 0;
    }


    if (slideActual < 0) {
        slideActual = slides.length - 1;
    }


    mostrarSlide(slideActual);

}


function irSlide(numero) {

    slideActual = numero;

    mostrarSlide(slideActual);

}


/* Cambio automático cada 5 segundos */

setInterval(function() {

    cambiarSlide(1);

}, 5000);