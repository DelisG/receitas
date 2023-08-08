## :pencil: Documentação técnica

Seja bem-vindo à Documentação Técnica do projeto **Receitas App**! Aqui você terá acesso a informações detalhadas sobre o projeto, as tecnologias empregadas e a arquitetura utilizada. Também encontrará explicações sobre o modelo de esquemas de API, os testes de rotas implementados e instruções claras para clonar o repositório . Espero que esta documentação seja útil e facilite a compreensão dea os aspectos essenciais para o desenvolvimento e manutenção deste sistema.


## Tecnologias Utilizadas

| Tecnologia | Função na aplicação                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript | Linguagem de programação utilizada para escrever o código do back-end da aplicação.                                                                  |
| Node.js    | Ambiente de execução JavaScript assíncrono orientado a eventos, utilizado como base para a aplicação fornecendo bibliotecas.                         |
| Nodemon    | Ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor durante o desenvolvimento.                          |
| Mongoose   | Biblioteca do Node.js que simplifica a interação com o MongoDB, um banco de dados NoSQL orientado a documentos.                                      |
| Express    | Framework web para Node.js que simplifica o desenvolvimento de aplicativos e APIs RESTful.                                                           |
| Chalk      | Pacote npm para formatação de texto no console, utilizado para melhorar a legibilidade dos logs e mensagens de saída no ambiente de desenvolvimento. |
| MongoDB    | Banco de dados NoSQL orientado a documentos, usado para armazenar os dados do projeto.                                                               |
| Postman    | Plataforma de testes de API, utilizada para testar e documentar as requisições e respostas do projeto.                                               |

## 📁 Arquitetura do Projeto

```
 📁receitas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 receitaController.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 receita.json
   |  |    |- 📄 receitas.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 receita.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js


```

## :memo: Esquema da API usando Mongoose (MongoDB)

```
const receitaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tempo_de_cozimento: { type: String, required: true },
  ingredientes: { type: [String], required: true },
  modo_de_preparo: { type: String, required: true },
});
```
## :memo: Modelo de esquema para inserção de dados no banco de dados.

```
  {
    "nome": "nome da receita",
    "tempo_de_cozimento": "tempo de cozimento",
    "ingredientes": [
      "ingrediente 1",
      "ingrediente 2",
      "ingrediente 3",
      "ingrediente 4",
      "ingrediente 5",
      "ingrediente 6"
    ],
    "modo_de_preparo": "modo de preparo"
  }
```

## :rocket: Testando Rotas

 <h3> Métodos e rotas Utilizados:</h3>

| Verbo  | EndPoint  | Descrição do Rota                                 |
| ------ | --------- | ------------------------------------------------- |
| GET    | /receitas | Listar todas as receitas cadastrados              |
| GET    | /:id      | Mostra o cadastro da receita por ID               |
| POST   | /         | Registra uma nova receita                          |
| PUT    | /:id      | Altera dados da receita identificada pelo id      |
| DELETE | /:id      | Remove o cadastro da receita identificada pelo id |

## Testando as APIs

Para testar as APIs do projeto, você pode utilizar o Postman. Siga as etapas abaixo:

1. Abra o Postman.
2. Importe a coleção de requisições do projeto, localizada no diretório `postman` do repositório.
3. Após importar a coleção, você poderá enviar as requisições para testar as funcionalidades disponíveis.

## Clonando o Repositório

Para clonar o repositório do projeto, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório em que deseja armazenar o projeto.
2. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/DelisG/receitas app.git
```

Certifique-se de substituir `DelisG` pelo seu nome de Usuário do GitHub.

## Executando o Projeto

Após clonar o repositório, siga as etapas abaixo para executar o projeto localmente:

1. Navegue até o diretório do projeto:

```bash
cd Receitas app
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor local:

```bash
npm start
```

O servidor será iniciado e estará pronto para receber requisições.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório para o seu próp

receita do GitHub. 2. Clone o repositório forkado para o seu ambiente de desenvolvimento local. 3. Crie uma branch para realizar suas alterações:

```bash
git checkout -b nome-da-sua-branch
```

4. Faça as alterações desejadas no código.
5. Commit suas alterações:

```bash
git commit -m "Descrição das alterações"
```

6. Envie suas alterações para o repositório remoto:

```bash
git push origin nome-da-sua-branch
```

7. Abra um pull request no repositório original, descrevendo suas alterações em detalhes.

<br>


:ribbon: Obrigada a você que chegou até aqui! Espero que as informações aqui fornecidas tenham sido úteis e que você possa aproveitar ao máximo este projeto. Se você tiver alguma dúvida adicional, consulte a documentação do código ou entre em contato comigo pelo email: ***delisgmarques@gmail.com***