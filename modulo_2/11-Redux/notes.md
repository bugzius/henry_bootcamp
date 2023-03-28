# Cronograma de la Clase

1. Redux
2. Principios de Redux
3. Flow de Redux
4. Actions - Actions Creators
5. Dispatch() - Suscribe()
6. Resumen
7. Homework

# Redux

- Identificar las Utilidades de La Librería de Redux
- Explicar el flujo de Información en Redux
- Generar un Ejemplo con el Uso de la Librería

Es una librería de Código de Abierto Creada por **Meta** trayendo la solución a un Problema de mantenimiento de Estados y su flujo de Trabajo.
Es una libreria de gestión de Estados que permite mantenerlos accesibles en toda nuestra aplicación desde un mismo lugar.
Hace uso de **actions** y **reducers** para el manejo del estado de forma predecible y consistente, es decir; centralizamos la información para facilitar su uso desde cualquier lugar.

Es una librería independiente de react, se usa con javascript.

## Store
Hace referencia a el lugar en el que se almacenarán nuestros estados por medio de Redux.

Nuestros componentes se van a conectar con este **Store** para gestionar la información allí contenida. Algo importante es que los valores del **store** estarán pasados a nuestros componentes por medio de las **props** en React.

## Principios de Redux

- Única fuente de verdad: es decir el almacén es único.
- El estado es solo de Lectura: no podemos modificar el estado de forma directa, evita errores en su asignación, es decir; nos permite hacer uso de métodos los cuales tienen el nombre de **actions** para modificar el estado pero con opciones. `store.dispatch({type:'TIPO_ACTION',index: value})`.

## Actions

Cumpliendo con el principio de _**El estado es de solo lectura**_ tenemos como uso las actions, Las actions son no más que métodos de nuestro _**store de Redux**_ que nos permite indicar las operaciones que se van a realizar con nuestro tipo de __**action**__,El principal de estos es el métodos `dispatch()` el cual recibe un Objeto de _**" configuración "**_.

```js
store.dispatch({
    type: 'COMPLETE_TODO',
    index:
})
```

`Payload` hace referencia a toda la Información que no pertenece al type pero se encuentra interna dentro del Objeto del método `dispatch({type:value, ...payload})`

## Reducer

Son funciones puras para la validación de solicitud de tipo de `action`.

```js
function reducer(prevState = {}, action){
    const actions = {
        'GET_CHARACTER_ID':() => {...}
    }

    return actions[action.type] ? actions[action.type]() : prevState;
}
```
En el código anterior estamos validando el valor del _**type**_ que contiene la `action` para así ejecutar una función previamente definida (en este caso el objeto _**actions**_) para así mismo cambiar nuestro estado con este valor retornado.

## Flow de Redux

Vamos a definirlo en este caso por medio de pasos para saber cómo viaja nuestra Información.

Veamoslo por medio de componentes de React mantener modularizado nuestro ejemplo, pero realmente como ya se mencionó, **Redux funciona para todo JavaScript**.

1. Nuestro componente genera la ejecución del _action_ y la creación la información de Solicitud.
2. Para el envío de nuestra _action_ lo hacemos por medio nuestro método disparador, el cual es el `dispatch`, este va a enviar nuestra solicitud a el `store`.
3. El reducer recibe la _action_ del componente, evalúa la información de la _action_ y posteriormente retorna un valor, el cual será asignado a nuestro estado inicialmente establecido.

![Flow de Redux](./resources/Captura%20de%20pantalla_2023-03-27_21-51-31.png)


# Uso de Redux

## Creación de el `Store`
```js
import * as {createStore} from 'redux'

const store = createStore(rootReducer);//Crea el Store para el Estado Global
```
## Uso de Reducer

El reducer es una función que se va a ejecutar en cada `dispatch` validando cierto valor para saber qué acción debe de realizar, estos valores los recibe el `reducer` como parámetro, es decir; puede hacer uso de los mismos en su asignación a la creación de la _**store**_.

```js
function rootReducer(initialState = [], {type, ...payload}){
    const actions = {
        'GET_CHARACTER_ID':() => {...payload}
    }

    return actions[type] ? actions[type]() : initialState;
}
```