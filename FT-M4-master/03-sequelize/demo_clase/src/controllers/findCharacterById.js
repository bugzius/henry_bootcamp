const { Character, Episode } = require('../db');

const findCharacterById = async (id) => {
    const character = await Character.findByPk(id,{
        include: {
            model: Episode,
            attributes:['name'],
            through:{
                attributes:[]
            }
        }
    });
    if(!character.id) throw new Error('El personaje no existe');

    return character;
};

module.exports = findCharacterById;