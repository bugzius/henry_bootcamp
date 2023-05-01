# Testing

- Contruir un  testing básico para funciones de JavaScript
- Mantener un funcionamiento más estable en nuestra aplicación.
- Contruir una App con TDD (Test Driven Development)

- Testing con JEst
- Testear código asincrono con hooks
- Supertest

## Testing con Jest

### Unit testing
Se trata de test unitarios que se involucran e incorporan a nuestro sistema de testing de la siguiente forma:

- Debe ser automátizado.
- No debe depender de otro test para funcionar.
- No importa el orden en que los ejecutemos, siempre deben de funcionar correctamente.
- Siempre retornan el mismo resultado.
- Con código Legible a la vista.
- Se encarga de una sola cosa lógica de nuestro sistema.

### Relación tiempo - cantidad de trabajo

Se suele tener un concepto con el realizar `testing` en nuestra aplicación desde que iniciamos, ya que suele tomar más _**tiempo**_ de lo que si comenzamos a realizar nuestra Aplicación sin los `tests`.

Lo importante aquí es qué tanto lo necesitamos y qué tanto nos beneficia en relación a qué tan grande es nuestra Aplicación.

El dilema aquí es que iniciando vamos a usar mucho más tiempo estructurando los tests a comparación de si no los hiciesemos, pero a lo largo del tiempo que vamos construyendo nuestra aplicación el código se hace más grande y más dificil mantener, Aquí es donde toda nuestra estructura de `tests` entra a ahorrarnos muchisimo tiempo en debugear nuestro código.

### Test Driven Development

Se basa en una forma de ir construyendo nuestra aplicación de la mano de los `tests`.

1. Crear un test para que no pase nuestra función.
2. Crear el código para que lo pase.
3. Refactorizar nuestro test.

Este es un ciclo, y debe de llevarse a cabo para mejorar cada vez nuestro test y ser más específicos.

### Jest

Jest es un framework para testing completo que no necesita de librerías externas para funcionar.

## Comandos de producción

- start: Este es un comando de script que se debe de situar en nuestro package.json cuando nuestra aplicación ya se encuentra en producción para que se inicie.


## ¿Cómo ejecutar los tests con jest?
Para ejecutar nuestros test, solo basta con ejecutar el comando `jest`, pero debemos de asignarlo a un script en nuestro `package.json`.

```json
{
    "scripts": {
        "test": "jest",
    },
}
```
Pero hay una cosa, _** ¿cómo se entera este comando donde están nuestros `tests`? **_, pues debemos de crear archivos con cierta nomenclatura. los archivos deben de tener dos condiciones, La primera es que debemos de contener los archivos _javascript_ dentro de un directorio llamado `tests` y los archivos deben de tener la extensión `name.test.js`. De esta manera se conoce cuáles archivos son los que contienen los tests.

_**Datos Importantes al momento de escribir los tests:**_ Es importante tener en cuenta el uso de estos dos comparadores -> `.toBe()`, .`toEqual()`, el `.toBe():` se usa para valores de tipo primitivo, `.toEqual():` para comparar valores que se reciben por referencia.


## Matchers  en Jest
Son dichas funciones que nos permiten definir qué debemos de esperar frente a el resultado del `expect`.

- `toBe()`: igualdad exacta.
- `toEqual()`: Compara valores internos por propiedad o por posición. Para valores no primitivos.
- `toBeNull()`, `toBeUndefined()`.
- `toBeTruthy()`, `toBeFalsy()`: comparan si el valor es _truthy_ o _falsy_.
- `toBeGreatherThan()`, `toBeLessThan()`: Si el valor es menor o mayor que...
- `toBeCloseTo()`: valida si un número es cercano a... Normalmente por valores decimales.
- `toContain()`: verifica si un arreglo contiene un elemento.

## Running Options

Son valores que nos permiten condicionar el cómo se deben de ejecutar las funciones de nuestro test.

- `it()`: Para describir test unitarios.
- `xit():` Para skipear un test unitario, es decir; se ejecutar pero no se toma en cuenta para el resultado final del test.
- `describe():` Nos permite agrupar test unitarios dentro de una misma temática.
- `xdescribe():` Nos permite skipear un grupo de tests.
- `it.only()`: Para que unicamente se ejecute dicho test.

## Código asincrono para nuestros test

Manejar código asincrono con jest debe ser posicionado de la mejor forma, ya que no todas las funciones que se reciben como argumento toman el código sincrono.

Los `expects` que usamos para comparar los valores únicamente se usan cuando ya tenemos el valores, es decir; no podemos desde el expect capturar el código sincrono, si no que debemos de hacerlo desde afuera de el `expect`.

Es decir sobre la función argumento que recibe nuestro test unitario, y desde allí manejar la promesa para que cuando nos retorne un valor realizar los `expects` que necesitamos.

```javascript
describe('la promesa', () => {
    it('Se debe de resolver en OK', () => {// En esta función manejamos la asincronía.

        promisifiedFunction().then((value) => {
            expect(value).toEqual('OK');
        });
    });
});
```

De esta manera cuando la promesa se ha resuelto ahí sí validamos la resolución de la misma.

> Hay que tener en cuenta que si la promesa tarda más de 2s en ejecutar el expect, jest no lo tomará como parte del test.

Para solucionar el inconveniente de la nota anterior podemos hacer uso de código asincrono con `async await`.

## Hooks en Jest

- `beforeAll(() => {}):` Se ejecuta antes de todos los tests.
- `beforeEach(() => {}):` Esta se ejecuta antes de cada test.
- `afterEach(() => {}):` Se ejecuta despues de cada test.
- `afterAll(() => {}):` Se ejecuta despues de todos los tests.

## SuperTest

Permite testear una aplicación sin levantar manualmente nuestra aplicación con el servidor. _**Supertest**_ realiza una implementación autocontenida para testear las `request` de nuestra aplicación.

Se usa para testear un las `request` de nuestra aplicación con un servidor de **express**.

```js
const request = require('supertest');
const server = require('index.js');

describe('El servidor', () => {//Describimos un grupo de test unitarios
    it('Retorna un statuscode 200 a GET "/"', async () => {//Tomamos la función de forma asincrona
        const res = request(server).get('/');// Supertest nos provee request para asignarle un objeto de servidor de express.
        expect(res.statusCode).toEqual(200);// Después de que llegue la respuesta, ejecutamos el expect.
    });
});
```

### Evaluar con supertest el cuerpo de la respuesta

Lo hacemos obteniendo el objeto de respuesta que nos entrega la promesa resuelta de la request que hemos realizado con supertest.
