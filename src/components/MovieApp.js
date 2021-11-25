import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loading from './Loader';
import MovieList from './MovieList';

const url = 'https://swapi.dev/api/films/';

function MovieApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filterVal, setFilterVal] = useState('');

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    setIsLoading(false);
  };
  const filterSearch = (input) => {
    setFilterVal(input);
  };
  // const filterSearch = (input) => {
  //   console.log(input);
  //   const titleSearch = movies.map((movie) => {
  //     // return { movie, title: movie.title.toLowerCase() };
  //     return movie.title.toLowerCase().includes(input) ? movie : {};
  //   });
  //   setMovies(titleSearch);
  // };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="MovieApp">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header filterSearch={filterSearch} />
          <MovieList movies={movies} filterVal={filterVal} />
        </>
      )}
    </div>
  );
}
export default MovieApp;
