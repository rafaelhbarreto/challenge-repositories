const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

// global variable with all repositories 
const repositories = []; 

/**
 * List all repositories 
 * 
 */
app.get('/repositories', (request, response) => {
    return response.json(repositories); 
}); 

/**
 * Create a new repository
 * 
 */
app.post('/repositories', (request, response) => {

    const {title, url, techs, likes = 0 } = request.body; 

    const repository = {
        id: uuid(),
        title, 
        url, 
        techs, 
        likes
    }

    repositories.push(repository); 

    return response.json(repository); 
});

/**
 * Update a repository
 * 
 */
app.put('/repositories/:id', (request, response) => {

    const {id} = request.params;
    const {title, url, techs} = request.body;

    // iterate the repositories array and return the index, if exists
    const repositoryIndex = repositories.findIndex(repository => repository.id == id); 
    
    if(repositoryIndex < 0) {
        return response.status(400).json({
            error: "Repository not found!"
        });
    }
    
    const likes = repositories[repositoryIndex].likes; 
    const repository = {
        id,
        url, 
        title, 
        techs,
        likes 
    }

    repositories[repositoryIndex] = repository; 

    return response.json({
        id,
        url,
        title,
        techs,
        likes
    }); 
});

/**
 * Delete a specific repository
 * 
 */
app.delete('/repositories/:id', (request, response) => {
    const {id} = request.params; 
    const repositoryIndex = repositories.findIndex(repository => repository.id == id); 

    if(repositoryIndex < 0) {
        return response.status(400).json({
            error: 'Repository not found!'
        });
    }

    repositories.splice(repositoryIndex, 1); 

    return response.status(204).send();
}); 

/**
 * Increment a like number of an repository 
 * 
 */
app.post('/repositories/:id/like', (request, response) => { 

    const {id} = request.params; 
    const repositoryIndex= repositories.findIndex(repository => repository.id == id); 

    if(repositoryIndex < 0) { 
        return response.status(400).json({
            error: 'Repository not found!'
        });
    }

    // increment the number of likes
    const repository = repositories[repositoryIndex];
    repository.likes += 1; 

    return response.json({
        likes: repository.likes
    }); 
});

module.exports = app;
