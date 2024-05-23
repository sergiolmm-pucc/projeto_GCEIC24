const request = require('supertest');
const express = require('express');
const impostoRoute = require('../routes/ifspRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use('/ifsp', impostoRoute);

describe('Testes de Cálculo de Imposto', () => {
    test('Cálculo correto do imposto e valor final', async () => {
        const response = await request(app)
            .post('/ifsp')
            .send({ price: '100', tax: '10' });

        expect(response.status).toBe(200);
        expect(response.body.imposto).toBe('10.00');
        expect(response.body.valorFinal).toBe('110.00');
    });

    test('Valores incorretos retornam erro', async () => {
        const response = await request(app)
            .post('/ifsp')
            .send({ price: 'abc', tax: '10' });

        expect(response.status).toBe(400);
    });
});
