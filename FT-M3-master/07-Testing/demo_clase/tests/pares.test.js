const { pares } = require('../index');

xdescribe('La función pares', () => {
    
    it('debe de ser una función', () => {
        expect(typeof pares).toBe('function');
        expect(typeof pares).not.toBe('number');
        expect(typeof pares).not.toBe('object');
        expect(typeof pares).not.toBe('string');
        expect(typeof pares).not.toBe(null);
        expect(typeof pares).not.toBe(undefined);
    });

    it('debe de retornar un error si su argumento no es un arreglo', () => {
        expect(() => pares(undefined)).toThrow('El argumento no es un arreglo');
        expect(() => pares('hello world')).toThrow('El argumento no es un arreglo');
        expect(() => pares(188)).toThrow('El argumento no es un arreglo');
        expect(() => pares(null)).toThrow('El argumento no es un arreglo');
    });

    it('debe de recibir el arreglo de pares', () => {
        expect(pares([1,2,3,4,5,6,7,8,9,13,15,12,19,18])).toEqual([2,4,6,8,12,18]);
        expect(pares([])).toEqual([]);
        expect(pares([1,3,5,7,9])).toEqual([]);
        expect(pares([1,2,3,4,5,6,7,8,9,13,15,12,19,18, 98,72])).toEqual([2,4,6,8,12,18,98,72]);
    });
});