const axios = require('axios');

function getACharacter (res, id) {
    //* Perfect Inherance
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const {status, data} = response;
            res.writeHead(status, {'Content-Type':'application/json'});
            res.end(JSON.stringify(data));
        });
}
const ROUTE_NAME_GET_CHARACTER = 'character';

module.exports = {
    ROUTE_NAME_GET_CHARACTER,
    getACharacter
}