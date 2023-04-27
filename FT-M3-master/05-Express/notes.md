# Express

Se trata de un Framework de NodeJS para la creación de Servidores de forma más sencilla y flexible.

`Express` entre muchas otras cosas nos permite manipular de una forma más organizada _**(Modularizar)**_ nuestro código de Servidor para rutas relativas precisas, Es decir; nos ahorra el algoritmo de validación para saber qué debe de realizar el servidor al ser enviada una `request`.

A pesar de que este Framework nos facilita la creación de servidores, no tiene relación con una forma específica de modularizar nuestro proyecto. Así que debemos de cuidar el cómo organizamos nuestro código.

## Instalación

```cmd
prompt=> npm i --save express
```

## Uso Principal

Para La creación de un servidor vamos a requerir nuestro módulo previamente instalado y ejecutaremos dicha función, esta nos retorna un Objeto con los datos de la creación de un servidor, Al cual vamos a configurar por medio de métodos para Aplicar el puerto sobre el cual va a escuchar al igual que el hostname (por defecto es nuestro localhost) y demás de otras Configuraciones.

```javascript
const express = require('express');

const app = express();

//Recibe el puerto al cual va a escuchar nuestro servidor.
app.listen('3001');
```

## Uso de Métodos HTTP

Para el uso de estos métodos, el servidor se compone de un Objeto al cual podemos ir agregando métodos con los nombres de los tipos de solicitudes existentes en el Protocolo de Comunicación de Red _(GET,POST, PUT, DELETE, PATCH)_.

En la invocación de alguno de los métodos mencionados en el párrafo anterior, debemos de hacer uso como primer argumento de un valor de tipo _string_ que referencia el `path` al cual se va a crear dicha ruta.

Como segundo argumento va a solicitar una función `callback` que nos va a permitir hacer uso de dos objetos por medio de sus parámetros en el siguiente orden `(req,res) => {}`.

Podemos validar la información de la `req` y podemos configurar la respuesta por medio de el Objeto `res`.

```javascript
const PORT = '3001';
const express = require('express');

const app = express();

//Control de COnfiguración de Rutas
app.get('/', (req,res) => {
    //Envío de respuesta con Header para texto plano
    res.send('Bievenido a la Ruta Home');
});


app.listen(PORT, () => {
    console.log(`Server run in ${PORT}`);
});
```

## Comodines - Routing - Rutas Relativas

Lo que veremos es la creación de rutas por medio de comodines para indicar particularidades de Rutas.

- `/ab?cd`: Nos permite mantener un caracter de forma opcional en la ruta. estos son los casos en los que la ruta especificada entra de forma correcta en la validación:
    ```
        /acd ----> true
        /abcd ----> true
    ```
- `/ab*cd`: Nos permite tomar una ruta sin impedir la cantidad de veces que se repita de forma consecutiva un caracter. En este caso la letra antepuesta a el signo (_b_) se puede repetir muchas veces o una sola vez, Casos de ejemplo:
    ```
        /abcd  ----> true
        /abbbbbcd  ----> true
        /abbcd   ----> true
    ```

## Middlewares

Se trata la ejecución de cierta funcionalidad que se invoca antes de algún proceso objetivo especifico que estemos realizando.

Se trata en otras palabras de una ejecución que va a estar en el medio de un proceso.

`Express` contiene en su ejecución de Stack una serie de invocaciones de _**Middlewares**_ al cual podemos crear nuevos _**Middlewares**_ y así lograr que algo se ejecute antes de que sea tomada la respuesta por nuestro enrutador.

Para la creación de _**MiddleWares**_ en `Express` vamos a hacer uso de `app.use()`, este método se usa generalmente para la creación de _**Middlewares**_ o creación de enrutadores.

- Creación de Middleware

```javascript
app.use('/', (res,req,next) => {
    console.log('Desde mi middleware')
});
```

_**Aspectos a tener en cuenta**_:
    - Es necesario que la creación de estos _**Middlewares**_ se realice al inicio de nuestro documento de _JavaScript_ ya que el orden de asignación sí importa. Evitar generar una ruta y luego la creación de nuestros _**Middlewares**_, ya que estos no serán tomados.

