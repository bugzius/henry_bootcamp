const axios = require('axios');

function getACharacter (res, id) {
    //* Perfect Inherance
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            const {status, data} = response;

            const charFilterData = {
                name: data.name,
                gender: data.gender,
                species: data.species,
                status: data.status,
                image: data.image,
                id: data.id,
                created: data.created,
                origin: data.origin,
                location: data.location
            };

            res.writeHead(status, {'Content-Type':'application/json'});
            res.end(JSON.stringify(charFilterData));
        })
        .catch((err) => {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end(err.message);
        });
}
const ROUTE_NAME_GET_CHARACTER = 'character';

module.exports = {
    ROUTE_NAME_GET_CHARACTER,
    getACharacter
}