# Estados de un Componente en React

Para establecer una separación entre dos partes Importantes de los componentes daremos una pequeña aclaración sobre los mismos; los cuales son:

1. props: Estos son valores que se insertan en el componente al momento de ser invocado, y serán valores iniciales de nuestro componente. Este es el _ciclo de vida_ de las props, es decir; unicamente las recibimos y seteamos nuestro componente de forma inicial con dichos valores.

2. State (Estado): El estado es un ciclo de vida interno del componente que nos va a permitir que cada vez que dicho estado se modifique, el componente cambie sus valores en la vista o tenga un comportamiento cada vez que este estado se modifique. _(Aclarar que es interno del componente)_.

**_Nota:_** Hacer uso de la herramienta de navegador llamada **React dev tools** para debugear los componentes visibles en la pantalla.

En **React** inicialmente sólo se podían definir componentes con estado por medio de la heredación de la clase _React.Component_, en la actualidad esto ha cambiado debido a que se pueden generar componentes con _Function expresion_ manejando el estado por medio de _hooks_.

De la forma en la que heredamos del componente, debemos de definir un _Constructor_ dentro de la clase (esto como ya sabemos reescribe el _Constructor del componente heredado (React.Component)_ ), entonces para traer todos los props que teníamos de la clase heredada, hacemos uso de la función especial _super_ y asignamos el valor de _props_ que nos solicita el constructor de la clase heredada. De esta manera ya tenemos maximizado la compatibilidad de nuestro nuevo componente.

Ahora para establecer el estado; dentro de nuestro constructor vamos a definir la propiedad de _state_, la cual va a contener unos valores por defecto que en su mayoría de casos vienen de las _props_. Así podemos hacer uso de la propiedad del _state_ por medio de el _this_.

Para realizar el cambio del estado de nuestro componente vamos a hacer uso de un Método heredado llamado _setState_, el cual va recibir un valor como Objeto el cual lo va a setear al _this.state_ que hemos definido y va a modificar el DOM con los valores que nuestro componente toma del estado.

La función _this.setState_ es asíncrona debido a que estamos usando el DOM, entonces debemos de tenerlo en cuenta.

```jsx
import React from "react";

class Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            account: this.props.number
        };
    };
    //Arrow function, para que no se establezca un contexto de ejecución y permanezca nuestro this.
    onButtonClick = () => {
        this.setState({
            account: this.props.account + 1
        })
    }

    render(){
        return(
            <>
                <p>{this.state.account}</p>
                <button onClick={this.onButtonClick}>Up account</button>
            </>
        )
    }
}
```

El método hereado _this.setState_ además de recibir un Objeto, también nos permite asignarle un callback al cual vamos a poder acceder a estado anterior, es decir; a el valor del estado antes de ser ahora modificado. En este callback vamos retornar un objeto con el estado modificado. Esta función se va a ejecutar cuando el método se encuentro listo para hacer el cambio de el estado. De esta manera podemos obtener un mejor performance en la precisión del cambio del estado.


```jsx
import React from "react";

class Component extends React.Component{
    constructor(props){...};
    //Arrow function, para que no se establezca un contexto de ejecución y permanezca nuestro this.
    onButtonClick = () => {
        this.setState(prevState => {
            return {
                account: prevState.account + 1
            }
        })
    }

    render(){
        return(
            <>
                <p>{this.state.account}</p>
                <button onClick={this.onButtonClick}>Up account</button>
            </>
        )
    }
}
```

En el ejemplo anterior vemos el callback que se va ejecutar por medio del Método _this.setState_ que a su vez estará en escucha de si el estado a realizado un cambio para así realizar nuevamente el renderizado de los cambios del componente.

Teniendo el principio de que el _this.setState_ funciona de manera asincrona podemos intuir si queremos acceder dentro de la misma función que está ejecutando _this.setState_ a el _this.state_, sabremos que estos valores del _state_ no se encuentran actualizados a la última ejecución del cambio de estado. para esto el método _setState_ nos permite asignarle unm callback como argumento para que este se ejecute posterior a toda la ejecución del _this.setState_.

