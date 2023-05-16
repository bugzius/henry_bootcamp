const { Character, Episode } = require('../db');

const findAllCharacter = async (query = {}) => {
    const all = await Character.findAll({
        where:query,
        include:{
            model: Episode,
            through: {
                attributes:[]
            }
        }
    });
    return all;
};

module.exports = findAllCharacter;