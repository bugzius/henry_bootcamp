# React Redux

Objetivos de la Clase

- Conectar React con Redux.
- Gestionar el estado Global desde los Componentes.
- Renderizar informacion del estado global en Componentes.

La arquitectura con Redux tomandola desde una perspectiva totalmente diferente de React, siempre sin importar con qué tipo de Aplicación hagamos uso de Redux, siempre va a funcionar de la misma forma. _**¿Cuál Forma?**_, Mantiene el Estado global con un Objeto, mantiene la misma forma de creación de su reducer y mantiene la misma Forma de creación de Actions.

La forma en la que se conecta Redux con el funcionamiento de la`store` con _**React**_ (El uso de dispatch y suscribe) va a ser diferente por desarrollo de aplicación, en JavaScript tenemos los métodos puros, pero en _**React**_ existe una forma de conectar nuestros componentes con _**Redux**_ para facilitar el Comportamiento de los mismos parseando el `state` sobre las propiedades del componente.

- Componentes y Redux.
- Conexión.
- Resumen y Explicación de la Homework.

## Suscripción.

Nos permite conectar una parte de nuestra aplicación para que cuando uno de sus valores que usa del `state` cambie por medio de un `dispatch`, este ejecute una función o se realice un comportamiento.

De esta manera separamos la lógica de la complejidad.

1. Componentes Presentacionales (dumb): Se trata de componentes que no contienen estado propio para el manejo de su Información relevante, únicamente leen valores y muestran Información. Nos provee de una ventaja; generar componentes reutilizables. Son solo presentacionales, de vistas.

2. Componentes Containers (smart): Son componentes que proveen valores a componentes hijos. maneja la gestión de Información sobre sus estados al igual que invocan acciones, manejan muy poco la presentación del DOM. 

Para redux, estos componentes son los que van a interactuar con su `store` por medio de la ejecución de `actions` y/o ejecucióñ de `subscribe`. manejo de lógica interna del componente.

Es importante mantener esta convención para generar un código Organizado y/o Estructurado para la gestión de los estados.

## Conexión - Conectar un componente a Redux

Sabemos que `Redux` es una librería totalmente independiente que funciona únicamente con _**Javascript**_ puro, es decir; podemos usarla sobre todo lo que con _**Javascript**_ funcione.

Con `React-redux` tenemos la posibilidad de facilitar el uso de Componentes para proveer a nuestra Aplicación de el _**store**_ de _**redux**_ que hemos creado previamente con toda su estructura definida.

Lo que nos soluciona `react-redux` es la manera en la que conectamos nuestra store con nuestra Aplicación de _**react**_. Con javascript puro hacemos uso de Importaciones particulares para el uso del _**store**_ con el _**dispatch**_ además de los _**createActionTypes**_ y los _**nameActionTypes**_.

Con esta librería vamos a ver 2 de las utilidades más grandes que nos ofrece `React-Redux`.

### Provider react-redux
Con la Librería de `React-Redux` disponemos de un componente que recibe un `store` para así permitir que nuestra arbol de componentes pueda acceder a este así como sea requerido.


```jsx
/*Creación del Store - store.js*/
import { createStore } from 'redux';
import rootReducer from './reducer.js';

export default createStore(rootReducer);

/* main.jsx*/
import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

const root = createRoot(document.querySelector('#root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
    </React.StrictMode>
);
```
En el ejemplo anterior vemos cómo se ha realiza la conexión a nuestra `store` de _**redux**_ por medio de el Componente que nos provee `react-redux`, el cual nos solicita la creación del `store` para así parsear todo nuestro arbol de componentes.

### Connect - react-redux
En el caso de el uso de Clases, hacemos uso de esta función para _**subscribir**_ a un componente en el `store`.

Se trata de una función de la librería que nos permite reemplazar el uso de `subscribe` de _**redux**_ por una función que permite parsear valores sobre un componente, que queramos que esté atento a cambios específicos de nuestro _**estado global**_ y a la vez que se encuentre adentro de nuestro `provider`.

La función `connect` nos retorna una función que se va a bindiar 2 argumentos que la misma solicita, los cuales son:

1. _**mapStateToProps**_: Esta función equivale a el primer argumento que se va asignar en la ejecución de `connect`, dicha función cumple la tarea de de proveer un Objeto con valores específicos del _**state**_. Esta función al ser asignada como argumento en esta función `connect` puede hacer uso en su ejecución de el `state`.

2. _**mapDispatchToProps**_: Esta función equivale a el segundo argumento que se va a asignar en la ejecución de `connect`. Al esta función ser asignada como argumento de `connect` puede tomar el parámetro `dispatch`. Esta función (_mapDispatchToProps_) cumple la tarea de retornar un objeto parseando sus propiedades con funciones que van a ejecutar el dispatch.

Los objetos que retornan estas dos funciones pasadas como argumentos de la ejecución de `connect` van a ser parseados sobre un componente de _**react**_ para hacer uso de los mismos dentro del componente como si fuesen propiedades (_props_) de nuestro componente.

```jsx
import React, {Component} from 'react';
import { connect } from 'redux';

import {addCharacter, removeCharacter} from './createActionsTypes';

class Cards extends Component{
    constructor(props){
        super(props);
        this.addCharacter = this.addCharacter.bind(this);
    }

    //Usa desde sus propiedades el dispatch seteado en su exportación
    addCharacter(){
        {...}
        
        this.props.addCharacter({
            id:2,
            titulo: "Usando un Dispatch"
        })

        {...}
    }
    render(){
        return (
            <>
                {
                    this.props.characters.map( item => {
                        return (
                            <li key={item.id}>
                                <a href="#">{item.title}</a>
                            </li>
                        )
                    })
                }
            </>
        )
    }
};
//mapStateToProps: Extrae valores específicos del state para enviarlos al componente
const mapStateToProps = state => ({
    characters: state.characters
});

//Esta función nos permite acceder a el método dispatch del Store del Provider, para
//retornar un Objeto con los métodos dispatch y sus actionsTypes que requiere
//el componente en su funcionamiento para ser asignadas como parámetros.

const mapDispatchToProps = dispatch => ({
    addCharacter: payload => dispatch(addCharacter(payload)),
    removeCharacter:(payload)=> dispatch(removeCharacter(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
```

## Equivalencia de connect en Componentes Funcionales

para el uso de el `dispatch` y extracción de valores del `state` como se hace con componentes funcionales, hacemos uso de _**Hooks**_.

- useSelector: nos solicita como argumento una función que es equivalente a _**mapStateToProps**_.
- useDispatch: por permite extraer el método `dispatch` del store situado en el _**Provider**_ de nuestra aplicación.

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { addCharacter } from './actions';

function Cards(props){
    const dispatch = useDispatch();
    const characters = useSelector( state => ({characters:state.characters}));

    useEffect(() => {
        dispatch(addCharacter({
            id:1,
            titulo: "Usando Hooks para la conexión de React"
        }))
    },[])

    return (
        <>
            {
                characters.map( item => {
                    return (
                        <li key={item.id}>
                            <a href="#">{item.title}</a>
                        </li>
                    )
                })
            }
        </>
    )
}
```