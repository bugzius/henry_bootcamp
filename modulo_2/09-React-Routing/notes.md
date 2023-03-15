# SPA (Single Page Application)

Este principio se basa en que el usuario pueda navegar en toda nuestra aplicación sin que la página se recargue.

Esto lo vamos a lograr con la siguiente herramienta.

# React Router

Es una librería que podemos usar para _`React`_ que funciona de manera declarativa, La cual nos va a proveer de un Componente que va a embolver a toda nuestra Aplicación en un componente llamado `<Route />` el cual nos va a permitir setearle una ruta para así mostrar componentes según la Ruta que le especifiquemos.

## History API

El _**history.api**_ hace referencia a el cómo nuestra aplicación recuerda por cuáles rutas ha navegado. En el navegador podemos hacer uso de una _`API DOM`_ que nos permite acceder a este historial, el cual es _`window.history`_, esta API nos provee de métodos para navegar como si tuviesemos una **double linked list (Lista doblamente enlazada)**, es decir; podemos retroceder, avanzar e incluso manipular el historial de navegación.

# Routing Config

Pasos de configuración:

1. Instalación `npm install --save react-router-dom`
2. Para el uso de _**React Router**_ poseemos dos maneras de ejecución, las cuales se basan en cuál tipo de Componente que va a abrazar toda nuestra aplicación queremos que sea usado, los cuales son:

    - `<HashRouter />:` este componente nos va a agregar un hash al inicio del path de nuestra URL. Es la forma inicial en la que se realizaba el uso de React Router para tener esta funcionalidad de _**SPA**_.
    - `<BrowserRouter />:` Esta forma es la más actual y a diferencia de el otro componente no nos genera un _hash_ inicial pero nos añade una configuración externa para su uso. Las ventajas es que no tenemos ese hash inicial a nuestra URL.

```jsx
//Instalación
npm i react-router-dom

//Utilización
import {HashRouter, Route} from 'react-router-dom';

ReactDOM.render((
    <HashRouter> //Envolvemos a nuestro Componente en su renderización Root en el Componente del Router
        <App />
    </HashRouter>
    ),
    document.getElementById('root')
)

```

## <Route />

Este es un componente que nos permite establecer las configuraciones que se van a usar para identificar cómo y qué rutas deben de renderizar un componente.


```jsx

//Configuraciones iniciales

<Route 
    strict /* Si la ruta debe ser exacta para que pueda ser renderizado o no, Tiene en cuenta hasta los caracteres sobrantes del path Ej: "google.com/user/" (La barra final).  */
    sensitive /* Propiedad para que el path sea case Sensitive */
    path="..." /* URL o Array de URL'S que se van a comparar con el URL actual para validar si deben o no de Renderizar el componente */
    exact /* Si el path debe de coincidir por complete y no unicamente su inicio */
    component={component}/* El componente que queremos renderizar, De esta manera no es posible entregarle parámetros al Componente */
    render={() => <Component />} /* Cuando queramos establecer que se renderice un componente con props */
    children={() => <Component />} /* Funciona similar al render */
>
    {...}
</Route>
```

# Switch

Es un componente de react-router-dom que evalúa los paths generados con _`route`_ y el primero que coincida será con el que se va a quedar. Esto nos permite generar un componente por defecto para cuando la ruta solicitada no exista.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector('root'));
root.render(
    <>
        <HashRouter>
            //Evalúa y se queda con la primera ejecución de Route
            <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                
                <Route strict path="/home">
                    <h1>Home</h1>
                </Route>
                
                <Route path="/about">
                    <h1>About</h1>
                </Route>
                
                <Route path="/clients">
                    <h1>Clients</h1>
                </Route>
            </Switch>
        </HashRouter>
    </>
)

