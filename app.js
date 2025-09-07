// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
console.log("prueba de conexión");
let listaAmigos = [];
let miLista = document.getElementById('listaAmigos');

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
        agregaLista();
        limpiarCaja();
        console.log(listaAmigos); //para probar que funciona
    }
}


function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}

function agregaLista(){

    miLista.innerHTML = '';
    for (let i=0; i< listaAmigos.length;i++){
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent=listaAmigos[i];
        miLista.appendChild(nuevoLi);

    }
}

function sortearAmigo(){
    if (listaAmigos.length===0){
        //el arreglo esta vacio
        alert("Agrega amigos antes de sortear");
    } else {
        //se ejecuta la funcion
        let amigoGanador = Math.floor(Math.random()*listaAmigos.length); 
        console.log(amigoGanador);
        console.log(listaAmigos[amigoGanador]);
        asignarTextoElemento('#resultado',`El amigo ganador es: ${listaAmigos[amigoGanador]}`);


    }
}