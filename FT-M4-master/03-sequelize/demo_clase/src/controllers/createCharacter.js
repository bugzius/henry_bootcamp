const { Character } = require('../db');

const createCharacter = async ({episodes, ...data}) => {
    const newCharacter = await Character.create(data);
    newCharacter.addEpisodes(episodes);
    return newCharacter;
};

module.exports = createCharacter;