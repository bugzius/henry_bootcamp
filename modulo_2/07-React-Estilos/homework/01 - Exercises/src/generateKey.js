const generate = () => {
    //Generador - Get a Infinite Iterator
    const obj = function* () {
        while (true) {
            yield Math.floor(Math.random() * Date.now());
        }
    }();;

    //Get a Id key relative
    return function () {
        return obj.next().value;
    };
};

export const generatorKey = generate();