_**Path opcional - Según necesidad**_:
    Según nuestra necesidad de Invocación del _**Middleware**_ podemos realizar la asingnación del argumento de (`path`); Si no asignamos `path`, el _**Middleware**_ se va a ejecutar en todas las `request`, si queremos que el _**Middleware**_ se ejecute en una ruta especifica debemos de asignarla como argumento.


```javascript
    //Sin path - Se ejecuta en todas las request
    app.use((req,res, next) => {
        console.log('En todas las rutas');
        next();
    });

    //Con Path especifico - Solo se va a ejecutar en dicha ruta
    app.use('/home',(req,res, next) => {
        console.log('En la ruta de Home ');
        next();
    });
```

## Router

Se trata de un Objeto que nos va a permitir encapsular / modularizar cierto conjunto de Rutas relacionadas para ser usadas en nuestro servidor.

Cuando nuestro código comienza a escalar se hace necesario tener abstracciones relacionadas para realizar una buena organización.

Existe un concepto el cual se Llama el `Router`, este nos permite generar un conjunto de rutas que serán usadas para canalizar de forma más sencilla por medio de rutas la busqueda de la ruta en `request`.

Aquí en este momento es en donde Reluce nuevamente el método `app.use('path', callback || router)` de nuestro servidor.

El Framework de express cuenta con un Método para generar Objetos `Router`.

```javascript

//index.js  -->
const usersRouter = require('./routerUsers.js');

app.use('/users', usersRouter);


//routerUsers.js
const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/:id', (req,res) => {
    const {id} = req.params;
    res.send(`En la ruta /users con el id: ${id}`);
});

module.exports = usersRouter
```

## Obtener Información de la Request

- _**Rutas Relativas**_: Cuando queremos identificar por medio de rutas un elemento dentro de una lista, Ej: queremos que el servidor nos entregue un usuario por medio del _**id**_ del mismo. Haríamos uso de las rutas relativas. Estas funcionan de la Siguiente manera:

    Ej:
    ```javascript
    app.get('/users/:id', controlador)// --> obtenemos el valor con el parámetro de nombre id para los valores que se encuentren luego de la ruta users
    ```
    De esta forma podemos crear rutas relativas que invoquen un _**controlador**_ sobre la misma sin espeficar uno a uno las rutas.

    Los valores de estas rutas relativas podemos obtenerlos por medio de los parámetros de la `request` que nos envía por medio de el callback nuestro framework.
    Estos parámetros podemos acceder a ellos desde el `callback`
    ```javascript
        app.get('/users/:id', (req,res) => {
                const { id } = req.params; //Es un Objeto que contiene los parámetros.
                res.send('En la ruta /users/' + id);
            });
    ```


- _**Query params**_: Los queryParams no son nada más que valores que podemos indexar en una URL. No pertenece o cambia el comportamiento de la ruta relativa, Es decir; nuestro servidor no los tiene en cuenta al momento de validar una ruta, pero sí que podemos acceder a ellos.

    ```javascript
        app.get('/users', (req,res) => {
            const { id } = req.query; //Es un Objeto que contiene los argumentos.
            res.send('En la ruta /users?id=' + id);
        });
    ```

- _**Método post - Body en Headers**_: desde nuestro servidor con `Express` podemos acceder a valores como el body que se encuentran al pie de un header de petición. 

    Este body se envía en formato _**JSON**_.

    Accedemos desde el objeto de la `request` dentro del callback y dentro de la propiedad `req.body`, de esta manera no tenemos la información en ninguna parte de nuestra url y ocultando la información recibida.

    Node en conjunto con el framework no puede interpretar código de _**JSON**_, entonces podemos hacer uso de un Middleware para parsear todos los valores recibidos en formato _**JSON**_ para así mismo poderlos hacer accesibles desde nuestro servidor de express.

    ```javascript
    const express = require('express');

    const app = express();

    //Creamos el middleware
    app.use(express.json());//Parsea todas las entradas recibidas en formato JSON

    //Definimos la ruta
    app.post('/users', (req,res) => {
        const dataJson = req.body;//Tomamos el body de la request

        res.json(dataJson);//Respondemos con Formato JSON 
    });
    ```