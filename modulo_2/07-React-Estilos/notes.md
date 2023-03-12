# Uso de Estilos con Componentes de React

1. Estilos Legacy:  
    Es la forma en la que se aplicaban estilos al principio de todo, que era trayendo (_import_) a nuestros archivos de _JS_ los archivos de _.css_, esta forma claramente que aún lo podemos usar, pero veamos cómo funciona.
    Recordar que _Javascript_ únicamente entiende _Javascript_, Entonces qué sucede cuando importamos estos archivos de _.css_, pues _javascript_ no los va a entender, el proceso por el cual esto funciona es por medio de _**webpack**_, ya que este será el que nos permita empaquetar todo nuestro código en un solo archivo, pero esto aún no es necesario. Como veíamos en el proceso de uso de _JSX_ _(Una extensión de Javascript)_ debíamos de hacer uso de **babel** para poder transpilar el código para que luego _**webpack**_ realizara su proceso, entonces esto mismo debemos de especificarle a _**webpack**_ para que haga uso de _**babel**_ pero ahora con los archivos de [_.css_].


    **Ejemplo**
    ```jsx
        import React from 'react';
        import './styles.css';

        class Component extends React.Component{
            render(){
                return (
                    <div>Hello, World!<div/>
                )
            }
        }
    ```
    **Ventajas**
    - No necesitamos aprender más de la cuenta, ya conocemos cómo funciona _CSS_ y solo debemos de Importarlo.
    - Maximiza la compatibilidad.

    **Desventajas**
    - Los estilos no son globales, lo más grave de todo es que vamos en contra del el _**Principio de Responsabilidad Única (Single Responsability Principle) **_.
    - El problema que con esto es que ahora ya no existirá un Orden, seguiríamos igual que antes.

    Se puede usar, y es útil cuando queremos establecer estilos muy generales, es decir; para muchos componentes

2. Estilos en Línea  
    **React** nos recomienda hacer uso de Estilos en linea a pesar que conozca sus desventajas. Lo podemos hacer adjuntando a una _prop_ llamada _style_ sobre los componentes de **React**, el cual va recibir un Objeto con las propiedades de _.css_ que queramos establecer.
    
    **_Ejemplo:_**
    ```jsx
        import React from 'react';
        import './styles.css';

        class Component extends React.Component{
            render(){
                const styles = {
                    background: "#e9e9e9",
                    boxShadow: "0 1px 5px rgba(0,0,0,0.3)",
                    cursor: "pointer",
                    borderRadius: "5px"
                }
                return (
                    <div styles={styles}>Hello, World!<div/>
                )
            }
        }
    ```
    **Ventajas**  
        - Con esta forma podemos de mantener los estilos de manera Local, en profundidad son solo estilos en línea.
        - No necesitamos configuraciones previas para su uso.  
    **Desventajas**  
        - Perdemos el uso de los pseudo-selectores. Así que si únicamente usamos esta forma para nuestros estilos, no podríamos agregar dinamismo y/o funcionalidades avanzados sobre nuestros elementos.
