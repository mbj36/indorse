# indorse 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Features

- [x] Trending Movies
- [x] Popular Movies
- [x] Top Rated Movies
- [x] Search Movies by title
- [x] Details of Movie
- [x] List of actor/actress
- [x] Details of actor/actress

## Tech stack

- VueJS
- Vue Router ( for navigation )
- Vuex (Just basic setup, although didn't required in app)
- Vuetify (Material CSS component for styling)
- Axios 

## Routes 

- `movies/trending - List of all trending movies`
- `movies/popular - List of all popular movies`
- `movies/top_rated - List of all top rated movies`
- `movie/:id - Based on id, detail of movie`
- `people/popular - List of all Popular actor/actress`
- `people/:id - Based on Id, detail of actor/actress`
- `search?q=query - Based on query, search results`