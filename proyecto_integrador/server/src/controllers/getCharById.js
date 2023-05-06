const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios.get(`${process.env.API_URL}/${id}`);

        const charFilteredData = {
            id:data.id,
            name: data.name,
            status: data.name,
            species: data.species,
            gender:data.gender,
            origin: data.origin,
            location: data.location,
            image: data.image,
            created: data.created,
            episode: data.episode
        };
        
        res.status(200).json(charFilteredData);
    } catch ({message}) {
        res.status(404).json({error:message});
    }
}

module.exports = {
    getCharById
}