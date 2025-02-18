// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos la lista vacia donde se almacenará los nombres.
let nombres=[];

let listaUl =document.getElementById('listaAmigos');
let elementli = document.createElement('li');
elementli.textContent = 'andres';
listaUl.appendChild(elementli)


//creamos una funcion para que cada vez que se escriba un nombre se borre el espacio en la caja:

function borrarCaja(){

   return document.getElementById('amigo').value='';
}

//creamos una funcion para crear una lista de amigos:

function crearlista(){
 
let lista = document.getElementById('listaAmigos');//llamamos a la lista ul desde el DOM, quien contendrá los elementos li

lista.innerHTML='';

for (i=0;i<=nombres.length;i++){   //iteramos con un for la lista de nombres con el fin de ir agregando los elementos li

  let elementoLi= document.createElement('li');//debemos crear el elemento li

  elementoLi.textContent = nombres[i];//el contenido de esas etiquetas corresponden a los nombres que se van iterando

  lista.appendChild(elementoLi);// Agregamos el li a la lista

}
}




//cuando escribimos el nombre en el espacio debemos capturar los valores 
//y que estos ingresen directamente a la lista vacia llamada nombres,
// creamos una funcion para esto:

function agregarAmigo(){

  let name = (document.getElementById('amigo').value);
  console.log(name);
  
  //usamos la funcion borrar caja para limpiar la caja.
  borrarCaja();

//validar que no se envie un espacio vacio o un numero//

  if (name ==='' || !isNaN(name) ){

    alert('digita un nombre valido');

  }else{
    nombres.push(name);
    console.log(nombres);
    // crearlista()
  }




}