3. CSS Modules


    Esta forma combina los dos grupos de ventajas de los últimas formas de agregar estilos, es decir; esta forma nos permite hacer uso de estilos en archivos _.css_ separados pero a la véz podemos encapsularlos sin dejar se apliquen de manera global. La forma en la que podríamos hacer uso de esto es por medio de _**ES6 Modules**_ que importará el archivo _.css_ y nos permitirá acceder a las clases y/o estilos definidos en el archivo por medio de un Objeto.
    Todo lo anterior no es nada más y nada menos que gracias a _**Webpack**_ ya que de la misma forma que con los _Estilos legacy_ que teníamos que configurar webpack con _babel_ para que cargase los archivos _.css_, aquí se haría de la misma forma pero con Opciones, estas opciones nos van a permitir modularizar nuestros archivos de _css_ y hacer uso de ellos como se explica en el párrafo anterior. Pero esto no es todo, también verémos el cómo nos permite tener clases únicas, pues _webpack_ en cada llamada de clase le añade una parte en _hash_ única a esa clase llamada, Esto es lo que nos permite la encapsulación única de clases.

    La importancia que tienen los _**CSS Modules**_ es que podemos mantener de forma única los estilos por componente. Y está bien que podemos modularizar nuestros estilos por medio de el _css-loader_ pero no es suficiente, ya que en profundidad si tenemos más componentes con el mismo nombre de clase estos estilos se van a ver afectados, Entonces lo que hace **webpack** es aplicar un **hash** sobre cada clase por componente para que así si llegamos a poseer un componente el cual contiene el mismo nombre de clase que el que se encuentra definido arriba no exista un conflicto entre estilos, es decir; cada nombre de clase será único para dicho componente.

    Las propiedades que vayamos a usar para nuestros componentes se deben de asignar como clase.

    La configuración se vería algo así:
    ```javascript
        module.exports = {
            // css modules
            ...,
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader",
                    options: 
                    {
                        modules: {
                        localIdentName: "[local]___[hash:base64:5]"
                        }
                    }
                }
            ]
        }
    ```
    **Ventajas**
    - Encapsulación de Estilos, _(Single Responsability Principel)_
    **Desventajas**
    - Se pierden de forma parcial los estilos globales. (Se puede realizar una configuración Flexible en Webpack para los archivos .css)  

    Con **(CRA)** nos podemos ahorrar la configuración manual, ya que colocando a los archivos la extensión *[name_style].module.css* ya reconoce que este será tomado como un formato para _CSS Modules_.

4. Styled Components


    Esta forma de aplicar estilos a componentes, es la más segura ya que nos permite generar componentes ya estilizados. Hace uso de una dependencia llamada _**styled-components**_.
    
    
    **Ventajas**  
    - Nos permite tener encapsulado estilos y componente, además de generar los componentes ya "_armados_".  
    - Debemos de encargarnos de Reutilizar estilos.  
    - Sin configuraciones adicionales en _Webpack_.  
    - Todo el uso de _CSS_.  


    **Desventajas**  
    - Curva de Aprendizaje; Aprender a usarlos.

    Para hacer uso de _Styles components_, debemos adoptar las reglas de dicho paquete, el cual nos establece que podemos generar componentes por medio de _tags de HTML_ que seguido podemos hacer uso de _(back ticks)_ [``] para allí establecer los estilos que queremos darle a ese componente que posteriormente debemos de almacenar en variables para ser usados dichos componentes con todos nuestros estilos establecidos.

    Con los _styled components_ no debemos de preocuparnos por las clases, ya que este paquete le agregará una clase única por medio de un hash para ese Componente. Por lo cual no necesitamos preocuparnos por nombres de clases ni nada.

    Esta forma de aplicar estilos por medio de _Styled Components_  únicamnente se le pueden aplicar a Componentes que permitan aplicarle la propiedad de _**"className"**_.

    *Más Utilidades*
    - Tomar variables y anexarlas a la plantilla de estilos, por ello se encuentran los _(backticks [ ` ` ])_ los cuales nos proveen de _Template Strings_.
    - Podemos hacer uso de javascript en _one line_ para dinamizar estilos.
    - Podemos recibir los _props_ del componente para crear estilos dinámicos <Component typePerson="standar" <!--  -->/>.
    - Hace uso de sintáxis personalizada para hacer uso de _**selectores**_ y _**pseudo-selectores**_.
    - Estilizar componentes ya existentes con [style(component)`{styles...}`].

    ```jsx
        import styled from 'styled-components';
        import * as colors from './colors.js';

        const Persona = styled.div`
            font-size: 1.1rem;
            border-radius: 10px;
            padding: 10px 15px;
            background: #e9e9e9;
            font-weight: bold;
            transition: all .3s ease;
            position: relative;

            &:hover{
                background: ${props.typePerson === 'standar' ? "blue" : props.typePersona === "premium" ? "gold" : null } ;
                color: ${colors.primary};
            }

            &::after{
                content:"";
                width: 100%;
                height: 2px;
                bottom: 0;
                position: absolute;
            }
        `;

        //Componentes existentes
        import { Link } from "react-router-dom";

        const StyledLink = styled(Link)`...`;
    ```

# Bibliografía
- Legacy: Hace referencia a el cómo se hacían las cosas el principio de todo en cuando a el tema que estamos tocando.