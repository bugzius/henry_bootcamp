# 06 - Async Await

- Está relacionado con las promesas.


- Identificar una función generadora.
- Nueva alternativa para código asincrono.
- Alterniva a el manejo de Errores.

Async await nos va a permitir simular la sincronía de JavaScript. va a manejar su propia asincronía entre las funciones asincronas que contiene esto para permitir generar un espacio entre que se termina una tarea.

## Función generadora

Las funcionas generadoras nos permiten generar objetos `Iteradores`, precisamente este iterador lo que hace es que controla la ejecución de la función cada vez que se usa la palabra reservada _**yield**_.

- Cada una de sus ejecuciones va a retornar algún valor.

Las funciones generadores se generan de la siguiente forma `function* name(){}` el **_*_** símbolo nos permite identificar una función generadora.

- yield: Nos permite retornar un valor en cada ejecución de función generadora.
- return: Finaliza la ejecución total de la función generadora.


## Funcion asincrona
La función asincrona nos permite controlar otras funciones que retornan promesas para lograr almacenar los valores que retorna la promesa.

Ejemplo:
```javascript

const miFunction = async () => {
    const values = await axios.get(_URL_); //Espera a que la promesa retorne una respuesta.

    console.log(values)
    console.log('Final');
};
```

La ejecución de una función asincrona retorna una promesa. Es azucar sintactico para las promesas

## Try Catch

Es una estructura de código que nos va a permitir controlar los errores de la ejecución de un bloque de código de forma automática.


```javascript
const function = async () => {
    try{
        const values = await axios.get(_URL_);// Si este código en su ejecución tuvo un error, EL catch lo toma
        console.log(values);
    }catch(error){
        console.log(error)
    }
};
```

## Handler Route

Un handler es una función que se va a ejecutar cuando algo suceda.

En nuestro caso usando usando la creación de servidores por medio de `express` hacemos uso de estos handlers cuando una de las rutas se ha encontrado con exito. Si en el `handler` necesitamos proveer valores ya sea a una vista o a una respuesta de datos del servidor, Se recomienda hacer uso de `controllers`.

## Controllers

Los `controllers` es un concepto de función modularizada que se usa para realizar conexiones a las bases de Datos de forma `asincrona` para así tomar desde nuestro `Handler` algún tipo de Error que se pueda generar.


### Incorporación de Handler y controller

```javascript
const express = require('express');

const router = express.Router();

router.get('/users', async (req,res) => { //Este es el handler
    try{
        const data = await controllerData();// Obtenemos datos por medio de el controller que está conectadose con la base de datos
        res.status(200).json({
            data
        });
    }catch ({message}){
        res.status(500).json({error: message});
    };
});
```

En este ejemplo Generamos la ruta y definimos el `handler` que se va a ejecutar al momento de ser llamada dicha ruta, Adentro de el `handler` solicitamos por medio de nuestro `controller` la data de forma asincrona para así obtener los errores y también tener en cuenta que la base de datos tarda en entregarnos los valores.

*A tener en cuenta:* No es necesario que el controller que generemos haga uso de un `try catch` y controle los errores desde allí, si no que directamente lo controlamos desde el end point o punto más alto en el que se está controlando toda nuestra lógica, es decir; posicionar de forma correcta un solo `try catch` según lo veamos necesario.