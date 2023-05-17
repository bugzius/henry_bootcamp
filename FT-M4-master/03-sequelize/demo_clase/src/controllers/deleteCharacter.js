const { Character } = require('../db');

const deleteCharacter = async (id) => {
    const deletedElement = await Character.destroy({
        where:{
            id
        }
    });
    if(!deletedElement) throw new Error('El id no existe');
    return deletedElement
};

module.exports = deleteCharacter;