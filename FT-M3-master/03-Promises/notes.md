# Promises
- Diseñar código asincrono
- Diferenciar código sincrono del asincrono.
- Analizar la Estructura de una promesa.
- Construir soluciones a problemas asincronos.

# Promesas

Una promesa representa una respuesta que puede o no ser siempre la misma, por ello debemos de gestionar los diferentes casos que esta misma pueda presentar.

El concepto nace de una Incertidumbre, el cual podemos intuir mientras que todo sale bien que sea lo que esperamos, pero no podemos estar 100% seguros de que esta siempre retorne lo mismo, también se pueden generar errores por cuestiones externas a nuestra Aplicación.

## Ejecución sincrona
Una operación sincrónica es en donde se ejecutan una serie de pasos en fila, en donde el siguiente paso espera a que el anterior finalice para que este comience a correr.

JavaScript es un leguaje Single thread: es un lenguaje sincrono.

## Ejecución Asincrono

A diferencia de el código sincrono, este permite que más de un proceso se esté ejecutando al mismo de tiempo.
No debe de esperar a que el proceso anterior termine para continuar con el siguiente.


# Promises en JavaScript

Las Promises son Objetos que permiten gestionar el ciclo de Vida de Una respuesta Futura.

Estas mantienen un estado que puede tener algunos de los siguientes valores:

- pending: Cuando se está procesando la promesa.
- fullfiled: Cuando la promesa tiene una respuesta satifastoria.
- rejected: El estado de la promesa cuando no se cumplió.

Este estado cambia una sola vez, puede ir desde `pending` a `fullfiled` o de `pending` a `rejected`.

```                                                                   > fullfilled
Este es el ciclo de vida que va en el siguiente orden: pending -> /-> rejected
```
Una vez que una promesa finaliza, ejecuta según sus validaciones internas alguno de sus _**handlers**_ correspondientes.
Los handlers son funciones.

## Handlers Promises

Son funciones que se ejecutan cuando se entrega una respuesta desde la promesa.

- .then(callback, callbackRejected): Recibe un callback que va a tomar el valor que retorna la respuesta de la Promise cuando se ha Cumplido. Nos permite continuar anidando debajo más métodos `.then()` para que cuando el anterior `then` finalice continúe con el siguiente.
- .catch(): Recibe un callback que se va a ejecutar cuando la respuesta de la Promise no ha sido satisfactoria.


# Resumen

- Las Promesas son el resultado de un proceso asincrono; Ejecuta una función cuando ha Obtenido una respuesta.
- El status de una promesa nos permite identificar si se ha o no finalizado una respuesta.
- Pending es el estado de la promesa cuando aún no se ha entregado una respuesta.
- Fullfiled es el estado de la promesa cuando ha sido resuelta.
- Rejected es el estado la promesa cuando la respuesta de la misma no ha sido satisfactoria.
- Value es al que podemos acceder por medio de el handler cuando la respuesta ha sido satisfactoria.
