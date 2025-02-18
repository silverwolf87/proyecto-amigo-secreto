// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creamos la lista vacia donde se almacenará los nombres.
let nombres=[];



//creamos una funcion para que cada vez que se escriba un nombre se borre el espacio en la caja:

function borrarCaja(){

   return document.getElementById('amigo').value='';
}






//cuando escribimos el nombre en el espacio debemos capturar los valores 
//creamos una funcion para esto:

function agregarAmigo(){

  let name = (document.getElementById('amigo').value);
  console.log(name);
  
  
  borrarCaja();

//validar que no se envie un espacio vacio//
  if (name ==='' || !isNaN(name) ){

    alert('digita un nombre valido');

  }else{
    nombres.push(name);
    console.log(nombres);
  }
}



