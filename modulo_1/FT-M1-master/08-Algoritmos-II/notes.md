# Algoritmos II

## Quick Sort

Selecciona un elemento de forma aleatorio dentro del arreglo y este será el "pivot" y separará el array en 2; a un lado estarán los menores a ese "pivot" y al otro los mayores. Este proceso se repite con las subdivisiones hasta llegar a su mínima expresión.

## Merge Sort

Divide el arreglo en dos partes desde la mitad, ordena recursivamente los dos puntos y une los arreglos.

Divide hasta su mínima expresión que sería 1 elemento, cuando va subiendo compara por índices los arreglos obtenidos; al comparar crea un nuevo arreglo validando los valores de los arrays retornados desde un índice en común, si el de el arreglo de la izquierda es menor a el valor en índice de el arreglo de la derecha, entonces el índice para el arreglo de la izquierda avanza un punto, Este mismo proceso se realiza hasta que ya no hayan elementos en los número de índices.
