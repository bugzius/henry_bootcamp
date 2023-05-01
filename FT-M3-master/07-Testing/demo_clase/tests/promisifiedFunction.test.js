const { promisifiedFunction } = require('../index');

//Se suele usar para establecer un entorno de valores antes de que se inicien los tests.
beforeAll(() => {
    //Conexión con la base de datos
    console.log('Antes de que se ejecuten todos los tests');
});

//Después de cada test, se usa para ejecutar un proceso al finalizar.
afterAll(() => {
    //Se cierra la conexión a la base de datos.
    console.log('Después de que todos los tests se realizan');
});

//Antes de cada test, se usa para setear valores por referencia.
beforeEach(() => {
    //Se setea un array antes de cada test.
    console.log('Antes de Cada test');
});

//Después de cada uno los tests
afterEach(() => {
    console.log('Después de cada test');
});

xdescribe('promisifiedFunction', () => {
    it('debe resolverse en "Todo OK Mamahuevaso"', async () => {
        promisifiedFunction()
            .then(value => {
                expect(value).toBe("Todo OK Mamahuevaso");
            });
    });;
});