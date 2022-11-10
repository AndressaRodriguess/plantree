# Roteiro de implementação - Back-end

Para fazer o clone deste repositório, execute o comando

```git
https://github.com/AndressaRodriguess/plantree.git
```

Instale as dependências do projeto com o NPM executando no módulo api o comando a seguir:

```git
npm install
```
Duplique o arquivo .env.example e o renomeie para .env, o arquivo .env deve ser preenchido com um valor para cada chave conforme especificado

Teste a aplicação executando o nodemon ou npm start

npm run dev

ou

npm start


# Estrutura projeto Web

Neste projeto, temos 3 módulos:

- **api**: api rest com a lógica de negócio da aplicação. Ela fará a comunicação com o banco de dados;
- **auth**: api rest de módulo dedicado ao gerenciamento de usuários da aplicação;
- **web**: view da aplicação;


## Testes no Jest
Para executar os testes, utilize o comando abaixo no diretório onde está o arquivo package.json.

```bash
  npm run test
```