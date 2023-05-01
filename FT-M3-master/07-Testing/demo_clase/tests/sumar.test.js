
const { sumar } = require('../index');

xdescribe('La función sumar',  () => {
    it('debe ser una función', () => {
        expect(typeof sumar).toBe('function');
        expect(typeof sumar).not.toBe('number');
        expect(typeof sumar).not.toBe('string');
        expect(typeof sumar).not.toBe('null');
        expect(typeof sumar).not.toBe('undefined');
    });

    it('debe de retornar un error si los valores no son números', () => {
        expect(() => sumar('esa', 'es mi papá')).toThrow('Los dos argumentos no son un número');
        /* 
            Para validar que se envíe un error en la Ejecución de una función
            debemos de encapsularla en una función.
        */
        expect(() => sumar(8, 'es mi papá')).toThrow('Los dos argumentos no son un número');
        expect(() => sumar('esa', 18)).toThrow('Los dos argumentos no son un número');
    });

    it('Debe retornar la suma correctamente', () => {
        const n1 = 3, n2 = 4, total = 7;
        expect(sumar(n1,n2)).toBe(total);
        expect(sumar(n2,19)).toBe(23);
        expect(sumar(n1,19)).toBe(22);
        expect(sumar(n1,n2)).not.toBe(34);
    })
});