// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("prueba de conexión");
let listaAmigos = [];

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
//funcion para agregar los amigos
let nuevoAmigo = document.getElementById('amigo').value;
if (nuevoAmigo == ""){
        alert("Escribe un nombre por favor");
    } 
else {
        listaAmigos.push(nuevoAmigo);
        limpiarCaja();
        console.log(listaAmigos);



    }
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}