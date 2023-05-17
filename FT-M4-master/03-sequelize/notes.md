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

- `findByPk()`: Este método nos permite realizar una consulta para extraer de un modelo un registro con la propiedad de _**primaryKey**_.

```javascript
const { Character } = database.models;
const id = 8;

(async() => {
    const characterFind = await Character.findByPk(id)
    return characterFind;
})();
```

## Eliminar Registros

Para realizar el proceso de eliminación de Registros en algún modelo de nuestra base de datos podemos realizarlo de dos formas diferentes que llevan a el mismo propósito y resultado.

- 1ra: Tomar la referencia del elemento y eliminarlo:

```javascript
const { Character } = require('./db.js');//Extraemos el modelo
async function(id){
    const element = await Character.findByPk(id);//Obtenemos el elemento a eliminar por medio de primaryKey
    const deletedElement = await element.destroy();
    return deletedElement;
};
```

- 2da: Eliminar un elemento por condición, es decir; vamos a eliminar todos los elementos que tenga la propiedad de _primaryKey_ de nuestra tabla / modelo.

```javascript
const { Character } = require('./db.js');//Extraemos el modelo
async function(idParam){
    const deletedElement = await Character.destroy({
        where:{
            id:idParam
        }
    });
    return deletedElement;
};
```

En el ejemplo anterior tomamos todo el modelo y vamos a buscar el elemento que en su propiedad _id_ contenga el valor pasado por parámetro.
Sería muy similar a una clausula de la forma `DELETE FROM "Character" WHERE id=idParam;`.

Las dos formas son válidas pero la segunda forma nos simplifica los pasos.

## Generar creación de datos masivos

Con _Sequelize_ podemos realizar sobre nuestra base de datos la creación de Instancias y/o valores masivos en nuestra base de datos, El método que nos provee _sequelize_ es `Model.bulkCreate()`, Este va a solicitar un arreglo y/o lista de valores con los atributos correspondientes sobre cada uno de los registros.

```javascript
const { Character } = require('../db');
\
const createBulkCharacter = async ({characters}) => {
    const createdCharacters = await Character.bulkCreate(characters);
    return createdCharacters;
};

module.exports = createBulkCharacter;
```


## Features Extras
Para generar un contexto; cabe aclarar que las `queries` en general pueden ser de 4 tipos, ya sean _(CREATERS:CREAR, DELETERS:ELIMINAR, UPDATERS:ACTUALIZAR, FINDERS:BUSCAR)_ de esta forma podemos conocer que _sequelize_ se comunica con nuestra base de datos por medio de este tipo de consultas.

### CREATORS
- Alternativa a `Model.create()`:  Esta forma también es muy útil en casos específicos en donde necesitamos realizar algún proceso con previo a la instancia creada, La forma es la siguiente:

```javascript
const { Character } = require('../db');

const createCharacter = async ({character}) => {
    //Primero generamos la instancia y/o registro del Modelo
    const createdCharacter = await Character.build(character);

    //Segundo paso, lo guardamos en la base de datos.
    createdCharacter.save();

    return createdCharacter;
};

module.exports = createBulkCharacter;
```

### FINDERS
En este caso vemos métodos de forma semántica para buscar registros de nuestra base de datos.

- `findOne()`:  En este caso podemos traer un valor pero según los valores de algunas de sus propiedades y no solo hacer referencia a él por medio de su primaryKey, por esto es útil.

```javascript
const { Character } = require('../db');

const findCharacter = async ({name}) => {
    const find = await Character.findOne({
        where:{
            name
        }
    });
    // is an Object with find element
    return find;
};

module.exports = findCharacter;
```

De esta forma estamos solicitando que nos busque un registro cuyo nombre ingresa por parámetro en su propiedad _name_ que es de valor único.

- `findAll()`:  Este método nos trae todos los valores que necesitemos. Por defecto trae todos los valores de la tabla, pero a esta consulta podemos añadir también otras clásulas como el equivalente a el `WHERE` y el `JOIN`.

```javascript
const { Character, Episode } = require('../db');

const findAllCharacters = async () => {
    const findCharacters = await Character.findAll({
        where:{
            status:'alive'
        },
        include:{
            model: Episode,
            attributes:['name']
        }
    });
    return findCharacters;
};

module.exports = findAllCharacters;
```
Para definir lo que hemos solicitado a la base de datos con sequelize debemos identificar el uso de las clásulas, en el caso de el _where_ aplicamos las propiedades por las que queremos filtrar, y además a la columna le vamos a agregar todos los Episodios que se encuentren relacionados a cada registro de dicha tabla (_se requiere una relación de cardenalidad_), de esta manera hacemos uso de la cláusula `JOIN` con la propiedad _`include`_ dentro de la _**querie**_.

- `findByPk()`:  Esta forma nos permite que por medio de un modelo podamos extraer un registro que se encuentre referenciado por una clave primaria.


```javascript
const { Character } = require('../db');

const findByPkCharacter = async (id) => {
    const findCharacter = await Character.findByPk(id);
    return findCharacter;
};

module.exports = findByPkCharacter;
```

### UPDATERS

Son métodos que nos permiten actualizar los registros existentes en nuestra base de datos.

- `update()`:  Este método nos permite actualizar los valores que especifiquemos por medio de propiedades de filtrado.

