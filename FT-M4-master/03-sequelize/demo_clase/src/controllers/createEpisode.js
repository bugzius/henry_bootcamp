const {Episode} = require("../db");

const createEpisode = async ({name}) => {
    const episode = await Episode.create({name});
    return episode;
};

module.exports = { 
    createEpisode
}