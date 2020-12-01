# theMovieDb
### Hi there 👋
### The scope of the project is:
#### 'Construir um micro serviço dockerizado com network compartilhada entre a aplicação e o banco que seja capaz de capturar e indexar as informações de um filme e suas legendas em uma base de dados à partir de chamadas a endpoints. Você pode construir.'
### Stacks and API'S:
#### Using <a href="http://themoviedb.org/"> 'themoviedb' </a> api we have two endpoint to work:
#### 1 - https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US . This one Get the primary information about a movie.
#### 2 - https://api.themoviedb.org/3/movie/{movie_id}/translations?api_key=<<api_key>>. This one Get a list of translations that have been created for a movie.

#### Using <a href="https://docs.docker.com/compose/"> docker-compose </a> we can define and run multi-container Docker applications.

#### Using <a href="https://joi.dev/"> joi </a> we can define schema description and data validator for JavaScript.

#### Using <a href="https://www.mongodb.com/"> MongoDB </a> we can work with <a href="https://medium.com/permalink-univesp/nosql-o-que-s%C3%A3o-onde-habitam-do-que-se-alimentam-2ccd4cc39571"> NoSQL</a> database.

#### Using <a href="https://expressjs.com/pt-br/"> EspressJS framework </a> we can create routes abstractions, middlewares and many other functions to facilitate the creation of both API's and SPA's.

#### '<a href="https://jestjs.io/"> Jest </a> is a JavaScript testing framework maintained by Facebook, Inc. with a focus on simplicity.'

### To start the project:

1. Clone the repository

   - HTTPS:  `git clone https://github.com/brenomesquita/theMovieDb.git`.
   - SSH: `git clone git@github.com:brenomesquita/theMovieDb.git`
   - Enter the repository folder you just cloned:
     - `cd theMovieDb`

2. Enter the `movie-details-with-translation` branch from the `main`

   - Check that you are in the `main` branch
     - Example: `git branch`
   - If not, switch to the `main` branch
     - Example: `git checkout main`

4. Install the dependecies

   - Using: `npm install`

5. Start the application

   - Using: `npm start` you will initialize the application
   - Using: `make up` you will initialize the with the docker-compose

### Application routes:
#### GET: 'http://localhost:3000/:id' return the api values without insert into our database.
#### POST: 'http://localhost:3000/:id' request the api and insert the values into our databade. *Duplicate values ​​are not allowed.*
#### POST: 'http://localhost:3000/database/:id' request the database value with the movieId.

## Enjoy!! 😊😊
#### My <a href="https://www.linkedin.com/in/brenomesquita/"> LinkedIn </a>.