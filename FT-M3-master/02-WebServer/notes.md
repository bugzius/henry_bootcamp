# Web Server

Objetivos de la clase de hoy

- Construir un primer servidor funcional
- Definir API Rest
- Identificar Rutas en un Servidor

## Servidor Web

Un _**servidor web**_ es todo sistema que procese solicitudes y envíe respuestas comunicandose por medio de Protocolos de red.
- Cliente Servidor
```
          ->
- Cliente   Servidor
          <-
```
- Cliente: El cliente es el sistema que cumple el rol de realizar las solicitudes. (hace las `request`).
- Server: El servidor procesa las solicitudes y retorna respuestas. (envía `responses`).

Ambos son mundos distintos que únicamente se comunican por medio de Protocolos de red.


## Networks - Redes

Se trata de una conexión de Sistemas enlazados por medio de Protocolos para el envío de Información. Cuando realizamos una solicitud desde nuestro cliente, esta viaja por distintos sistemas hasta llegar a el servidor y de la misma forma al momento de el servidor enviar la respuesta.

## Protocolos.
Existen 4 fases Principales en las que el Modelo OSI se compone para el transporte de Esta Información en las que se ven involucradas, El cliente, las networks y el servidor.

1. Aplicación: Aquí es donde se encuentra el cliente y desde donde comienza la ejecución de Protocolos. En este caso el protocolo _**HTTP**_ que ya conocemos.
2. Transporte: Esta fase es en donde el protocolo _**TCP**_ cumple su función en conjunto con la siguiente fase. Para así asegurar que existe una ruta de Llegada a la cual enviar la solicitud.
3. Red: Es la fase en donde se define el EndPoint con el protocolo de _**IP**_.
4. Interface de Red: En este se usa el servicio de _**Ethernet**_ para al cumplir con todos los estandares esta solicitud sea enviada.

## Demo - Creación de un Servidor

### HTTP
Para la Creación de Métodos HTTP que reciban una respuesta, podemos hacer uso de un módulo de node que ya viene incorporado para la creación de un servidor web.

Debemos de Importar el Módulo `http` por medio de commonjs.

Hacemos uso de su método `createServer`, este va a solicitar como primer argumento una función para la recepción de Solicitudes http que se realicen sobre un puerto. Esta función de creación del Servidor nos va a proveer de un Objeto con métodos y propiedades de el Actual servidor creado. Uno de los métodos es `createServer(callback).listen(port, hostname)`, este va a recibir el puerto sobre el cual el servidor va a estar escuchando para recepcionar las peticiones además como segundo argumento solicita el `hostname` sobre el cual estará corriendo nuestro servidor.

De esta manera el Servidor ya se encuentra activo

```javascript
const http = require('http'); //Lo toma de node

http.createServer((req, res) => {
    //En este caso el servidor responderá sobre todas las rutas
    
    /* const value = 'Hello world server!';//Text plain */
    const value = [{id:1,'Jhon'},{id:2, name:'Steve'}];//Data Json

    //Direcciona la Información de la respuesta
        //Enviar texto plano
    //res.writeHead(200,{'Content-Type': 'text/plain'})//(status code, headers)
        //Enviar respuesta JSON
    res.writeHead(200, {'Content-Type':'application/json'});
    //Envía la respuesta
    res.end(JSON.stringify(value));
}).listen(3000,'localhost');//(Port, hostname)
```


De esta forma tenemos un servidor de node corriendo en el puerto deseado, desde aquí comienzan las bases de la creación de UN servidor. Pero a esto tenemos que agregarle validación de rutas y control de accesos.

Si desde una App de JavaScript usando `fetch` o `axios` o `ajax` realizamos peticiones sobre nuestro servidor que actualmente está corriendo, este lanzará un error de _**CORS**_, esto se debe a que nuestra aplicación no le está especificando qué usuarios o a qué tipo de peticiones le debe dar una respuesta.

Este error sumado a la validación por medio de parámetros para realizar entrega de respuestas según url lo vemos en este ejemplo.

```javascript
const http = require('http'); //Lo toma de node

http.createServer((req, res) => {
    // Así exactamente realizamos respuestas a todas las solicitudes
    //sin Importar de Dónde provengan.

    res.setHeader('Acces-Control-Allow-Origin','*'); 

    //req = request
    const { url } = req; //Accedemos a el parámetro URL de la request

    const usuarios = [
        {
            id: 1,
            username: 'Gustavo',
            email: "email@outlook.com"
        },
        {
            id: 1,
            username: 'armando',
            email: "email@yahoo.com"
        },
        {
            id: 1,
            username: 'pablo',
            email: "email@email.com"
        }
    ];

    //Validación por medio de la URL - Ya tenemos enrutado en nuestro servidor
    if(url === '/usuarios'){
        res.writeHead(200, {'Content-Type':"application/json"});
        res.end(JSON.stringify(usuarios));
    };

}).listen(3000,'localhost');//(Port, hostname)
```

## Serialización - Deserialización

El proceso por el cual la Información contenida en Objetos viaja por medio de la conversión de datos para que sean transportados sobre el flujo de Información.

Un proceso de ejemplo podemos verlo como: tomamos valores de un formulario, y los enviamos por medio de fetch al servidor, el servidor los serializa en un conjunto de Bytes para enviarlos a nuestra base de datos.

Otro ejemplo podemos verlos al consultar desde nuestro Cliente a el servidor; el servidor consulta los valores y los serializa para entregarlos sobre la `request` y ser convertidos a Objeto para que esta información se logre usar de forma correcta.

## API REST - (REpresentational State Transfer)

Es una arquitectura o forma de Diseñar el servidor de una Aplicación para proveer manejar la Información del mismo y que responda sobre métodos del protocolo _**HTTP**_ en sus request.

## RESTful API

Este tipo de arquitectura obtiene dicha nomenclatura debido a que la misma Cubre todos los métodos para las funciones de un `CRUD` (Create, Read, Update, Delete).