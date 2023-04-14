//=--------- Promises -----------=

const axios = require('axios');

axios.get('https://rickandmortyapi.com/api/characterss')
    .then(response => {
        console.log(response.data);//Handler success
    }, console.log)
    .then(() => console.log('MAMAHUEVOOOOOOOOOOOOOO'))//Error Handler

//Axios y las promesas me permite acceder a un posible valor de resolución.

const Weak = new WeakMap();
Weak.set({['<pending>']:null})