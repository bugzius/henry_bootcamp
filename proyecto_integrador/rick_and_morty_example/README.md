## Al Final Estarán la Credenciales de Ingreso!!!

# Rick and Morty - Proyecto Integrador

Esta app se creó con el propósito de aprender y tener una vista más amplia de lo aprendido en el transcurrir del Bootcamp SoyHenry hasta al módulo 2, el cual Llega con conocimientos hasta _**React**_ y _**React Redux**_.

En este proyecto se hace uso de Las tecnologías bases de la web (_CSS_, _HTML_, _Javascript_) con diferentes Implementaciones, con Librerías principalmente.

El proyecto actual cuenta con varias secciones en donde se refleja el Uso de _React_ con la creación de componentes con Estado y sus ciclos de Vida, la Implementación de componentes condicionales, el uso de Hooks para el desarrollo de la Funcionalidad. _Redux_ con la lista de Elementos agregados a Favoritos, este nos permite manejar el estado por medio de los _reducers_ y _actions types_.

Para generar componentes reutilizables, me he basado en diferencias los tipos de Componentes, esto con el fin de hacerlos reutilizables sin realizar _**HardCode**_ (Con esta, perdería la escalabilidad y legibilidad nuestro código), Esto lo vemos muy reflejado en los _**Cards**_, los botones, además de la sección de que muestra las cartas, aplicando a la misma una adaptación con validación por medio de _**props**_.

Como se trata de un proyecto para la aplicabilidad de Conocimientos, he realizado el uso de **4** de las formas base de Aplicabilidad de estilos,
siendo este proyecto una combinación de estilos en linea, estilos globales, Modularización de Estilos (_**CSS Modules**_) y la conocida Librería `Styled Components`.

Este proyecto se basa en la renderización de Componentes basados en Rutas (o lo que serían paths), esto se logra gracias al manejo de `react-router-dom`, este nos ayuda a generar una interfáz rápida y manteniendo el Principio de lo que es una _**SPA**_ _Single Page Aplication_. Algo de lo que lograrán darse cuenta, es que cuenta con un Formulario Controlado por medio de Eventos, este nos permite validar si las credenciales son correctas para luego permitir el Ingreso a todos los apartados de la _**App**_, Pues gracias a dicha librería logramos que sean validadas las rutas y así mismo se encuentren "protegidas" hasta que el usuario no Ingrese credenciales validas, Dichas credenciales se almancenan en el _Session Storage_ de nuestro navegador.

Las rutas son:
```
/ [home]
/login
/about
/characters
/characters/:id
/favorites
```
`Si deseas Ingesar un hacer uso de la App, Ingresa los siguientes credenciales y podrás acceder, user:bugzius | password:SOYhenry12`.