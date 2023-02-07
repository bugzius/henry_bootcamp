# Clase 04
## Recursion

Para aprender recursión, hay que aprender recursión.

Pensar de forma iterativa, ciclos. Repetir una tarea de forma sucesiva cambiando un factor que nos permite avanzar en sí mismo.
Se realiza de una manera que el problema se va resolviendo de forma iterativa adentro de sí mismo.

- Tareas repetitivas.
- Nos permite ahorrar de manera potencial la memoria.
- No aplica en muchos casos.

Para construir una solución de manera recursiva, vamos a realizar los siguiente:
1. Buscar el caso de corte final, o cuando finalizaría nuestra ejecución. (¿Se cumple mi condición de Corte?)
2. Vamos a ir retornando nuestra misma función con la lógica programada, pensando siempre en nuestro caso de corte.

- Al establecer nuestras condiciones de corte (en donde no vamos a retornar nuestra función) vamos a retornar un valor base. nuestra función en su primera ejecución si llegase a entrar a retornar nuestra función, es necesario retornarla con vía a que llegue a nuestro caso de corte, entonces de esta manera se va a ejecutar a sí misma hasta que llegue a un caso de corte.

```javascript
    function fact(n){
        if(n <= 0) return 0;
        if(n === 1) return 0;
        return n * fact(n-1);
    }
    fact(4); // 24

    /*
    fact(4) = 4 * fact(3) = 4 * 6 = 24
    fact(3) = 3 * fact(2) = 3 * 2 = 6
    fact(2) = 2 * fact(1) = 2 * 1 = 2
    fact(1) = 1;
    */

```

# Estructuras de Datos

Es la forma de organizar la información o los datos.

## Arreglos
Son posiciones en memoria de forma consecutiva.

## Sets
Listas de elementos sin indices, no permiten elementos repetidos.

```javascript
set.add();
set.has();
set.delete();
set.clear();
set.size
```

## Last In First Out
El Último en entrar en es el primero en salir. Esto hace referencia a la pila de ejecución.

## First In - First Out
El primero en entrar es el primero que sale. Esto es equivalente a una cola.