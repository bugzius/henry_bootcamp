# React Hooks; Hooks al Detalle

- Aplicar con mayor precisión los Hooks de React Conocidos
- Aplicar nuevos Hooks REact y Redux
- Formular nuevas soluciones con estos Hooks


## useState

Sirve para definir y actualizar un valor que se encuentra contenido en un variable que ha sido desestructurada desde nuestro Hook, esto aplica para el uso de componentes funcionales.

Al momento de actualizar el estado, lo que nos permite react es rerenderizar el componente para ver los cambios actualizados.

```jsx
import React, {useState} from 'react';

function Example(props){
    const [data, setData] = useState(0)
    
    //Al ejecutar la función setData, nuestro componente se va a renderizar
    //nuevamente para mostrar el cambio de sus valores
    return (
        <>
            <input type="text" value={data} readonly/>
            <button onClick={() => setData(val => val + 1)}>Incrementar</button>
        </>
    );
};
```

## useEffect

Se trata de un hook que nos va permitir de manera flexible y declarativa ejecutar una función que este nos solicita en cualquiera de las etapas de ciclo de vida de un componente.

Le proveemos siempre un callback y un array. Un array vacío es equivalente a la etapa componentDidMount, lo que asignemos como elemento dentro de el array, le va a indicar e nuestro hook que debe de estar atento a sus cambios para que se vuelva a ejecutar nuestro callback.

Comportamientos de useEffect para afectar en cada una de las etapas de el ciclo de Vida.

- `componentDidMount`: Para que nuestro useEffect se ejecute en esta etapa nuestro array debe de encontrarse vacío.
- `componenteDidUpdate`: En nuestro array de dependencias vamos a establecer los valores que queremos identificar cada vez que este se actualiza.
- `componentWillUnmount`: Retornamos una función dentro de nuestro callback, esta se ejecutará al desmontarse el componente de la vista.

## React Router DOM

- `useParams`: nos traerá los parámetros establecidos dentro de nuestra ruta relativa.


## Redux Hooks

- `useSelector`: nos permitirá extraer las propiedades que necesitamos de nuestro estado global previamente definido.
- `useDispatch`: nos va a proveer de la función de dispatch que se encuentra ligada a nuestro estado global en el Provider de Redux.

## Hooks Personalizados

Los Hooks personalizados nos permiten mantener la encapsulación de varias Hooks en una función, esto nos permite que un Hook sea reutilizable con un código mucho más mantenible teniendo los Hooks Centralizados.

La idea principal se basa en hacer uso de varios Hooks (o los que necesitemos) dentro de una función con un proceso repetivivo que estará asociada por medio de modulos a otros componentes que la así la requieran.


```jsx
function Example(){
    const {id} = useParams();
    const character = useSelector(state => state.character);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterFromApi(id));

        return () => {
            dispatch(cleanCharacter(id));
        }
    },[]);

    return character;
}
```


## useSelector

En React sobre Redux cumple la función que haría la función `mapStateToProps`.

```jsx
function Example(){
    const character = useSelector(state => state.character);
    {...}
}
```
## useDispatch

En un App de React podemos hacer uso del mismo para tomar de un `Store` establecido en un `Provider`, el valor equivalente a la función dispatch.
NO cumple la función de `mapDispatchToProps`. Aquí obtenemos directamente el dispatch.

```jsx
function Example(){
    {...}
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacterFromApi(id));
        return () => {
            dispatch(cleanCharacter(id));
        }
    },[]);

    {...}
}
```


## useReducer
Este Hook nos permite generar estados complejos con control de Acciones. maneja el acceso a el valor y a una función dispatch que según el objeto enviado como argumento, este recibirá en su ejecución un comportamiento previamente establecido.


```jsx
const initialState = {
    count:0
}

const reducer = (state,action) => {
    switch (action.type){
        case 'INCREMENT':
            return {...state, count: state.count + 1}
        case 'DECREMENT':
            return {...state, count: state.count - 1}
        default:
            return state
    }
}
function Example(){
    const [count, dispatchCount] = useReducer(reducer, initialState);
    
    return (
        <>
            <p>{count}</p>
            <button
                onClick={() => dispatchCount({type:'INCREMENT'})}
            >Incrementar</button>
            <button
                onClick={() => dispatchCount({type:'DECREMENT'})}
            >
                Decrementar
            </button>
        </>
    )
}
```