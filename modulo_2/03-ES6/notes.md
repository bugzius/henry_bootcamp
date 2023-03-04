# ECMASCRIPT
Es el estandar que regula las caracteristicas actuales de javascript. Sacando novedades cada año con features de Nivel 4; es decir, que ya se encuentran aprobadas para su Inserción global al lenguaje.

# Features

* let + const (block scoping)
    1. Let: Es una palabra reservada para la creación de variables mutables, maneja scope en bloque y en Contexto de Ejecución de Función.
    2. const: es una palabra reservada para la asignación de variables inmutables; es decir, no se permite la reasignación de la variable, Únicamente la manipulación de sus valores Internos.
* **Arrow Functions:** Son un tipo de declaración de Funciones con una sintaxis más resumida y/o abreviadas. Manejan la sintaxis [() => {...}]. Estas permiten hacer uso del this haciendo referencia al código que las rodea, es decir; buscan en un contexto de nivel superior para acceder a un this. Algunas caracteristicas de su uso:
    1. sin parentesis para la definición de un solo parámetro.
    2. sin llaves para el cuerpo con una sola linea de código.
    3. Return implicito con un cuerpo de una sola linea y el retorno de un valor o expresión.
* Class: En javascript se maneja la programación Orientada a Objetos con azucar sintáctico, y las clases _[class]_ es azucar sintáctico para este tipo de paradigma.
Realmente funciona con prototypes. Nos provee legibilidad, herencia, instancias, métodos privados y/o estáticos, valores privados, constructores, etc.

* Object Literals: es la manera en la que podemos crear un Objeto y asignar su prototype de manera interna. Entre otras de sus features, nos permite hacer uso de Object Literal Enhancment, generar métodos, nombres de Propiedades, acceso al Prototype.

* Template String: nos permite asignar valores de variables dentro de un String. Sintaxis: [ ` ${val1} knows ${val2}` ]

* Destructuring: Nos permite extraer valores en profundidad tanto de Propiedades de Objetos como de valores en Indices de Arreglos y asignarlos a un nombre de variable. En el caso de los Objetos extraemos los valores por nombre de Propiedad y con el Operador [:] podemos cambiar el nombre que se le va a asignar a el valor extraído para que no sea el nombre de la propiedad dentro del Objeto quien contiene el valor.

* Default parameters: Cuando dentro de una función hacemos uso de un parámetro que vamos a solicitar podemos extender su funcionamiento en caso de que ese argumento para el parámetro no sea entregado. Entonces javascript nos permite asignar un valor por defecto a dicho parámetro en caso de que el valor no sea entregado, de lo contrario usará el valor entregado.

* Rest Operator: Nos permite obtener en un arreglo el resto de los valores de algo.

* Spread Operator: Extrae cada uno de los valores de primer nivel de un valor iterable.

# Babel - Compatibilidad