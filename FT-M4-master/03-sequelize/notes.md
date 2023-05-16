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

```javascript
/* index.js */
await database.sync({alter:true});
```
Esta propiedad nos permite únicamente actualizar los pequeños cambios realizados sobre los modelos sin eliminar los registros existentes en las tablas.

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
    password:{
        type: DataTypes.STRING,
        is: ["^[a-z]+$",'i'],
        len:[4, 15],
        notNull: false
    },
    username:{
        type: DataType.STRING,
        len:[4,14],
        allowNull: false,
        isAlphanumeric: true
    }
})
```

Estas son validaciones y constrains que nos provee _**Sequelize**_.

## Cómo generar relaciones entre Modelos en Sequelize.

Para generar relaciones entre modelos con Sequelize primero debemos de conocer que hay que investigar bien la documentación. Vamos a conocer los tipos de relaciones que tendríamos

> Tip: usar `database.models` para tomar todos los modelos definidos en la base de datos.

- Relación de Varios a Varios (`belongsToMany`):  
Esta es un tipo de relación que requiere una tabla intermedia para su funcionamiento, entonces debemos de tenerlo muy en cuenta, En este caso.

Vamos a hacer uso de el siguiente método --> `Model.belongsToMany(model, options)`, Este nos solicita 2 argumentos iniciales base, Los cuales son el modelo al cual queremos apuntar la relación y las opciones de la relación.

Veamos cómo:

```javascript
const { Plato, Ingrediente} = database.models; //Extramos lo modelos previamente definidos.

/* Esta va a tener la relación de muchos a muchos, Ya que un plato puede contener muchos ingredientes y un ingrediente puede estar en muchos platos */

Plato.belongsToMany(Ingrediente,{through:'plato_ingrediente'});
Ingrediente.belongsToMany(Plato,{through:'plato_ingrediente'});
```

En sequelize esta es la forma en la que definimos las relaciones entre dos entidades, Aquí estamos definiendo por medio de el método que desde la entidad _Plato_ va a existir una cardenalidad de muchos a muchos (_N:N_) con la Entidad _Ingredientes_ y de forma inversa con la ejecución del método en la Entidad _Ingredientes_.

En el segundo argumento hemos definido un objeto con la propiedad _through_; esta propiedad va a ser la que contenga el nombre de nuestra tabla auxiliar para la relación.

Y esto sería lo base para definir nuestra relación, Pero ahora, _**¿Y la tabla auxiliar?**_.

Pues **_Sequelize_** ahora la creará por nosotros con dichas relaciones y referencias de nuestros Modelos.

- Relación de uno a uno (`hasOne()`):  Generar este tipo de relación es menos compleja que la anterior, ya que esta solo se relaciona de uno a uno, además de que no requiere tabla auxiliar.

Se usa un método que es el que referencia hacia cuál modelo va a realizar su relación y el método desde el otro modelo que va a recibir la relación.

```javascript
const { User, Profile} = database.models;

User.hasOne(profile);
Profile.belongsTo(Plato);
```

Esta relación como ven es más sencilla de realizar en _**sequelize**_.

- Relación de uno a muchos (`hasMany()`):  
```javascript
const { User, Repositorio } = database.models;

