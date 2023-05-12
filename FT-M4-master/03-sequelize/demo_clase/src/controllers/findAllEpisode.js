const Episode = require("../models/Episode")

const findAllEpisode = async function(){
    const episodes = await Episode.findAll();
    return episodes;
};

module.exports = {
    findAllEpisode
}