```javascript
const { Character } = require('../db');

const updateCharacterStatus = async ({statusWhere, statusNew}) => {
    const updatedCharacters = await Character.update({status: statusNew}, {
        where:{
            status: statusWhere
        }
    });
    return updatedCharacters;
};

module.exports = updateCharacterStatus;
```

En este caso estamos actualizando todos los registros que cuenten con cierto status por un nuevo valor.
De la misma forma podemos realizar la búsqueda de un valor por una propiedad con clave primaria y luego actualizar los valores que necesitamos en dicho registro.

### DELETERS

Estos métodos nos permiten eliminar ya sea un registro, varios registros o todos los registros de una tabla.

- Eliminar por referencia en instancia: En esta forma lo que hacemos es obtener el un registro y sobre su valor retornado realizar la ejecución del método destroy.

```javascript
const { Character } = require('../db');

const deleteACharacter = async ({id}) => {
    const find = await Character.findByPk(id);
    find.destroy(); //Eliminamos el registro luego de tomarlo
    
    return find;
};

module.exports = deleteACharacter;
```

- Eliminar un grupo selecto de Registros:  Este nos permite eliminar un cantidad filtrada de registros.

```javascript
const { Character } = require('../db');

const deleteCharactersStatus = async ({statusDeleted}) => {
    const deleted = await Character.destroy({
        where:{
            status: statusDeleted
        }
    });

    //Elimina todos los registros que en su atributo status cuenten con el valor _statusDeleted_
    
    return deleted;
};

module.exports = deleteCharactersStatus;
```

- Limpiar todo la Tabla `Model.truncate()`:  Esta forma elimina todos los registros de nuestra tabla.

```javascript
const { Character } = require('../db');

const deleteAllCharacters = async () => {
    const deleted = await Character.truncate();
    //Elimina todos los registros de la tabla
    return deleted;
};

module.exports = deleteAllCharacters;
```

## Operadores

Se tratan de operadores que nos van a permitir ser más exactos a la hora de filtrar los registros.

```javascript
const { Op } = require('sequelize');
const { Character } = require('../db');

const filterData = async () => {
    const finds = await Character.findAll({
        where:{
            [Op.and]: [{status:'alive'}, {origin:'villavicencio'}],
            [Op.or]:[{status:'alive'},{status:'unknown'}],
            cash:{
                [Op.between]:[1000, 5000],
                [Op.gt]:2000,
                [Op.lt]:5000,
                [Op.notBetween]
            },
            status:{
                [Op.or]:['alive','dead'],//OR
                [Op.is]:'alive',//EXACT VALUE ===
                [Op.in]:['alive','dead']
            },
            gender:{
                [Op.eq]:'male',
                [Op.ne]:'female',
            },
            name:{
                [Op.like]: '%juan',// BUSCA SI CONTIENE '%juan'
                [Op.notLike]:'%otro',// VALIDA QUE NO TENGA UNA COINCIDENCIA CON
                [Op.iLike]: '%juan',//BUSCA SI CONTIENE '%juan' sin tener en cuenta el caseSensitive,
                [Op.starsWith]:'eso',//Que comience con
                [Op.endsWith]:'ro'//Que termine con
            }
        }
    })
}
```

## Getters

Estas son funciones que nos permiten generar un valor de campo virtual (un campo que NO se va a almacenar en la base de datos, este será accesible únicamente desde el modelo) para calcular en base a otros valores que sí existen en nuestra base de datos. Se realiza principalmente porque dichos cálculos a medida que nuestros valores iniciales van cambiando también el resultado del cálculo/proceso va a ser diferente.


```javascript
const { DataTypes,Sequelize } = require('sequelize');

module.exports = function(database){
    return database.define('User',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING(30),
            allowNull: false
        },
        birthday:{
            type: DataTypes.DATE,
            allowNull: false
        },
        yearsOld:{
            type: Sequelize.VIRTUAL,
            get(){
                return new Date().getFullYear() - new Date(this.birthday).getFullYear();
            }
        }
    })
}
```


## SETTERS

Nos permite transformar un valor obtenido para un Atributo del módelo para así almacenarlo en un campo de la base de datos ya transformado, es decir; transforma el valor antes de guardarlo en la base de datos.


```javascript
const { DataTypes,Sequelize } = require('sequelize');

module.exports = function(database){
    return database.define('User',{
        id:{...},
        name:{...},
        birthday:{
            type: DataTypes.STRING,
            set(value){
                const date = new Date(value).toUTCString();
                this.setDataValue('birthday',date);
            }
        },
        yearsOld:{...}
    })
}
```

por medio de el método `set()` podemos acceder a el valor que está recibiendo el modelo a la hora de crearse sobre el atributo que queremos transformar, al igual al contener ya el valor final de la transformación vamos a tener que hacer uso de el método por clase accediendo desde `this.setDataValue('birthday', finalValue)`. De esta forma enviamos el valor que se debe allí almacenar como campo para nuestra base de datos.

## Hooks

Son funciones que le pertenecen a cada modelo de forma independiente que se van a ejecutar según un punto en el tiempo de nuestro proceso de `QUERIE` con nuestros modelos de sequelize.

```javascript
const { DataTypes,Sequelize } = require('sequelize');

module.exports = function(database){
    return database.define('User',{
        id:{...},
        name:{...},
        birthday:{...},
        yearsOld:{...}
    },{
        hooks:{
            beforeCreate:function(user,options){
                console.log('Esto ha sido creado');
            },
            afterCreate:function(user,options){
                console.log('Empieza la creación');
            }
        }
    })
}
```