User.hasMany(User);
Repositorio.belongsTo(Repositorio);
```


## Desarrollando la Integración

Al realiza la creación de el servidor, sabemos que nuestro código va a ir escalando, y se extiende más cuando tenemos una integración con una base datos, Entonces es muy importante todos estos _features_ mantenerlos de forma modularizada.

Antes de todo esto debemos de conocer cuál va a ser nuestro flujo de trabajo en este caso entre el servidor y nuestra base de datos.

Al realizar la integración entre `Servidor -> Sequelize -> Postgresql` podemos llegar a identificar entre la creación de nuestro servidor, la conexion con nuestra **base de datos** _postgresql_ y el acceso a la información contenida en nuestra base de datos que es gestionada por _Sequelize_.

Una buena forma de mantener todos controlado para identificar fácilmente cómo gestionar nuestro código es generando directorios de la siguiente forma.

Directorios y archivos requeridos entre cada parte:  
- Generar servidor: _Creación del Servidor (server.js)_, _Manejo de servidor(index.js)_, _Rutas de API(routes -> archivos de router)_
- Base de Datos: _Conexión base de datos(db.js --> Funcionalidades y Conexión)_, _Definición de modelos(models -> Archivos para cada modelo)_.
- Manejo de la base de datos: _Solicitudes a la base de datos por medio de los modelos(Controllers --> Archivos que consultan la base de datos)_.

## Métodos de Gestión de Modelos

Todos los Modelos son una Represación exacta de la tabla que existe en nuestra base de datos, También comparten sus tipos de acciones, Es decir; podemos consultar la tabla por medio de el modelo y este nos responderá.

- `Model.findAll()`: Trae todos los elementos de una tabla, Es la representación de `SELECT * FROM "Model"`. Este método tambien acepta propiedades para filtrar, como sería: `Model.findAll({where:{id:5}})`, Aquí estaríamos filtrando por todos los que tengan el _id = 5_ que debería ser solo 1.

Este método también recibe parámetros que nos permite añadir, consultar y/o regir la consulta a la base de datos con ciertas condiciones, Como por ejemplo pueden ser propiedades para especificar una clausula _JOIN_ o una clausula _WHERE_.

**WHERE**: Esta clausula nos permite filtrar validando los atributos de cada uno de los valores de la tabla.
```javascript
async function(){
    return await Character.findAll({
        where:{
            status:'alive'
        }
    });
};
```

De esta forma estamos indicando que queremos buscar en todos los registros de la tabla y recibir únicamente los que tienen en su propiedad "_status_" el valor "_alive_".

**JOIN**: Esta clausula nos permite incluir en nuestra consulta una o varias columnas con valores los cuales deben de estar relacionados con nuestra entidad principal de consulta.

```javascript
async function(){
    return await Character.findAll({
        include:{//Incluir la tabla
            model: Episode,//Eligir el modelo o entidad, relacionada de forma directa
            attributes:['name'],//Si no colocamos esta propiedad, trerá todos los atributos, por el contrario podremos elegir los atributos que necesitamos extraer.
            through:{//Esta es una propiedad para especificar si queremos traer en nuestra consulta las tablas auxiliares, como podría darse el caso en una relación de muchos a muchos
                attributes:[]
            }
        }
    });
};
```

Aquí lo que estamos realizando es generar una consulta en la cual estamos uniendo los valores filtrados de una tabla manteniendo la referencia a los valores dentro de cada registro en la Entidad principal.

- `add() Method`: Este método se agrega de forma automática a nuestras instancias cuando se da el caso de contener relaciones de muchos a muchos entre modelos, Es decir; si tenemos por ejemplo una relación de muchos a muchos entre el modelo _Usuarios_ y el modelo _Repositorios_, _**sequelize**_ nos agregará un método en cada instancia creada desde uno de los dos modelos de forma distinta, quedaría de _newUser.addRepositorios()_ y _newRepositorio.addUsuarios()_, Este recibirá un arreglo de valores en donde les agregará los Id correspondientes para generar la relación desde un mismo modelo.

```javascript
const { Usuario, Repositorio } = database.models;

Usuario.belongsToMany(Repositorio,{through:'usuario_repositorio'});
Repositorio.belongsToMany(Usuario,{through:'usuario_repositorio'});

(async () => {
    const newUsuario = await Usuario.create({...values});
    newUsuario.addRepositorios([1,2,3]);
    return newUsuario;
})();
```

De esta forma ya hemos generado las relaciones que tendrá el usuario creado con los repositorios existentes.

- `findByPk()`: Este método nos permite realizar una consulta para extraer de un modelo un registro por _**primaryKey**_.

```javascript
const { Character } = database.models;
const id = 8;

(async() => {
    const characterFind = await Character.findByPk(id)
    return characterFind;
})();
```

## Eliminar Registros