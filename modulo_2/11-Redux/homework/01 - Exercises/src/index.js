const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// Obtenemos el elemento con el id `valor`.
const boxValue = document.querySelector('#valor');

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
const store = createStore(contador);


// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:

document.addEventListener('DOMContentLoaded',() => {
  //Estableciendo Eventos
  //Botón Incremento
  document.querySelector('#incremento').addEventListener(
    'click',
    () => store.dispatch(incremento(1)));
    
  //Botón Decremento
  document.querySelector('#decremento').addEventListener(
    'click',
    () => store.dispatch(decremento(1)));
      
  // Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
  store.subscribe(renderContador);
  
  //Inicializar el DOM
  // Ejecutamos la función 'renderContador':
  renderContador();
});

/* Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
En el primer render y cada vez que nos subscribamos al Store.
Utilizamos el elemento obtenido arriba para mostrar el State. */
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const {contador} = store.getState();
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  boxValue.textContent = contador;
}