# Sistema de Gestión de Bases de Datos (DBMS)

- DBMS
- Repaso de Historia de Bases de Datos
- Definir modelo de entidad relación.
- Resumen de Ideas centrales.

# DBMS

- _**¿Qué son los datos?**_: El dato es la unidad mínima de información, es un símbolo sin significado y/o un valor no estructurado. Son valores sin contexto que se dan a mucha interpretación por medio de la observación.

- _**Base de datos**_: Es un sistema estructurado en donde los datos toman contexto para ser administrados en todos sus contextos. Lo importante de la misma es la estructura organizada en la cual gestiona los datos.


Teniendo esto en cuenta, el Sistema de Gestión de Bases de Datos, nos permite (_además de los conceptos anteriores_) controlar el acceso a los datos, suministrando un sistema seguro para mantener la integridad de los datos.

Los Datos contenidos en la misma van a ser persistentes, es decir se van a almacenar en un dispositivo de almacenamiento.

Existen muchos Sistemas de Gestión de Bases de Datos, Cada uno con sus formas de Trabajar y de contener ventajas según sus Integraciones, Algunos de ellos:

- _**Cassandra**_
- _**PostgreSQL**_
- _**MongoDB**_
- _**SQLite**_
- _**SQL Server**_
- _**Redis**_
- _**MySQL**_

> Los datos definen la estructura

# Historia de DBMS

- Codasyl (1960): Definía una estructura de datos con nodos enlazados los cuales eran accesibles mediante punteros. Era necesario realizar la busqueda de datos de forma manual mediante los punteros.

- _**Modelo Relacional(1970)**_: Es un modelo en donde la información se encuentra estructurada en tablas de filas y columnas. Para establecer relaciones entre las tablas se hace uso de Claves Primarias y Foráneas, Esto permite realizar consultas de datos más complejas.

- _**Modelo Entidad Relación**_ Se comienza a estructura la relación que tienen entidades enteras en conjunto, es decir; qué tipo de enlace existe entre cada entidad.

Una entidad es un conjunto nombrado de datos que permiten ser relacionados con otras entidades.

- _**SQL (Structure Query Language) 1980**_: Es un lenguaje de consultas que nos permite administrar bases de datos relacionales.

Es la forma en la cual vamos a interactuar con nuestra Base de Datos.

## Modelo Entidad Relación

El modelo de entidad relación se basa en la creación de entidades que entre sí tendrán algún tipo de enlace porque sus datos son referencia de la entidad.

- _**Entidad**_: Representa un elemento independiente, ya que va a contener él mismo valores que lo  caracterizan.
- _**Atributos**_: Los atributos son las características que definen una entidad.
- _**Relación**_: Hace referencia a la asociación de entidades que estas a su vez contienen reglas de direccionamiento entre las entidades.

## Diagrama de Estructuración de Modelo de Entidad Relación
Se suele usar para estas tareas el uso del estandar _UML_. Al realizar nuestro diagrama de entidad relación, Debemos de tener en cuenta cómo será la estructuración de sus enlaces; además de estructurar cómo se deben de dividir por entidades los valores que podría contener una entida padre.

## Cardinalidad

Una cardinalidad es el tipo de relación que tienen las entidades.

## Clave Primaria y Claves Foraneas

- _**Clave Primaria**_: Una clave primaria se establece cuando necesitamos que exista un valor único para cada registro que permite identificar dicho registro. Estas se aplica para un campo especifico el cual permitirá tener un valor único para leer dicho registro.
- _**Clave Foranea**_: Las claves foraneas se establecen a un campo de cada registro que va a contener la referencia de Clave primaria de una entidad.

## Tipos de Relaciones o Cardinalidades

- _**Uno a Muchos (1:N)**_: Se trata de una relación en donde un entidad solo está relacionada una vez con otra entidad, y en sentido contrario la otra entidad se puede llegar a relacionar muchas veces en la otra entidad.Ej: Teniendo 2 Entidades (persona, auto), se tiene que la entidad persona puede tener muchos autos, pero un auto solo pueder tener un dueño.

- _**Uno a Uno (1:1)**_: Se realiza una relación en donde un registro de una entidad está relacionado una sola vez con otra entidad y en dirección contraria de la misma forma, Ej: Teniendo dos entidades (auto, patente), Un auto únicamente puede pertenecerle a una patente y una patente únicamente le puede pertenecer a un auto.

- _**Muchos a Muchos (N:N)**_: En esta cardinalidad, se establece que una entidad puede mantener relación con muchas otros registros de una entidad y en dirección contraria de la misma forma,Ej: Tenemos dos entidades(cliente, vendedor), Aquí es muy válida esta cardinalidad ya que un cliente puede tener muchos vendedores y un vendedor puede tener muchos clientes

En este caso se complica un poco la gestión de el cómo vamos a identificar las relaciones, ya que no logramos mantener las relaciones solo por medio de las claves primarias y foraneas. En este caso, se crea una tabla auxiliar que va a almacenar las relaciones con las claves foranes de cada tabla.