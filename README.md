# Desafio-01
## :octocat: Conceitos do NodeJS
![node](https://user-images.githubusercontent.com/35371615/76168797-9d729980-6151-11ea-856c-aac7ba27ab63.png)

# Sobre o Desafio
Criar uma aplicação para armazenar projetos e suas tarefas do zero utilizando Express.

### Rotas 

- `GET /repositories ` : Rota que lista todos os repositórios;

- `POST /repositories ` : A rota deve receber title, url e techs dentro do corpo da requisição,
sendo a URL o link para o github desse repositório; 

- `PUT /repositories/:id`: A rota deve alterar apenas o title, a url e as techs do repositório
que possua o id igual ao id presente nos parâmetros da rota;

- `PUT /repositories/:id/like`: A rota deve aumentar o número de likes do repositório específico
escolhido através do id presente nos parâmetros da rota, a cada chamada dessa rota, o número de 
likes deve ser aumentado em 1

- `DELETE /repositories/:id`: A rota deve deletar o repositório com o id presente nos parâmetros da rota;
### Middlewares
- validadeRepositoryId
