const antiTrollsSecurity = (string) => {
    if(typeof string !== 'string') throw Error('El argumento debe ser un string');
    if(string.trim() === '')return '';

    const arr = new Set(['u','o','i','e','a']);
    return ([...string].filter( v => !arr.has(v.toLowerCase()))).join('');
};

module.exports = antiTrollsSecurity;
