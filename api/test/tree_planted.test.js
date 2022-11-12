const request = require("supertest");
const app = require("../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'trees_planted'", () => {
    test("[GET /trees_planted] Recupera todos os itens de arvores plantadas", async () => {
        const res = await request(app)
            .get("/trees_planted")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);

        const objToTest = res.body[0];

        expect(objToTest).toHaveProperty("id");
        expect(objToTest).toHaveProperty("date");
        expect(objToTest).toHaveProperty("name");
        expect(objToTest).toHaveProperty("tree_id");
        expect(objToTest).toHaveProperty("user_id");
        expect(objToTest).toHaveProperty("local_id");
    });

    test("[GET /trees_planted/{id}] Recupera um item de árvore plantada por id", async () => {
        const res = await request(app)
            .get("/trees_planted/2")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);

        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("date");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("tree_id");
        expect(res.body).toHaveProperty("user_id");
        expect(res.body).toHaveProperty("local_id");
    });

    test("[POST /trees_planted] Cadastro de plantio de árvore", async () => {
        const res = await request(app)
                            .post("/trees_planted", {
                                    "name": "Abacateiro",
                                    "date": "2022-09-07",
                                    "tree_id": 1,
                                    "local_id": 1,
                                    "user_id": 1
                                })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[DELETE /trees_planted/{id_arvore}] Remove um item de árvore plantada por id", async () => {
        const res = await request(app)
            .delete("/trees_planted/4")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 202
        expect(res.statusCode).toBe(202);
    });
});
