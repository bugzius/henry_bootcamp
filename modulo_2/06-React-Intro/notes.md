# React

Es una librería de javascript de características declarativas. Es eficiente y flexible, sirve para construir interfaces de usuarios.
Es de código abierto, lo cual nos permite acceder a el cómo funciona y también esto nos permite realizar issues y/o Pull Request.

React es una librería basada en componentes. Se trata de _"plantillas"_ de Elementos HTML por medio de _*JSX*__ para ser reutilizables.

## Declarativa e Imperativa
- Imperativa: Hace referencia a que debemos de especificarle con procesos lo que nuestro código debe de realizar.
- Declarativa: De este usamos funciones o Herramientas que ya realicen un trabajo por nosotros.

* Renderizar: lo que se muestra en pantalla.

## Virtual DOM
Se trata de una del DOM Guardada en memoria computada por javascript que permite realizar cálculos sin cargar el DOM Real. En el caso de React el virtual DOM lo usa para estar al tanto sobre DOM Real y comparar las dos Vistas Y realizar unicamente los cambios necesarios.

## Componente

Es una forma de Unificar una entidad con estructuras HTML, CSS y JavaScript personalizables. Nos permite hacer reutilización del Mismo código. Es Importante modulizar el uso de componentes hasta su máxima expresiónm usando cada componente para un solo funcionamiento.

* CDD - Desarrollo manejado por Componentes.
* SRP - Single Resposability Principle: Principio de Responsabilidad única, Se basa en descomponer los componentes por funcionalidad única pero esto no evita la reutilización del mismo.

### Composición de Un Componente

* Props
Elementos variables dentro del componente. Los valores que se le pasan a el componente.

* State
Representan un comportamiento interno del componente.

* Virtual DOM -> DOM
Se genera y se anexa a el Virtual DOM para luego impactar en el DOM Real.

## JSX
### ¿Cómo se generan estos Componentes?
Es una extensión de _javascript_ que nos permite crear componentes con esta sintaxis, la cual es muy similar a __*HTML*__.
Es un paquete para el uso de un motor de plantillas llamado _*JSX*__, Este nos permite hacer uso de la Integración de _HTML_ y _Javascript_.
Este código de _*JSX*__ podemos asignarlo a variables.
__*JSX*__ se transpilará a llamadas de _React.createElement([tagname], [props], [content])_ por medio de la Herramienta de _**Babel**_.

### Agregar los valores al Virtual DOM -> DOM Real
* React DOM: Debemos de importar _React DOM_ para usar la instancia única de el **Virtual DOM** para de esta manera acceder a los métodos que este nos provee como el de _**ReactDOM.render(element, entrypoint)**_.

## Usar React

1. Importar con etiquetas script React - CDN
    ```html
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script  src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    ```
    De esta manera nuestro javascript ya puede acceder a los paquetes obtenidos: **_(React, React DOM)_**
2. Por medio de nodejs instalando los paquetes.

**Nota:** El Objeto del ReactDOM solo existe y/o existirá una vez.

## Interpolar Javascript con .jsx

Nuestros archivos de javascript extensión en su base son javascript, pero nos permite hacer uso en pocas palabras de código _JSX_. Si queremos generar componentes o elementos con valores dinámicos y si los creamos por medio de _JSX_ debemos de tener una forma de "combinar" o en este caso Interpolar los dos formatos de código:

```JSX
const name = 'David';
const element = <h1> Hola!, {name}</h1>;
```
* React no nos limita a no Usar JavaScript.

## Componentes Funcionales
- Formas de Generar componentes:
    1. Function Component
    ```JSX
    function Welcome(props){
        return <h1>Hello!, {props.name}</h1>
    }
    ```
    2. Class Component

    ```JSX
    class Welcome extends React.Component{
        render(){
            return <h1>Hello, {this.props.name}</h1>
        }
    }
    ```
## Rendizar el Componente principal

Para realizar el renderizado principal de nuestra app vamos a tomar un componente, y lo curioso aquí es cómo se le llama a dicho componente para ser Utilizado y el cómo se pasan su parámetros.

