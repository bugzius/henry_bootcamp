# Css Avanzado

## Frameworks CSS

Se trata de un conjunto de herramientas listas para ser usadas de una única manera. En css tenemos framworks que establecen un orden para la creación eficiente y sencilla sobre los estilos de un sitio web. Nos proveen de unos estilos predefinidos listos para ser usados.

ENtre los Frameworks más conocidos tenemos:
* Bootstrap
* Bulma
* Fundation
* ChakraUI
* Tailwind CSS

### Bootstrap:
Este framework es el más utilizado pero también el que más nos limita, sin embargo esto no quiere decir que no logremos buenos estilos, de hecho nos facilita tanto y nos provee de tantos elementos de estilos que se nos hará muy sencillo y rápido construir nuestros titios web.


Antes de todo, debemos de Importar Bootstrap, y existen 2 maneras, por medio de un CDN o instalandolo en nuestro proyecto con NodeJS. Si no necesitas configurarlo y piensas crear un proyecto pequeño lo mejor es usar el CND, sin embargo al instalarlo por medio de NodeJS podemos realizar modificaciones del Comportamiento de BootStrap en nuestro Proyecto.

Ej:

En el siguiente ejemplo veremos cómo sería un Botón de Color rojo con Bootstrap:
```HTML
<button class="btn btn-danger">Boton Bootstrap</button>
```

Como ven, unicamente debemos de definir clases en nuestras etiquetas de HTML para aplicar los estilos, por lo que podemos inferir que los frameworks nos permiten hacer uso de Estilos predefinidos.

## Responsive Design

El responsive design es una técnica que establece estilos por medio de herramientas para que nuestra página web se adapte o luzca bien en cualquier dispositivo, es decir; que se vea bien en cualquier tamaño de ventana.

* CSS Media Queries
Se trata de selectores que nos permiten asegurarnos que ciertos estilos se apliquen en una resolución minima o máxima del ViewPort.

```css
@media screen and (max-width: 992px){
    body{
        background-color:blue;
    }
}
```
En el ejemplo anterior estamos estableciendo que estos estilos se van a aplicar cuando la ventana en su ancho no exceda los _992px_


* Implementación de Responsive Desing con Bootstrap

- .col-xl(xlarge devices): Viewport mayor o igual a 1200px
- .col-lg (large devices): Viewport mayor o igual a 992px
- .col-md (medium devices): Viewport mayor o igual a 768px
- .col-sm (small devices): viewport mayor o igual a 576px
- .col (extra small devices): viewport menor a 576px

Este sistema de grillas (particiones / espacios) tiene hasta un máximo de 12 columnas sumadas por fila, con cualquier variante de combinaciones, Ej: col-md-6 col-md-4 col-md-2 (total de 12)

Lo anterior es para definir columnas de forma explicita, pero también bootstrap nos permite que se realice de forma implicita buscando la proporcion de cada columna. unicamente establecemos la clase de _.col_ entre hermanos de una contenedor y bootstrap inferirá la cantidad de columnas que establecerá para cada uno de los hijos del contenedor.


## CSS Preprocesador

Un preprocesador de CSS sistema que nos provee de una sintaxis legible para generar código CSS, también nos proveen de herramientas de uso para hacer más eficiente el desarrollo como lo pueden ser los mixins, variables, selectores Ramificados, entre otros.

Algunos de los que existen son:
- Sass
- Less
- Stylus

### LESS (Leaner Style Sheets)

Es el preprocesador más parecido a CSS que añade varios elementos en su sintaxis.Este es el que vamos a usar.

- Variables:
Less nos permite usar variables dentro de nuestro archivo de Estilos, esto nos permite evitar la repeteción de valores además de la centralización de Información.

Vamos a establecer un variable para almacenar el color y otras para establecer el valor de propiedades.

```LESS
@color-fondo: #f55;
@width: 10px;
@height: @width + 10px;
/*También es posible realizar operaciones con las variables*/

h1{
    background-color: @color-fondo;
    width: @width;
    height: @height;
}
```
El código anterior pertenece a la sintaxis de LESS y el manejo de sus variables, como ven es muy sencillo.

Todo este código se transpilará a código CSS y este será el que usemos para nuestra página web.

Además las variables en LESS también cuentan con un Scope determinado, así que adentro de una definición de propiedad de etiquetas también podemos setear este valor.

```LESS
@var: red;

#page{
    @var: white;
    color: @var; //White
}
```
El valor adentro de la etiqueta #page se puede usar unicamente adentro de dicha etiqueta. Lo que nos permite hacer uso del valor de afuera en otro lugar.

Incluso con LESS podemos hacer uso de variables que contengan valores de texto que puedan ser anexados a nombre de propiedades en incluso a nombres de selectores, al igual que con URL's.


```LESS
@my-component: banner;
@background-prop: image;
@images: "../img";

.@{my-component}{
    background-@{background-prop}: "@{images}/banner.png";
}
```
Las variables no es necesario crearlas antes de usarlas, lo que sí hay que tener en cuenta es el scope en donde se definen.

### Funciones LESS

LESS nos provee de funciones que entre otras cosas nos permiten transformar colores, manipular strings y realizar calculos matemáticos.

```LESS
@base:#f04615;
@width: 0.5;

.class{
    width: percentage(@width);
    color: saturate(@base, 5%);
    background-color: spin(lighten(@base, 25%), 8);
}
```
- percentage(): Esta función extrae el porcentaje de un valor, en este caso de 0.5 nos retorna el porcentaje de _5%_.
- saturate(color, value): Aplicamos saturación a los colores por medio de un valor.

### Anidamiento en LESS

LESS Nos permite simplificar la tarea de especificación de selectores y nos provee la definición de estilos de forma ramificada.

```LESS
nav{
    ul{
        display: grid;
        grid-template-columns:1fr 1fr;
    }
    li{
        list-style:none;
    }
    a{
        color:white;
        text-decoration:none;
    }
}
```

Los elementos en linea (ul, li, a) pertenecen como hijos de la lista (ul). De esta manera podemos aplicar estilos con profundización.

### Importación

LESS nos permite importar código perteneciente a otros archivos con extensión **_.less_**.

Se realiza de la siguiente manera; supongamos que tenemos un archivo en nuestro directorio raíz un archivo llamado _styles-base.less_.

```LESS
@import "./styles-base"
```

De esta manera importamos el código y cada uno de las etiquetas y propiedades difinidas en nuestro archivo importado serán aplicados al archivo el cual está llamando el archivo importado.

Dato: no es requerido definir la extensión _.less_.

### Mixins

Son un trozo de código que contienen propiedades que luego podremos asignarle a otras definiciones.

```LESS
.btn{
    border:none;
    padding:5px;
    border-radius:5px;
}

.btn-reject{
    .btn();//Llamamos al mixin
    background-color: red;
}
.btn-success{
    .btn();//Llamamos al mixin
    background-color: green;
}
```

Los mixins funcionan como funciones, así que también podemos añadirles argumentos y establecer parámetros.

```LESS
//Mixin
.bordered(@color; @width){
    border:@width solid @color;
}
.btn-submit{
    @color-main:blue;
    
    .btn();
    .bordered(@color-main; 2px);
    background-color: @color-main;
}
```