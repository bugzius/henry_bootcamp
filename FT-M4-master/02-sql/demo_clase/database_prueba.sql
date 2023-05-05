CREATE TABLE character(
    id_character serial PRIMARY KEY, /* Es un campo que no puede falta, Por defecto es NOT NULL una PRIMARY KEY*/
    name varchar(60) NOT NULL,
    status varchar(20) NOT NULL,
    location integer REFERENCES locations(id),
    origin integer REFERENCES origin(id),
    gender integer REFERENCES gender(id)
);

CREATE TABLE locations (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL UNIQUE,
);

CREATE TABLE origin(
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL UNIQUE
);

CREATE TABLE gender(
    id serial PRIMARY KEY,
    gender_name varchar(10) UNIQUE NOT NULL
);

/* Insertar valores a las tablas */

INSERT INTO gender (gender_name) VALUES ('female');


