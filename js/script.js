
//Array con todos los objetos y lo que vamos a cambiar cuando clickemos
const arrayRoles = [{ fondo: "../img/fondoasesino.webp", texto: "akali", imgPersonaje: "../img/akali.webp", descripcion: "La Asesina Sigilosa" },
{ fondo: "../img/fondoYasuo.webp", texto: "yasuo", imgPersonaje: "../img/yasuo.webp", descripcion: "La Espada sin Honor" },
{ fondo: "../img/fondoLux.webp", texto: "lux", imgPersonaje: "../img/lux.webp", descripcion: "La Dama Luminosa" },
{ fondo: "../img/fondoJinx.svg", texto: "jinx", imgPersonaje: "../img/jinx.webp", descripcion: "La Bala Perdida" },
{ fondo: "../img/fondoSupp.webp", texto: "thresh", imgPersonaje: "../img/thresh.webp", descripcion: "El Carcelero Implacable" },
{ fondo: "../img/fondoLeona.webp", texto: "leona", imgPersonaje: "../img/leona.webp", descripcion: "El Amanecer Radiante" }]

//Seleccionamos del documento los li, que son los que tienen la imagen y el texto, para que cuando clique en ellos, cambien las cosas
const roles = document.querySelectorAll(".btn-rol")

const personajeImg = document.querySelector(".personaje");
const personajeNombre = document.querySelector(".nombre-personaje");
const descripcionPer = document.querySelector(".desc-personaje");
const fondoPersonajes = document.querySelector(".section-campeon");


//FUNCIONES DE LOS BOTONES DE LOS ROLES
roles.forEach((elemento, index) => {
    elemento.addEventListener("click", (event) => {
        //a la direccion de la imagen del personaje, le añadimos la correspondiente de nuestro array. El index sirve para que coja la posición del array. Por eso todo en el array tiene que estar en el orden que queremos
        personajeImg.src = arrayRoles[index].imgPersonaje;
        console.log(arrayRoles[index].imgPersonaje)
        personajeNombre.textContent = arrayRoles[index].texto;
        descripcionPer.textContent = arrayRoles[index].descripcion;
        //con el background.style puedo cambiar el fondo. Porque es una propiedad que tengo en el CSS no en el HTML
        fondoPersonajes.style.backgroundImage = "url(" + arrayRoles[index].fondo + ")";

        //Cuando cliko en el botón, se le añade la clase activo, que pone la opacidad al 100%. Ahora mismo no sé como hacer que se quite
        event.currentTarget.classList.toggle("activo")
    })
})

//BOTONES DE LOS MODOS DE JUEGO

const arrayModos = [{ video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4?accountingTag=LoL", modo: "El modo de juego más popular", descripcion: "Despeja tu calle, lánzate a épicos combates de equipo cinco contra cinco y destruye el nexo enemigo antes de que destruyan el tuyo." },
{ video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4?accountingTag=LoL", modo: "All Random, All Mid (todo aleatorio, todos en la calle central)", descripcion: "Lucha sobre un puente helado con tu equipo de campeones aleatorios y carga hacia el nexo enemigo en este caótico pero divertidísimo modo cinco contra cinco." },
{ video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news_live/69b0e6a4393233da0d292c286fd371cfa036d30f.mp4?accountingTag=LoL", modo: "Caos total todo el rato", descripcion: "Mejora tu experiencia de ARAM con aumentos caóticos que cambian drásticamente tu forma de jugar la partida." },
{ video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4?accountingTag=LoL", modo: "Un combate todos contra todos por la victoria", descripcion: "Reúne a un equipo de campeones para que luchen en tu nombre. Sobrevive a siete oponentes para hacerte con la victoria." }]

const modos = document.querySelectorAll(".btn-modo")
const videoSection =document.querySelector(".video-section")
const tituloModo = document.querySelector(".modo-juego")
const descripcionModo =document.querySelector(".desc-modo-juego")

modos.forEach((elemento, index) =>{
    elemento.addEventListener("click", (event) =>{
        videoSection.src = arrayModos[index].video;
        tituloModo.textContent = arrayModos[index].modo;
        descripcionModo.textContent = arrayModos[index].descripcion;

        event.currentTarget.classList.toggle("activo")
    })
})