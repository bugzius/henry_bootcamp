// la función recibe el evento click
function cambiarClase(event) {
  // sacamos el elemento que disparó el evento,, de dónde???
  // de event.target => elemento responsable de disparar el evento
  var divClickeado = event.target;

  // hicimos un toggle de la clase 1 y 2
  if (divClickeado.className === "clase1") divClickeado.className = "clase2";
  else divClickeado.className = "clase1";
}

function onClick() {
  // 1 => creamos un parrafo
  var p = document.createElement("p");

  // 2 => le dimos texto al párrafo
  p.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis illo earum quia ipsam dicta perspiciatis provident. Debitis, fugit molestiae. Sint quo voluptate consequatur dolore voluptatibus, tempore nostrum saepe non?";

  // 3 => creamos el div que debe contener el parrafo
  var div = document.createElement("div");
  div.className = "clase1";
  // Hice un event listener para que cuando clickeamos en el div, se ejecute la función
  // cambiarClase
  div.addEventListener("click", cambiarClase);

  // 4 => agregamos el parrafo al div
  div.appendChild(p);

  // 5 => nos trajimos el contenedor que estaba ya en el body
  var contenedor = document.querySelector("#contenedor");

  // 6 => agregamos el div del parrafo al contenedor
  contenedor.appendChild(div);
}

var boton = document.querySelector("#boton");

boton.addEventListener("click", onClick);
