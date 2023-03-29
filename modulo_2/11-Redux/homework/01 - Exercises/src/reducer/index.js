const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, {type,payload}) {
  const stateValue = ({
    [`${INCREMENTO}`]:() => ({contador: state.contador + payload.value }),
    [`${DECREMENTO}`]:() => ({contador: state.contador - payload.value })
  })[type];
  
  return stateValue ? stateValue() : state;
}

module.exports = contador;