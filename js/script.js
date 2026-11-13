const arrayRoles =[{fondo: "../img/fondoasesino.webp", texto: "akali", imgPersonaje: "../img/akali.webp", descripcion: "descripcion"},
    {fondo: "../img/fondoYasuo.webp", texto: "yasuo", imgPersonaje: "../img/yasuo.webp", descripcion: "descripcion2"}]

const roles =document.querySelectorAll(".btn-rol")
const personajeImg =document.querySelector(".personaje");
const personajeNombre =document.querySelector(".nombre-personaje");
const descripcionPer =document.querySelector(".desc-personaje");
const fondoPersonajes = document.querySelector(".section-campeon");


//terminar esto
roles.forEach((elemento, index)=>{
    elemento.addEventListener("click", (event) =>{
        //a la direccion de la imagen del personaje, le añadimos la correspondiente de nuestro array
        personajeImg.src = arrayRoles[index].imgPersonaje;
        console.log( arrayRoles[index].imgPersonaje)
        personajeNombre.textContent = arrayRoles[index].texto;
        descripcionPer.textContent = arrayRoles[index].descripcion;
        //con el background.style puedo cambiar el fondo
        fondoPersonajes.style.backgroundImage = "url(" + arrayRoles[index].fondo + ")";
    })
})