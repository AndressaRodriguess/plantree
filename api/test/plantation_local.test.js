const request = require("supertest");
const app = require("../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'trees'", () => {
    test("[GET /plantation_locations] Recupera todos os itens de locais de plantio", async () => {
        const res = await request(app)
            .get("/plantation_locations")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);

        const objToTest = res.body[0];

        expect(objToTest).toHaveProperty("id");
        expect(objToTest).toHaveProperty("name");
        expect(objToTest).toHaveProperty("user_id");
    });

    test("[GET /plantation_locations/{id}] Recupera um item de local de plantação por id", async () => {
        const res = await request(app)
            .get("/plantation_locations/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);

        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("user_id");
    });

    test("[POST /plantation_locations] Criação de um novo item de local de plantio de árvore", async () => {
        const res = await request(app)
                            .post("/plantation_locations")
                            .send({
                                "name": "Praça pública",
                                "user_id": "1"
                              })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[DELETE /plantation_locations/{id_arvore}] Remove um item de local de plantação por id", async () => {
        const res = await request(app)
            .delete("/plantation_locations/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 202
        expect(res.statusCode).toBe(202);
    });
});