```jsx
import React from "react";

class Component extends React.Component{
    constructor(props){...};
    //Arrow function, para que no se establezca un contexto de ejecución y permanezca nuestro this.
    onButtonClick = () => {
        this.setState(prevState => {
            return {
                account: prevState.account + 1
            }
        }, () =>{ //Segundo argumento un callback que será ejecutado al finalizar el proceso del _this.setState_
            console.log(this.state.account);
        });
    };

    render(){
        return(
            <>
                <p>{this.state.account}</p>
                <button onClick={this.onButtonClick}>Up account</button>
            </>
        )
    }
}
```

Podemos moficar el estado de nuestro componente, al modificar el estado este vuelve nuevamente y ejecuta su método render. Esto no quiere decir que el al ejecutar el _método render_ vuelva y genere el HTML, si no que ahora va a modificar los valores del HTML que será renderizado. Al ejecutarse de nuevo el método render de nuestro componente, también se van a ejecutar los _métodos render_ de nuestro demás componentes. Si estamos pasando a dichos componentes algo del estado de nuestro componente, estos componentes ahora van a contener estos valores, así que no es necesario establecer nuevamente un _state_ interno sobre los componentes hijos de nuestro componente.

```jsx
import React from "react";

class Button extends React.Component{
    render(){
        return(
            <p>{this.props.account}</p>
        )
    };
}

const StyledButton = styled(Button)`${...}`;

class Component extends React.Component{
    constructor(props){...};
    onButtonClick = () => {
        this.setState(prevState => {
            return {
                account: prevState.account + 1
            }
        }, () =>{
            console.log(this.state.account);
        });
    };

    render(){
        return(
            <>
                <StyledButton account={this.state.account} /> //Se rerenderiza con nuestro state actual
                <button onClick={this.onButtonClick}>Up account</button>
            </>
        )
    }
}
```

**Nota:** Nuestro componente se re-renderiza cuando se reciben nuevas `props` o cuando el `state` se actualiza por medio de `setState`.

# Life Cycle

El ciclo de vida de un componente se divide en 3 etapas del componente:

- Creación del componente: En esta etapa `React` por debajo, ejecuta un ciclo de vida con el componente, en este caso la creación del componente, el cual se ejecuta en el siguiente orden:
    
    1. constructor; es Allí en donde definimos el estado de nuestra clase de componente.
    2. Extrae las propiedades de la invocación del Componente.
    3. Hace uso de su método `render` para actualizar el Virtual DOM y previo a ello evaluarlo.
    4. Actualiza el DOM Real y las referencias.
    5. componentDidMOunt; Es una función que se ejecuta al terminar todo este proceso, Nosotros podemos reescribir esta función para nuestro beneficio, es decir; para cuando el componente termine nosotros lograr ejecutar cierto código.

- Actualización del Componente: Esta etapa del componente se ejecuta cuando nosotros realizamos cambios a las `props` que recibe el componente o cuando realizamos cambios de estado por medio del `setState`. Al ocurrir los casos anteriormente mencionados react empieza a realizar una serie de ejecuciones en el siguiente orden:
    
    1. Extrae las propiedades y del componente.
    2. Realiza una comparación con el Virtual DOM para saber si debe o no re-renderizar el componente.
    3. Si lo anterior se cumple, viene a ejecutarse el método `render` en donde allí se realizan las Actualizaciones al DOM Virtual.
    4. ??
    5. Realiza las actualizaciones en el DOM y sobre las referencias.
    6. componentDidUpdate; esta será una función que se ejecutará al terminar todo el proceso de la actualización la cual podremos usar a nuestro beneficio.

- Desmontar el componente: es cuando el componente a salido de nuestro DOM.
    1. componentWillUnmount: Es un método que podemos usar a nuestro beneficio para ejecutar funcionalidades que queremos que sean ejecutadas cuando el componente haya salido del DOM.  
    Al desmontar un componente, no quiere decir que este componente ha muerto y que ahora si queremos verlo ya tengamos que invocar un nuevo componente, si no que en vez de ello, el componente sigue existiendo y manteniendo esa información que contenía antes de ser desmontado para que si volvemos a montarlo se mantenga esa información.  
    Una funcionalidad para este método es que lo podemos usar para borrar la información que el componente contiene.


# One Way Data Flow