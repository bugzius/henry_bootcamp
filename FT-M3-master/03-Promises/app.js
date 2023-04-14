class Promise2 {
    #resolveValue;
    #rejectValue;
    #fnThen;
    #fnCatch;

    constructor(callbackMain) {
        this.#resolveValue = undefined;
        this.#rejectValue = undefined;

        this.#fnThen = (value) => this.#resolveValue = value;
        this.#fnCatch = (error) => this.#rejectValue = error;

        callbackMain(this.#fnThen, this.#fnCatch);
    };
    catch(fn){
        this.#rejectValue ? fn(this.#rejectValue)
                          : undefined;
        return this;
    };
    then(fn){
        if (this.#resolveValue) {
            const valueReturn = fn(this.#resolveValue);
            return valueReturn ? valueReturn : this;
        }
        return this;
    };
}

const promiseValue = nRange => new Promise2((resolve, reject) => {
    const nR = parseInt(Math.random() * nRange);
    if(nR >= 5){
        return resolve(nR);
    }
    reject(`El valor ${nR} no es válido`);
});
promiseValue(10)
    .then((data) => console.log('perfecto ' + data))
    .catch(console.log);

/**
 * Holaaa Compañeros 👋!, Quiero picar sus cualidades de Curiosidad. Les vengo a contagiar un principio que me gusta mucho y es el de _Conocer cómo realmente funcionan las herramientas de código detrás del telón_.

Tomaré el ejemplo con un feature en JavaScript porque es el Lenguaje que he dedicado a conocer .

Las Promises... Sabemos cómo podemos hacer uso de ellas, pero algo que también sabemos es que está escrita con lógica pura de JavaScript. A lo que quiero llegar a que se percaten que nosotros mismos podríamos crear esta funcionalidad !!! 👀 🙀

Bueno, aquí les traigo una pequeña abstracción de lo que es una Promise de forma Interna creando esta misma desde Cero. Esta es una buena forma de ver la lógica detrás de las Promises y abrir nuestra mente a recrear muchas de las cosas que ya Existen en un lenguaje como JavaScript o crear nuevas 👀 . 💪 
 */