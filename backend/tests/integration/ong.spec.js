const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
            //.set('authorization', 'qsdsq') -- para os headers
        const response = await request(app).post('/ongs').send({
            name: "APAMA2",
            email: "contato@conta.br",
            whatsapp: "1234567890",
            city: "Monte Alto",
            uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    })
})