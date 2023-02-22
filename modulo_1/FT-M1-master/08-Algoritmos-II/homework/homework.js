'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Toma un elemento de forma aleatorio
  // Separa en 2, aun lado los mayores y al otro los menores
  // Si el arreglo cuenta con dos o más elementos realiza lo mismo del paso anterior, Recursividad
  //Unir los arreglos de izquierda a derecha (menor a mayor);

  if(array.length === 1){
    return array;
  }

  if(array.length > 1){
    //Divide los arreglos

    let left = [], equal = [], right = []; 
    const nR = Math.ceil(Math.random() * array.length - 1);

    for(let i = 0; i < array.length; i++){
      if(array[i] === array[nR]) equal.push(array[i]);
      if(array[i] > array[nR]) right.push(array[i]);
      if(array[i] < array[nR]) left.push(array[i]);
    }

    return [...quickSort(left),...equal,...quickSort(right)]
  }

  return array;
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Divide en 2 el array hasta su mínima expresión
  //al unirlos valida cómo debe de juntarlos
  if(array.length === 1) return array;

  if(array.length > 1){
    //Divide el Arreglo en Dos
    const divideN = Math.round(array.length / 2);
    
    const leftArr = mergeSort(array.slice(0,divideN)); //[1]
    const rightArr = mergeSort(array.slice(divideN));  //[2]
    
    
    // Merge a los arreglos de lado y lado
    let arrAux = [];
    while( leftArr.length !== 0 && rightArr.length !== 0 ){
      
      if(leftArr[0] > rightArr[0]){
        const val = rightArr.splice(0,1);
        arrAux.push(...val);
      };


      if(leftArr[0] < rightArr[0]){
        const val = leftArr.splice(0,1);
        arrAux.push(...val);
      };

      //Si son iguales
      if(leftArr[0] === rightArr[0]){
        const valL = leftArr.splice(0,1);
        const valR = rightArr.splice(0,1);

        arrAux.push(...valR);
        arrAux.push(...valL);
      };
    }
    return [...arrAux,...leftArr,...rightArr];
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
