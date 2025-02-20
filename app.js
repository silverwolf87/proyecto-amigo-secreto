// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos las listas vacias donde se almacenará los nombres.
let amigos=[];
let amigosSorteados=[];
let lista=[];

//creamos una funcion para que cada vez que se escriba un nombre se borre el espacio en la caja:

function borrarCaja(){


   return document.getElementById('amigo').value='';
}

//creamos una funcion para crear una lista de amigos:

function crearlista(){
 
 lista = document.getElementById('listaAmigos');//llamamos a la lista ul desde el DOM, quien contendrá los elementos li

 lista.innerHTML='';//limpiamos cada vez que se ejecuta la funcion

  for (i=0;i<amigos.length;i++){   //iteramos con un for la lista de nombres con el fin de ir agregando los elementos li

    let elementoLi= document.createElement('li');//debemos crear el elemento li

    elementoLi.textContent = amigos[i];//el contenido de esas etiquetas corresponden a los nombres que se van iterando

    lista.appendChild(elementoLi);// Agregamos el li a la lista

  }
}

//cuando escribimos el nombre en el espacio debemos capturar los valores 
//y que estos ingresen directamente a la lista vacia llamada nombres,
// creamos una funcion para esto:

function agregarAmigo(){

  let name = (document.getElementById('amigo').value);
  //console.log(name);
  
  //usamos la funcion borrar caja para limpiar la caja.
  borrarCaja();

//validar que no se envie un espacio vacio o un numero//

  if (name ==='' || !isNaN(name) ){

    alert('digita un nombre valido');

  }else{
    amigos.push(name);
    // console.log(amigos);
    crearlista()
  }

}


function sortearAmigo(){

  if(amigos.length===0){

    alert('ingresa primero los nombres de tus amigos')
    return;
  }
  
  //limpiamos la lista de nombres que ingresamos, para poder dar paso al nombre sorteado.
  lista = document.getElementById('listaAmigos');
  lista.innerHTML='';

    //creamos un indice aleatorio que nos dara como resultado una poscion aleatoria cuyo valor sera el nombre
  let posicionAmigoSecreto = Math.floor(Math.random()*amigos.length);
  
  //para saber el nombre que tiene esa posicion aleatoria creamos la variable y su valor sera el nombre llamado:
  let amigoSecreto = amigos[posicionAmigoSecreto];
  
  
  if (amigos.length===amigosSorteados.length ){

    alert('ya fueron sorteados todos los amigos')
    return;
   
   //si el amigo secreto ya fue sorteado
  }else  if (amigosSorteados.includes(amigoSecreto)){

    sortearAmigo()
    
  }else{
   
    amigosSorteados.push(amigoSecreto);
    // console.log(amigosSorteados);

    let resultado =document.getElementById('resultado');
    resultado.innerHTML=''
    let elementoLi=document.createElement('li');
    elementoLi.textContent = amigoSecreto;
    resultado.appendChild(elementoLi);

  }
  
  
  
  

  
}

 







