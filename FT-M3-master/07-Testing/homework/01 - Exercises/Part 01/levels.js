const levelOne = (a, b) => {
    return a + b;
};

const levelTwo = (letras) => {
    if(letras.length <= 1) return letras;
    if(letras.length === 2) return letras[0];
    
    const letter1 = letras.shift();
    const letter2 = letras.pop();

    const values = {};

    for(let i = 0; i < letras.length; i++){
        const currentChar = letras[i];
        if(!values[currentChar]){
            values[currentChar] = 1;
            continue;
        }
        values[currentChar] += 1
    };

    return letter1 + letter2;
};

const levelThree = (a, b) => {
    return [...a, ...b].sort((a,b) => a-b);
};

const levelFour = (num) => {
    const arrNum = [...num.toString()];
    const nSum1 = arrNum.reduce( (init, n) => init + Number(n),0).toString();
	const nSum2 = [...nSum1].reverse().join('');
	const result = Number(nSum1) * Number(nSum2);
    return result === num;
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
