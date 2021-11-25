import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, filterVal }) {
  console.log(filterVal);
  return (
    <div className="MovieList">
      {movies
        .filter((movie) => {
          if (filterVal === '') {
            return movie;
          } else if (
            movie.title.toLowerCase().includes(filterVal.toLowerCase())
          ) {
            return movie;
          }
          // movie.title.toLowerCase().includes(filterVal.toLowerCase());
          // return movie;
        })
        .map((movie) => {
          const {
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
          } = movie;
          return (
            <MovieCard
              title={title}
              key={episode_id}
              director={director}
              producer={producer}
              opening_crawl={opening_crawl}
              release_date={release_date}
            />
          );
        })}
    </div>
  );
}

export default MovieList;
