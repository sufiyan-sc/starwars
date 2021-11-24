import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loading from './Loader';
import MovieList from './MovieList';

const url = 'https://swapi.dev/api/films/';

function RecipeApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getMovie = (event) => {
    event.preventDefault();
    // const movieName = event.target.elements.movieName.value;
  };
  return (
    <div className="MovieApp">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header getMovie={getMovie} />
          <MovieList movies={movies} />
        </>
      )}
    </div>
  );
}
export default RecipeApp;
