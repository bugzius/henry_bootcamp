'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1]
  while(num > 1){
    let i = 2;
    while(true){
      if(num % i === 0){
        num = num / i;
        arr.push(i);
        break;
      }
      i++;
    }
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length; i ++){
    //If existing elements to swap action (!)
    let swaps = true;
    for(let j = 0; j < array.length - i ; j++){
      //Validación, si elemento actual es mayor a i+1
      if(array[j] > array[j+1]){
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
        //If exist swap action
        swaps = false;
      }
    }
    if(swaps) break;
  }
  return array;
}
/**
 * 1. Estabamos validando sobre una posición estática, que al cambiar
 * ya no contenía el mismo valor.
 * 2. Estabamos cambiando los valores en las posiciones pero se perdían valores
 * previamente cambiados.
 * 3. El primer ciclo no es relavante a las posiciones de validación. Solo es
 * una guía para determinar el máximo de recorridos para ordernar los valores.
 * 
 */


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i < array.length; i++){
    let j = i - 1, aux = array[i];
    while(j >= 0 && array[j] > aux){
      array[j+1] = array[j];
      --j;
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 0; i < array.length; i++){
    let min = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[min] >= array[j]){
        min = j;
      }
    }
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}
console.log(selectionSort([1,4,2,2,3,1,5]));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
