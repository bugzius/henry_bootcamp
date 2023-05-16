const {Episode, Character} = require("../db");

const findAllEpisode = async function(){
    const episodes = await Episode.findAll({
        include: {
            model: Character,
            through:{
                attributes:[]
            }
        },
    });
    return episodes;
};

module.exports = {
    findAllEpisode
}