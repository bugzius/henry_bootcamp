# Tipos de Testing

## Unit Testing 
Son test para cada partecita de nuestro código. Son test de manera individual.

## Integration Test
La integración de Unit testing, son grupos de unit test para validar el comportamiento integrado de cada uno de ellos.

## End To End 

Son tests en un capa mucho más superior, nos permite realizar test sobre los funcionalidades de nuestra interfáz web.

# Unit testing

¿Cómo es un buen test unitario?

* Completamente automatizable; deben de ser totalmente independientes, Sin interacción dependiente.
* Poder ejecutarse en cualquier orden en conjunto de otros test. No debe de tener un orden de los test unitarios.
* Siempre el test debe de tener el mism resultado. Test con resultado consistente.
* Debe de ser rápido.
* Testea un solo concepto lógico del sistema. Testea unicamente una sola cosa. Testea en pequeñas partes.
* Debe de ser sencillo de leer.
* Facil de manipular. ayuda a el mantenimiento

# ¿Por qué son importantes el testing?

Basicamente cuando nuestra sistema de software es pequeño no vemos el problema y se evidencia un desarrollo muy más ágil. Pero esto cambia cuando el código de nuestro sistema de software ya crece el testing se convierte en algo fundamental ya que a lo largo del tiempo nos ayuda a reducir el tiempo buscando qué está fallando. Al usar el TDD nos permite identificar facilmente la falla en nuestro sistema de softawre.

# Test Driven Development

Desarrollo guiado por las pruebas.

Es importante usar los test antes de desarrollar la lógica de nuestro código, ya que podemos anticiparnos a conocer qué debe de solucionar o retornar nuestro código.

## Fases
* (Re)write the test: Escribir los test
* En primera instancia crear los test con los resultados que no deben de retornar nuestra función.
* Ejecutar test sobre nuestra primera versión del código.
* Mejorar los test fallidos.
* Refactorizar el código; es hacer un performance sobre nuestro código sin cambiar la funcionalidad.

# Frameworks de Testing

Un frameowork es un super set sobre un lenguaje para un propósito objetivo.

## Jest
Tiene una assertion Library Included.

Para instalarlo nos situamos en la raíz de nuestra carpeta de preferencia y abrimos en una terminal allí. E insertamos el siguiente código para instalarlo. Cabe aclarar que es necesario tener Node.js y por consiguiente npm.

```cmd
    npm init -y
    npm i --save-dev jest
```

Jest, es un framework que no convierte dependiente a nuestro código, si no que más bien es una dependencia de desarrollo; una herramienta para el desarrollador.
Entonces debemos de instalarlo como tal.

Comandos para uso general de jest.
## Test Matching; para elegir archivos de test
```cmd
jest test-pattern // elegir directorio
jest test/test1.test.js // Pathname
jest -t test_describe // Testear un test específico dentro de un archivo.
```

## Jest Matachers; Métodos para comparar

Jest nos provee un Objeto que llamado expect(), al cual le vamos a enviar como argumento el valor que queremos testear. Este objeto tiene una cantidad de métodos para dicha tarea; comparar valores.

Todos los métodos en esta lista son pertenecientes a expect();
* toBe() // Nos permite evaluar un valor exacto.
* toEqual() // Para verificar de manera recursiva los valores internos de un Objeto o Arreglo como resultado.
* toBeNull, toBeUndefined, toBeDefined
* toBeThurty() // Evalúa si valueOf se un valor thurty
* toBeFalsy() // Evalúa si valueOf se un valor Falsy

## Para números
* toBeGreatherThan, toBeGreaterThanOrEqual, toBeLessThan, toBeLessThanOrEqual
* toBeCloseTo() // Para números con decimales
* toMatch() // compara una expresión regular
* toContain() // Verifica si dentro de un arreglo existe un elemento
* toThrow() // Valida si la función retorna un error

## Running Options

* xit: evita que un test se ejecute
* it.only: ejecuta unicamente ese test
* describe: permite agrupar varios test en una misma temática.
* xdescribe: evita que todos los test del grupo se ejecuten.

