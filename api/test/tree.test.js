const request = require("supertest");
const app = require("../app");
const TOKEN = process.env.TOKEN_TEST || "";

describe("Testes para o path 'trees'", () => {
    test("[GET /trees] Recupera todos os itens de arvores", async () => {
        const res = await request(app)
            .get("/trees")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);

        const objToTest = res.body[0];

        expect(objToTest).toHaveProperty("id");
        expect(objToTest).toHaveProperty("name");
        expect(objToTest).toHaveProperty("family");
        expect(objToTest).toHaveProperty("scientific_name");
        expect(objToTest).toHaveProperty("origin");
        expect(objToTest).toHaveProperty("class");
        expect(objToTest).toHaveProperty("genus");
        expect(objToTest).toHaveProperty("specie");
        expect(objToTest).toHaveProperty("group");
        expect(objToTest).toHaveProperty("description");
        expect(objToTest).toHaveProperty("createdAt");
        expect(objToTest).toHaveProperty("updatedAt");
    });

    test("[GET /trees/{id}] Recupera um item de árvore por id", async () => {
        const res = await request(app)
            .get("/trees/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 200
        expect(res.statusCode).toBe(200);

        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("family");
        expect(res.body).toHaveProperty("scientific_name");
        expect(res.body).toHaveProperty("origin");
        expect(res.body).toHaveProperty("class");
        expect(res.body).toHaveProperty("genus");
        expect(res.body).toHaveProperty("specie");
        expect(res.body).toHaveProperty("group");
        expect(res.body).toHaveProperty("description");
        expect(res.body).toHaveProperty("createdAt");
        expect(res.body).toHaveProperty("updatedAt");
    });

    test("[POST /trees] Criação de um novo item de árvore", async () => {
        const res = await request(app)
                            .post("/trees")
                            .send({
                                "name": "Abacateiro Tipo 1",
                                "family": "Lauraceae",
                                "scientific_name": "Persea americana",
                                "origin": "americana",
                                "division": "Magnoliophyta",
                                "class": "Magnoliopsida",
                                "genus": "Persea",
                                "specie": "P. americana",
                                "group": "Angiospermas",
                                "description": "O abacateiro cresce mais facilmente em solos leves, profundos, drenados e ligeiramente ácidos. As melhores condições climáticas são encontradas em regiões com chuvas em torno de 1200 milímetros anuais. São conhecidas mais de 500 variedades, de três origens diferentes: a guatemalteca, a antilhana e a mexicana. A parte comestível é a polpa verde-amarelada, de consistência mole, que envolve a grande semente."
                            })
                            .set('Authorization', `Bearer ${TOKEN}`)
                            .set("Content-Type", "application/json")
                            .set('Accept', 'application/json');
        // Espera que o código HTTP seja 201
        expect(res.statusCode).toBe(201);
    });

    test("[DELETE /trees/{id_arvore}] Remove um item de árvore por id", async () => {
        const res = await request(app)
            .delete("/trees/1")
            .set('Authorization', `Bearer ${TOKEN}`)
            .set('Accept', 'application/json');

        // Espera que o código HTTP seja 202
        expect(res.statusCode).toBe(202); 
        expect(res.body).toEqual("Árvore deletada");
    });
});
