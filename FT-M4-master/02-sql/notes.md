# SQL

Objetivos de la Lecture.

- Aplicar comando de consulta.
- Administrar una base de datos por medio de Structure Query Language (SQL).
- Crear una base de datos con PostgreSQL

## SQL y sus Comandos
Es un lenguaje de consultas usado para administrar de forma Eficiente y segura Bases de Datos _relacionales_.

Este lenguaje es muy popular y usado por muchos sistemas de Gestión de Bases de Datos, Es un estandar en el manejo de Bases de Datos relacionales.

Este sistema también permite el uso de expresiones y definiciones / creaciones de valores.

Se estructura por medio cláusulas; son un conjunto completo de instrucciones para generar un impacto en la base de datos.

## Subqueries

Nos permite generar consultas anidadas dentro de otras mismas queries, Esto para que al obtener de una query unos resultados, Realicemos sobre estos, Otras Queries.

## Join Clause

Es una funcionalidad que nos permite traer valores de más de una tabla (Entidad).

## Object Relational Maping (ORM)

# PostgreSQL
Es un sistema de gestión de Bases de Datos gratuito y open source.
> Este **_DBMS_** Es el que usaremos hasta finalizar el bootcamp

## Pg admin 4
Es una Interfaz para la gestión intuitiva de el servidor que vamos a manejar con `Postgresql`.

## Shell Postgresql

Es una CLI para la gestión de alguna de nuestras bases de Datos.

> Es muy importante finalizar cada clausula en la consola con un ";".

## Comandos Básicos
- \l: Lista las bases de datos
- [\c [name_database]] Se conecta a una base de datos
- [\dt ] Permite ver las tablas de la base de datos activa.

### Gestionar bases de datos desde la Shell

- [DROP DATABASE [name_database]] Elimina una base de datos
- [CREATE DATABASE [name_database]] Crea una nueva Base de Datos.

[CREATE] Se usa para la creación de distintos elementos en nuestro servidor, Ej; bases de datos, indices, tablas, etc.

### Crear Tablas en la demo

La creación de tablas por medio de la Clausula "CREATE" se estructura de la siguiente forma.

```sql
CREATE TABLE [name_table](
    [column_name] [data_type](size),
    [column_name] [data_type](size),
    [column_name] [data_type](size)
)
```

> En la consola de `postgresql` podemos hacer uso directamente para crear las tablas y en general establecer las bases de datos, Pero no es recomendable, ya que la forma en la que funciona la consola se nos hace más tedioso manejar error humano, Es recomendable que se haga en un archivo de `.sql` aparte.

#### Data Types

Es bueno investigar en la documentación oficial de `postgresql` para conocer todos los tipos de datos.

Es importante analisis qué tipo de dato necesitamos para cada campo de la tabla en nuestra base de datos. Ya que logramos una mejor administración de la memoria.

- **serial**: permite general un valor autoincrementable de 4 bytes
- **text**: Admite un tamaño variable de caracteres.
- **varchar(size)**: Admite un tamaño máxico de caracteres.

### Constrains
 
Son reglas para los campos de una tabla.
- PRIMARY KEY ---> Por defecto es: NOT NULL UNIQUE y genera valores automaticos
- NOT NULL
- UNIQUE

### Foreing Keys
Para la indexación de otras entidades que contienen una `PRIMARY KEY`, hacemos uso de la palabra `REFERENCES`.

```sql
CREATE TABLE personajes(
    [column_name] [type_data] REFERENCES [table_name] (references_column_name)
    producto_no integer REFERENCES products (product_no) --> Ejemplo
    {...}
)
```

### Insertar Valores en las tablas

Existe para crear datos dentro de una tabla, Una estructura sencilla que nos permite adecuar el orden en el que agregamos los datos a la tabla.

```sql
INSERT INTO [name_table] (column_name1, column_name2) VALUES (value_column1, value_column2);

Ej:
INSERT INTO gender(name) VALUES('female');
```
Si insertamos en una tabla y un valor con `Constrain` `UNIQUE` ya existe en la Tabla, este no permitirá realizar la operación.

### Administrar nuestra Base de Datos.

**Consultar de Forma sencilla con SELECT** -->
`SELECT` nos permite realizar consultas en nuestra base de datos.

- Tomar todo: `SELECT * FROM gender;`.
- Tomar algunas columnas `SELECT (name) FROM gender;`.

**Eliminar registros de una tabla**
`DELETE` nos permite seleccionar una tabla para eliminar ya sea todos los valores o los que tomemos por medio de el `WHERE`.

Hay que tener en cuenta que la estructura a continuación debe ser de sumo Cuidado, ya que podemos llegar a Borrar una buena parte de nuestra base de datos.

Para Eliminar un registro de alguna tabla, usamos la siguiente sintaxis.

```sql
DELETE FROM [name_table]; /* Limpia o Elimina todos los registros de la tabla */

DELETE FROM character WHERE id=3;
```

**Función SUM(colunm name)**  
Permite obtener el resultado numérico de la suma de todos los resultados de varias columnas.

**Filtrar los Datos**
`WHERE` nos permite filtrar los datos para la acción primaria que estamos intencionando realizar. Esta admite filtrar por medio de condicionales permitiendonos acceder a las columnas de los registros para obtener de forma precisa los valores.

Tenemos una entidad de resultados sobre un examen de matemáþicas a adolescentes de 11vo grado y queremos obtener los que obtuvieron un puntaje superior a 6 (ya que esta es la nota mínima).

