const request = require('supertest');
let {deleteAll, server} = require('../server');

const api = request(server)

describe('el servidor', () => {
    it('Debe retornar en su respuesta un status 200 a GET "/"', async () => {
        const res = await api.get('/');
        expect(res.statusCode).toEqual(200);
    });

    //Si evaluamos una ruta inexistente, nos regresará el error
    it('Debe retornar un status 404 en GET "/Noks"', async () => {
        const res = await api.get('/Noks');
        expect(res.statusCode).toEqual(404);
    });

    it('en la ruta GET /user/:id debe retornar el objeto creado.', async () => {
        let id = 0;
        const obj = {
            name:'David',
            yearOld: 12
        };

        await api.post('/users').send(obj);

        const response = await api.get(`/users/${id}`);
        expect(response.body).toEqual({...obj, id});
    });

    it('Obtiene en GET /users todos los usuarios', async () => {
        const users = [
            {
                name:'David',
                yearsOld: 18,
                job:'Support Tecnician'
            },
            {
                name:'Andres',
                yearsOld: 12,
                job:'Agricultor'
            }
        ]
        await api.post('/users').send(users[0]).expect(200);
        await api.post('/users').send(users[1]).expect(200);

        const response = await api.get('/users');
        expect(response.body.length).toBe(users.length);
    });
});

beforeEach(() => {
    deleteAll();
});