# SQL

Objetivos de la Lecture.

- Aplicar comando de consulta.
- Administrar una base de datos por medio de Structure Query Language (SQL).
- Crear una base de datos con PostgreSQL

## SQL y sus Comandos
Es un lenguaje de consultas usado para administrar de forma Eficiente y segura Bases de Datos _relacionales_.

Este lenguaje es muy popular y usado por muchos sistemas de Gestión de Bases de Datos, Es un estandar en el manejo de Bases de Datos relacionales.

Este sistema también permite el uso de expresiones y definiciones / creaciones de valores.

Se estructura por medio clausulas; son un conjunto completo de instrucciones para generar un impacto en la base de datos.

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

CREATE DATABASE [NAME]
