🎁 Sorteo de Amigos

Este es un pequeño programa en JavaScript que permite agregar una lista de amigos y realizar un sorteo aleatorio entre ellos.

🚀 Características

	•	Agregar nombres a una lista.
	•	Evitar nombres vacíos o números.
	•	Mostrar la lista de amigos agregados.
	•	Sortear un amigo de la lista de manera aleatoria.
	•	Evitar repetir nombres ya sorteados.
	•	Mostrar un mensaje cuando todos los nombres han sido sorteados.

🛠️ Tecnologías utilizadas

	•	HTML: Para la estructura de la interfaz.
	•	CSS: (Opcional) Para mejorar la apariencia.
	•	JavaScript: Para la lógica del programa y manipulación del DOM.

📌 Uso

	1.	Escribe el nombre de un amigo en el campo de texto y presiona “Agregar Amigo”.
	2.	Los nombres ingresados aparecerán en una lista.
	3.	Presiona “Sortear Amigo” para seleccionar un nombre aleatorio.
	4.	Los nombres sorteados no se repetirán.
	5.	Cuando todos los amigos hayan sido sorteados, aparecerá un mensaje indicándolo.

📜 Código principal

function agregarAmigo() {
  let name = document.getElementById('amigo').value.trim();

  if (name === '' || !isNaN(name)) {
    alert('Digita un nombre válido');
  } else {
    amigos.push(name);
    crearlista();
  }

  borrarCaja();
}

🔥 Contribuciones

Si deseas mejorar el código, puedes hacer un fork del repositorio y enviar un pull request con tus cambios.

📄 Licencia

Este proyecto es de uso libre bajo la licencia MIT.
