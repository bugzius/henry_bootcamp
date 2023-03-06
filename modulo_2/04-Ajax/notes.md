# Ajax
- Identificar las tecnicas principales de AJAX
- Aplicar las tecnicas de ajax para procesar solicitudes
- Discriminar los métodos HTTP

* Recapitulación

En esta clase vamos a usar las técnicas aprendidas de HTML y Manipulación de Elementos del DOM, para traer información e ir generando elementos que vamos a mostrar.

## Ajax ¿ Qué es AJAX ?
Linea de Tiempo
1. Se inicia a usar javascript con navegadores como Netscape.
2. Se crea el estandar de ECMAScript.
3. Aparece AJAX, esto solucionaba el problema de que cada vez que queríamos algo diferente teníamos que traer toda la página.
4. Google Chrome es pionero en compatibilidad con su motor V8.
5. Primer Framework de Desarrollo frontend "MVC".

- Traditional Page LifeCycle: Se trata de una forma de Comunicación tradicional que se maneja en los Inicios de el desarrollo web. Este desde un servidor registraba los enlaces por los cuales se iba a solicitar un documento, si se quería que se cambiara algún valor teníamos que solicitar de nuevo al servidor el documento completo con los otros valores.
- Single page Aplication life cycle: Este ciclo de vida permite modificar los valores del documento sin solicitar nuevamente el documento, si no que por medio de ajax podíamos solicitarle a el servidor la información y traerla en formato AJAX.

- XML vs JSON
Son dos estandares de  formato en el que se trasmite la información. Son dos buenos estandares, pero ahora se usa más el JSON; es mucho más parecido a un Objeto de javascript. El XML usa una estrucutura de etiquetas.

- HTTP es un tipo de protocolo de comunicación que tiene Objetos.
- **Métodos Http**
Empezamos estableciendo el cómo debe de ser la comunicación entre Cliente y Servidor:
El cliente solicita por medio de una solicitud lo que quiere Obtener del Servidor, ya que el cliente puede solicitarle información al servidor. Pero este servidor debe encontrarse preparado para conocer cuál debe de ser su plan de Acción ante cualquier solicitud  para poder dar una respuesta, Pero este proceso no se realiza así nada más, si no que debe de existir un Protocolo (HTTP) para poder realizar esa comunicación. La información solicitada se envía en formato json.
- Métodos: POST [GUARDAR], GET [PEDIR], PUT [ACTUALIZAR], DELETE [ELIMINAR], Todos los métodos sine excepción siempre envía una respuesta sin importar los casos.

La respuesta que nos envía el método también tiene una estructura.
# Web API: son métodos que nos provee el navegador de los cuales el navegador se encargará de su proceso.

Javascript es Single Thread por lo tanto es sincrónico, entonces cual javascript accede a esas webapis para solicitarles un proceso, javascript no espera a que este elemento se termine de ejecutar, si no que más bien continúa con todas las tareas, y cuando termina recibe lo que procesaron las APIs en Orden del Callback Qeue.

# Fetch - Adelanto

¿Qué es Fetch?: Es una función que nos permite realizar solicitudes a servidores, A diferencia de AJAX (Que maneja Callbacks), fetch maneja o Retorna una promesa. Este procesa en su then nos permite acceder a la respuesta del servidor, pero esta respuesta no van a ser los datos que estoy solicitando, si no que será la respuesta del servidor pura en un Objeto.
