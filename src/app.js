const express = require("express");
const cors = require("cors");

 const { uuid,isUuid } = require("uuidv4");

const app = express();


const repositories = [];

function validadeRepositoryId(request,response,next){
  const {id} = request.params;

  if(!isUuid(id)){
    return response.status(400).json({error : 'Invalid repository ID.'});
  }

  return next();
}

app.use(express.json());
app.use(cors());
app.use("/repositories/:id",validadeRepositoryId);
app.use("/repositories/:id/like",validadeRepositoryId);

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title,url,techs} = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryLikes = repositories.find(repository => repository.id === id);
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository with ID not found' });
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositoryLikes.likes,
  }

  repositories[repositoryIndex] = repository;

  return response.json(repository);
});

app.delete("/repositories/:id", (request, response) => {
  const {id} = request.params;
  const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoryIndex < 0){
    return response.status(400).json({erro : 'Repository not faund.'});
  }
  repositories.splice(repositoryIndex,1);
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repository = repositories.find(repository => repository.id === id);

const repositoryIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoryIndex < 0) {
    return response.status(400).json({ error: 'Repository with ID not found' });
  }

  repository.likes += 1;

  return response.json(repository);

});

module.exports = app;