1. Se invoca con etiqueta _[<Component />]_.
2. Cada componente se puede retornar un solo componente.
3. Introducción de JavaScript: Por medio de las llaves.
```JSX
//Creamos un Componente el cual vamos a reutilizar
function Validate(data){
    return (
        <div>
            <h1> Bienvenido {data.description}</h1>
            <input type="checkbox" checked={data.validate} />
        </div>
    )
}

const dataInfo = {
    description: "Lorem ipsum dolor se met orign",
    validate: false
}

ReactDOM.render(
    <Validate description={dataInfo.description} validate={dataInfo.validate}/>,//Invocamos al Componente
    document.querySelector('#app')
)
```

//49:28


## Encapsular Información en un Solo elemento
En React solo puedes retornar el renderizado de un Objeto, no puedes tomar muchos y retornarlos en lista, si no que debes de Tenerlos encapsulados y/o agrupados en un solo Componente para realizar el return.

Entonces React nos provee de un Componente que nos permite hacer esto; encapsular varios componentes es uno solo.

De manera recursiva (de Ingenioso) se puede encapsular dentro de una etiqueta _<div>...</div>_ y todo va a funcionar correcto, pero no es del todo óptimo porque luego vamos a tener un elemento _<div>...</div>_ de más.

```JSX
function Persona({name,age}){
    return (
        <p>{name} tiene {age} años de Edad</p>
    )
};

function Jefe({name, auxs}){
    return (
        <React.Fragment>
            <p>{props.name}</p>
            {
                auxs.map(({name, id, age}) => <Persona name={name} age={age} key={id}/>)
            }
        </React.Fragment>
    )
}
```
- Tipos de Encapsuladores (Fragments)
    1. <React.Fragment></React.Fragment>
    2. <></>: Sintaxis corta de La llamada explicita de un Fragment.
    3. <dl></dl>: Para cuando retornamos lista de Fragmentos.
- Definición de Asignar valores props en la Invocación del Componente: Definimos los valores como propiedad de un Componente y allí asignamos el valor.

## Key
Para el renderizado de los componentes, React nos establece que le proporcionemos un valor en propiedad _key_, Esto lo solicita para lograr identificar el elemento en sí y poder optimizar y ser más preciso al momento de rerenderizar dicho componente. Sin embargo **React** no nos Obliga a proporcionarle un key. Ya que react al menos en la Iteración que retorna componentes toma como key el índice según el orden, siendo _React_ consciente de que no es buena práctica y de que muy posiblemente traerá problemas más adelante pero debe de tomar un key para Optimizar el proceso y para al menos fallar en un proceso pero hacer algo. Por el contrario no hará ninguna de las dos funciones.

```JSX
<Component key={data.id}/> // De esta manera se asigna la propiedad key.
```

Esta propiedad desde el elemento no será accesible por nosotros. Unicamente _React_ podrá hacer uso de esta.

Una buena práctica es saber qué Componentes realmente requieren de un _key_, los elementos que son muy variables como el renderizado de una lista de elementos los cuales no van a modificar su valor pues no será necesario.

## Componentes con Class

Los Class Components, son componentes creados con una estructura inicial de Clase (_Class_). Este era sintaxis anterior de creación de Componentes la cual es válida aún claramente, ya que también se añadió el _Function Component_ el cual provee una sintaxis un poco más Implicita pero sencilla de ver.

A tener en cuenta para la creación de esta forma de Componentes, saber que debemos de Heredar los propiedades y métodos de Funcionamiento del módulo _React.Component_.

Vamos a reasignar el método _render_ en la creación del componente para especificar qué queremos renderizar.

Las props son un Objeto que el componente toma en donde va a almacenar los valores asignados en su Invocación. Se accede por medio de _this_ a el Objeto props,

```JSX
class Persona extends React.component{
    render(){
        const {name, lastName} = this.props;
        return (
            //Ejemplo de Fragment
            //<div></div>
            <>
                <h1>{name}</h1>
                <p>{lastName}</p>
            </>
        )
    }
}
```

//1:10:20