```

## Link Component - React router dom

Nos permite crear un _Link a_ sin estilos por evento que va a permitirnos setear una ruta para que Nuestro componente evalúe nuevamente en qué ruta se encuentra y qué debe de renderizar.

```jsx
{...}
render(
    <div className="nav-bar">
        <h2>Barra de Navegación</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ejemplo">Ejemplo</Link>
    </div>
)
```

## `<NavLink />`

Este componente realiza el mismo proceso que `<Link>` pero nos provee de props que vamos a poder usar para establecer estilos para cuando algo suceda con ese botón y/o elemento HTML, Ej: Cuando estemos situados en esa ruta se van a aplicar los estilos con una propiedad `activeStyle _(Permite definir un estilo el cual lo recibe por medio de un Objeto tal y como un inlineStyle para cuando el link se encuentre Activo)_`, de la misma forma podemos hacer pero con `activeClassName`.

Este componente por defecto establecerá una clase `.actived`, entonces si no la establecemos pues no existirán estilos que aplicar para cuando el componente se encuentre activo. Por el contrario si le establecemos estilos de alguna forma [`activeClassName`,`activeStyles`] este valor de clase por defecto será reemplazado con los estilos establecidos.

También en este componente podemos hacer uso de la propiedad **exact** para que únicamente le aplique los estilos cuando el path sea exacto y no cuando coincida en algo con el path actual.

## Callback por medio del Componente `<Route />`;

Cuando definimos un Route que va a capturar una ruta, ya sea exacta o no, le debemos de renderizar un Componente, y podemos hacerlo de estas 4 formas, de las cuales 2 de ellos nos permiten extender la funcionalidad de nuestro Componente `<Route />`;

Vamos a nombrar estas dos formas, las cuales desde su callback nos permite acceder a un Objeto con las propiedades de _match_ el cual nos va a proveer de Información sobre la ruta en el Componente Route. También una propiedad llamada _location_ que viene de `window.location` que nos provee información de locación que tiene en ese momento nuestra **_SPA_**. Al igual que una propiedad llamada _history_, el cual pertenece a una propiedad de `window.history` que nos da propiedades y métodos para la gestión de la trazabilidad de rutas que se han solicitado.

1. La propiedad _render_ del componente, el cual recibe un _**callback**_ y lo que dicho _**callback**_ retorne será el componente que este va a renderizar.

    ```jsx
        import React, { Fragment } from 'react';
        import ReactDOM from 'react-dom';
        import {Switch, HashRouter, Route, NavLink, Link} from 'react-router-dom';

        const root = ReactDOM.createRoot(document.querySelector('#root'));

        root.render(
            <Fragment>
                <HashRouter>
                    //Menu de Navegación
                    <div className="nav-menu">

                    </div>

                    //Router
                    <Switch>
                        <Route
                            exact
                            path='/'
                            render={(props) => {
                                //Desde este callback tomaremos el objeto con las propiedades Indicadas
                            }}
                        > //1ra forma de Enviar componentes al Route para renderizar
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    ```

    _¿Cómo podríamos hacer uso de esto?_, Por medio de los URLParams que tomamos de la ruta para setearle un valor a nuestro componente que queremos renderizar. En JavaScript vanilla esto equivale a acceder a `window.location.search` el cual nos provee de lo que se encuentra después del _path_ para posteriormente con un Objeto `new URLSearchParams(search)` obtener los parámetros que están contenidos en dicha url.

    Pues en _**React Router**_ podemos acceder por medio del Objeto que el callback nos provee para así acceder a la propiedad _match_ en su propiedad params, es decir; en (`props.match.params['nameParameter']`).

## Hook useParams

Este `hook` nos permite tomar los parámetros que hemos seteado en el Path del _**Route**_.
De manera Interna este hook lo que hace es tomar el hash y lo va a evaluar con las Routes que tenemos seteadas, para así tomar la forma de los parámetros por orden de asignación según el path.

- Uso de Hook useParams
    ```jsx
        /* Route registrado: /about/:id/:ciudad -> Un path con una ruta relátiva que pertenece a un parámetro.

        path:#/about/1/londres -> {id: "1", ciudad: "londres"} */
        
        //Uso
        const Home = (props) => {
            const params = useParams(); //Retorna el Objeto con los parámetros
            return ({...})
        }
    ```

    Nos va a retornar un Objeto según el nombre y orden de los parámetros establecidos en la ruta.

- **useHistory:** cumplen la misma función de Navegación que nos retorna el Route en su callback por medio de render pero con la referencia correspondiente al nombre del Método.
- **useLocation:** cumplen la misma función de Navegación que nos retorna el Route en su callback por medio de render pero con la referencia correspondiente al nombre del Método.

# Nested Routing

Hace referencia a el Switch que pertenece a una versión anterior de React Router.

# `<Prompt/>`

Se trata de una ventana que va a permitir preguntar al usuario si quiere moverse o no de "ventana" y mostrarla en pantalla por medio de una propiedad `when={condition}` que estará escuchando cuando cambie de valor para validar si debe mostrarse o no. También podemos de asignarle una propiedad con el Mensaje `message={string_message}`.

# `<Redirect />`

Es un Componente que nos permite redirigir al Usuario a un path en particular, lo cual reemplazará todo el path actual por el solicitado.

Este cuenta con 2 propiedades que van a permitirnos especificar las opciones, también setear las propiedades esenciales de las rutas _(exact, strict, sensitive)_.

1. `to={object || string}`: A esta propiedad le podemos asignar un Objeto con las siguientes propiedades `{pathname:"", search:"", state:""}`, aunque también podemos asignarle unicamente un string con el path que queremos redireccionar.

2. `from=""`: Nos permite especificar de qué ruta viene el usuario para validar si debe o no de Redirigirlo al `to`.

Si el usuario ingresa a de `from={path}` lo redirigue directamente a `to={path}`.