# Sequelize

Objetivos:

- Identificar qué es un ORM.
- Realizar una conexión a una base de Datos.
- Interacturar con una base de Datos desde nuestra aplicación por medio de Sequelize.

Con lo que veremos hoy podemos desarrollar un flujo de trabajo en el que nuestra aplicación va a lograr hablar con nuestra base de datos por medio de SQL.

- ORM
- SEQUELIZE
- MODELS
- RELATIONS

# ORM's Object Relational Mapping - Concepto.

Se trata de un sistema que nos permite interactuar desde un lenguaje de Programación con las tablas de una bases de Datos relacionales.

Esto permite que al desarrollar no generemos consultas SQL de forma directa si no que este sistema tomará nuestras Indicaciones por medio de el lenguaje de programación y "traducirá" a lenguaje SQL.


## Flow

Entender el flujo de trabajo de un ORM; estos se basan en el mapeo directo a los Objetos que le enviemos desde nuestra Aplicación a el ORM para que este los parse en formato SQL e interactuar con la base de Datos, La base de datos entregará una respuesta y de igual forma nuestro ORM la parsea a nuestro lenguaje de Programación en formato de Objetos para acceder a la información.

## Algunos ORM's

- Hibernate
- Doctrine
- Entity  --> .NET
- Sequelize --> JavaScript

## Sequelize

Es un ORM param `NodeJS` que nos permite interactuar con bases de Datos relacionales de forma sencilla ya que nos facilita la gestión y modelado de nuestra bases de datos.

### Instalación
Vamos a hacer uso de NPM Para realizar la instalación de las librerías necesarias para trabajar con Sequelize y realizar conexiones con Postgresql.

```cli
npm install --save sequelize <!-- Esta nos permite usar sequelize de base -->
npm install --save pg <!-- Es la librería base para interactuar con una base de datos Postgresql --> 
npm install --save pg-hstore <!-- Nos permite serializar objetos a formato hstore -->
```

- _**Formato hstore**_: Es un formato de tipo de datos usado por postgresql para tomar valores de tipo _**clave-valor**_.
- _**Serializar**_: Es el proceso en el cual se realizar un cambio de formato o estructura de la información para ser reconocido por otros sistemas.


## Iniciar nuestra base de datos en nuestro proyecto

Para esto es recomendable abstraerlo en un módulo aparte, ya que de esta manera nuestra base de datos se hace reusable en muchas partes de nuestra aplicación sin afectar la integridad de la misma.

Iniciar nuestra conexión:

```javascript
const {Sequelize} = require('sequelize');

const database = new Sequelize(
    `posotgres://${user_name}:${password}@${host}:${post}/${database_name}`,
    {logging: false}
);
```

En el ejemplo anterior vemos cómo se registra nuestra base de datos; es el contacto primario pero aún no podemos interactuar con la base de datos.

El objeto `{logging:false}` con dicha propiedad en particular permite que sequelize NO muestre en consola las consultas SQL.

### Sincronizar base de datos con nuestra aplicación

Al momento de iniciar nuestra aplicación o servidor lo hacemos desde un archivo principal, En este archivo es en donde vamos a iniciar la sincronización para que permitamos la interacción con la misma.

```javascript
/* index.js */
await database.sync({force:true});
```

Esta propiedad es importante, ya que al momento de desarrollar podemos usarla a nuestra favor. Esta propiedad nos permite que cada cambio estructural que realicemos sobre algún modelo de nuestra base de datos force la limpieza de toda nuestra base de datos y creación de todas las tablas.
> En producción es imposible pensar que esta configuración esté, ya que borarría todos los registros realizados.

## Modelos
Es una representación en nuestra aplicación de una tabla de la base de datos.
Esta representacion nos va a ser útil para tener definido cómo serán nuestras consultas a la base de datos según la definición de la tabla.

> Antes de definir un modeloo es importante conocer que cada modelo va a representar a una sola tabla y que su instancia debe de ser única.

- Definir un modelo con `Sequelize`.

```javascript
database.define('User', {
    //Aquí estarán tus propiedades, los cuales serán los atributos de la entidad
});
```

Antes de definir los atributos de nuestra tabla con `sequelize`, debemos de entender cómo se definen dichos atributos.

Debemos conocer que va a recibir un objeto con las propiedades (estas serán los nombres de los atributos) y su subconfiguración.

- `DataTypes`:  
Siempre debemos de definir los tipos de datos para cada atributo en el objeto.
El `DataTypes` es un objeto que extraemos de `Sequelize` que nos permite acceder a propiedades que van a definir el tipo de dato para dicho atributo, En él están contenidos una serie de tipos de datos disponibles.

```javascript
const { DataTypes } = require('sequelize');

database.define('User', {
    id:{type:DataType.INTEGER,},//Estable un tipo de dato integer
    name:{type: DataType.STRING},// Establece un tipo de dato varchar(255)
    phone_number:{type: DataTypes.INTEGER},
    isActive:{type: DataType.BOOLEAN},//Establece un tipo de dato bool
    birth: {type: DataType.DATE},//Establece un tipo de dato DATE
    status: {type: DataTypes.ENUM('alive','dead','unknown')}//Este nos permite aceptar únicamente un valor que se encuentre en dicho ENUM
    //Es decir, el valor de registro únicamente puede ser algunos de los 3 registros.
})
```
- _**`Constraints` y Validaciones**_:  
Se trata de propiedades que nos van a permitir asignar constraints a los atributos de nuestra tabla.

Postgresql en su documentación describe muchas de las formas en las cuales podemos realizar validaciones sobre los valores que queremos insertar.

```javascript
const User = database.define('User', {
    email:{
        type: DataTypes.STRING,
        isEmail: true,
        allowNull: true
    },
    facebook:{
        type: DataTypes.STRING,
        isUrl: true,
        allowNull: true
    },
    password
})
```