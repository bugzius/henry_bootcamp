/* ¡Escribe tus comandos en este archivo! */

const ejercicio02 = 'SELECT * FROM movie WHERE duration < 90;';

const ejercicio03 = 'SELECT * FROM movie WHERE year >= 1930 AND year <= 1940;';

const ejercicio04 = 'SELECT * FROM movie WHERE title LIKE %til%';

const ejercicio05 = 'SELECT * FROM movie WHERE (SELECT ARRAY_LENGTH(actors,1) FROM movies WHERE )';

const ejercicio06 = '';

const ejercicio07 = 'SELECT * FROM movie WHERE title LIKE %Fast and% AND year=2016';

module.exports = {
   ejercicio02,
   ejercicio03,
   ejercicio04,
   ejercicio05,
   ejercicio06,
   ejercicio07,
};
