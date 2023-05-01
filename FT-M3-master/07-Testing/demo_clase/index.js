const sumar = (a,b) => {
    if(isNaN(a) || isNaN(b)) throw Error('Los dos argumentos no son un número');

    return a + b;
};

const pares = (arr) => {
    if(!Array.isArray(arr)) throw Error('El argumento no es un arreglo');
    return arr.filter(val => val % 2 === 0);
};

const promisifiedFunction = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('Todo OK Mamahuevaso');
    },1000);
});

module.exports = {
    sumar,
    pares,
    promisifiedFunction
};

/* 
=------------- Qué cosas le quiero poner a prueba --------------=
- Que sea una función
- Que reciba 2 números
- Que sume
*/