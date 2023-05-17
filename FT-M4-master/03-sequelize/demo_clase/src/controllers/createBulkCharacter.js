const { Character } = require('../db');

const createBulkCharacter = async ({characters}) => {
    const createdCharacters = await Character.bulkCreate(characters);
    return createdCharacters;
};

module.exports = createBulkCharacter;