Ej:
```sql
SELECT * FROM results_exam WHERE result > 6;
```

**Filtrar de Forma Encadenada**:  
Podemos realizar filtraciones encadenadas validando por medio de los valores de las columnas cuáles deben de ser las condiciones que se deben cumplir para que en el resultado de la filtración encontremos dicho valor validado.

- Operadores Lógicos:
    1. `AND`: Nos permite encadenar otra condición en la Clausula de consulta, para que se cumpla una y otra condición sobre el registro para ser agregado a los resultados.
    2. `OR`: Nos permite encadenar otra condición en la Clausula de consulta, para que se cumpla u otra condición sobre el registro para ser agregado a los resultados.


Ej: 

```sql
/* AND */
SELECT * FROM result_exam WHERE result > 6 AND group=1;

/* OR */
SELECT * FROM result_exam WHERE group=1 OR group=2;
```
El ejemplo anterior (_AND_) nos entregará los resultados no solo de los estudiantes que hayan Obtenido más de 6 en su examen si no que también deben ser validados en el grupo de curso; Veremos los resultados los estudiantes que obtuvieron más de 6 en el examen del grupo **1**;


**Ordenar valores numéricos en la Clausula**:  
`ORDER BY` nos permite ordernar los valores de forma **ASCENDENTE** o **DESCENDENTE**.

Se encuentra por _defecto_ como **ASCENDENTE**.
Si son datos numéricos, los ordena según cantidad.
Si son datos de tipo string, los ordena por letra en el Abecedario.

**sintaxis**:  
SELECT * FROM [name_table] ORDER BY [name_column] [DESC /ASC];
```sql
SELECT * FROM results_exam ORDER BY result DESC;
```

Esto nos entregará todos los resultados de la columna de forma DESCENDENTE.

**Agrupar registros de Tablas**:  
Se trata de `GROUP BY`, esta nos permite agrupar por tipos de valores en una columna.

Nos entregará una tabla con los resultados. A esta tabla podemos agregarle columnas como podría ser con la función `COUNT(colunm_name)`.

`COUNT(colunm_name)`: Esta función únicamente permite su uso con la Clausula `GROUP BY`, con esta Clausula y la ejecución de la función, podemos obtener la cantidad de registros que existen por cada tipo de valor.

```sql
SELECT type, COUNT(id_student) FROM student GROUP BY type;
```

La clausula anterior se traduce a --> Genera un resultado en donde se vean de forma agrupada los _tipos_ de estudiante y cuenta la cantidad de estudiantes que existen en cada grupo de _type_.

## Sub Queries

Estas clausulas nos permiten generar Consultas anidadas; una consulta dentro de otra consulta.

Podemos hacer uso de esta funcionalidad ya sea como campo de una consulta o como valor para su validación dentro de un where

Nuestra `SubQuerie` puede tomar los campos que vayamos a extraer de nuestra consulta Padre.

- _**Como campo**_: Como campo podemos hacer 
- **Como valor de consulta**: De esta forma haciendo uso de algunos operadores podemos hacer uso de Sub Consultas para traer los valores que necesitemos y de la forma que necesitemos.

Supongamos que tenemos una entidad de Liga en donde cada liga va a contener atributos (nombre, cantidad, equipos, id_liga), En el atributo equipos tenemos una relación de muchos a uno (N:1) en donde muchos equipos pueden estar en una liga pero un equipo solo puede estar en una liga.

Necesitamos consultar todas las ligas que su promedio de puntos es mayor a la liga del meta.

Esta sería nuestra consulta:

```sql
SELECT name FROM liga WHERE (SELECT AVG(puntaje) FROM equipos WHERE liga='meta') < (SELECT AVG(puntaje) FROM equipos WHERE id_liga = id);
```


## Join Clausule

Se usa para combinar datos de dos o más tablas.

Este solicita un punto de enlace en el resultado de nuestra consulta.

Ejemplo:
```sql
SELECT character.id_character, character.name, status.name, gender.gender_name FROM character JOIN status ON character.status = status.id JOIN gender ON character.gender = gender.id;
```

De esta forma vamos a obtener la relación de los ids contenidos en cada clave foranea y traemos los nombres en la consulta de cada registro de caracter.

Se compone de una sección de campos los cuales podemos extraer con Sintaxis de Punto haciendo referencia a el nombre de la tabla. Además debemos de validar cómo se va a hacer referencia a un valor de dicha tabla con relación a la clave foranea de la misma.

## Operador `AS`

Este nos permite darle un nombre a un grupo de algo, Ya sea un valor de consulta o renombrar una tabla.

```sql
SELECT ch.id_ch, ch.name, st.name, gen.gender_name FROM character as ch JOIN status as st ON ch.status = st.id JOIN gender as gen ON ch.gender = gen.id;
```

Al renombrarla podemos simplicar la cantidad de carácteres de nuestra consulta.

## INNER JOIN

Nos permite obtener los valores que existan dentro de un grupo de registros que le indiquemos.

```sql
SELECT name, id_character FROM character WHERE location IN (SELECT id FROM locations WHERE name = 'New York');
```

Esta consulta lo que va a realizar es obtener en primera instancia los campos [name, id_character] pero los va a filtrar especificando que el registro debe de existir dentro ([IN --> clausula]) de los resultados de la subconsulta realizada, La cual va a traer todos los _id_ de los registros que cuenten con la condición de tener en su atributo _name_ el dato ['New York'].

## Para investigar

CREATE 
INSERT INTO
SELECT
FROM
SUM
WHERE