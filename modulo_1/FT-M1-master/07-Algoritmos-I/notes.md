# Algoritmo
Es un conjunto preciso de Instrucciones o reglas bien definidas, ordenadas y finitas que permite cumplir un objetivo principal o bien también puede decirse como la aplicación de pasos ordenados precisos para resolver un problema.

## Características de un buen Algoritmo
1. Resuelve un problema.
2. Debe de ser comprensible, el código como la forma de hacerlo.
3. Debe ser eficienciente; la menor cantidad de pasos posibles para la solución objetivo.

## Eficiencia de un algoritmo

En el principio de los tiempos, el espacio y cómo se administraba era clave para nuestros programas, porque el espacio costaba y mucho, y empezó siendo el factor clave dejando atrás el tiempo, no importaba si se demoraba mucho si no que ocupara poco espacio, luego estas brechas se fueron achicando y el tiempo de procesamiento de dichos datos empezó a ser lo más lo más relevante.

El manejo eficiente nos permite aportar velocidad en la ejecución de nuestro código.

## ¿Cómo medimos la eficiencia?
- Tiempo
- Espacio
- Red, Gráficos, Hardware.

## Fuerza Bruta

Es validar por cada uno de los elementos  en un grupo de datos.

## Medir la complejidad de nuestro algoritmo.

Es muy importante analizar la complejidad de nuestro algoritmo.
no es lo mismo n pasos a log2(n) pasos; es decir, con log2(n) reducimos la cantidad de pasos y se realiza de manera más eficiente.

## Cota Superior asintótica
- Big O Notation / Notación Grande

```javascript
//N -> pasos
for -> N
array[1] -> 1
for(for()) -> N^2
```
# Algoritmo de Ordenamiento

- Bubble sort: Evalúa de manera iterativa de dos en dos itercambiando las posiciones según la validación que se necesite. Toma el valor más grande y lo compara con el resto hasta cuando ya no sea el más grande y lo deja en esa posición.

- Insertion sort: toma el valor más pequeño y valída hacia atrás en cual posición debe de estar.
- selection sort: Detecta el más pequeño alcanzado y lo inserta en la posición correspondiente; itera hasta encontrar el más pequeño y lo cambia al indice head actual y sucesivamente...