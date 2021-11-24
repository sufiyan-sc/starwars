import React from 'react';
import StarWarsStrokeLogo from '../assets/starwars-stroke-logo.svg';
import useToggleState from '../hooks/useToggleState';

function MovieCard({ title, director, producer, release_date, opening_crawl }) {
  const [onSelect, setOnSelect] = useToggleState(false);
  const [showMore, setShowMore] = useToggleState(false);
  return (
    <div
      className={!onSelect ? 'MovieCard' : 'MovieCard MovieCard--Select'}
      onClick={() => {
        setOnSelect(onSelect);
        showMore === true && setShowMore(false);
      }}
    >
      <img src={StarWarsStrokeLogo} alt="Star Wars" />
      <p
        className={
          !onSelect
            ? 'MovieCard--title'
            : 'MovieCard--title MovieCard--title--select'
        }
      >
        {title}
      </p>
      {onSelect ? (
        <div>
          <p className="MovieCard--director">
            <span>Director : </span>
            <span>{director}</span>
          </p>
          <p className="MovieCard--producers">
            <span>
              {producer.includes(',') ? 'Producers : ' : 'Producer : '}
            </span>
            <span>{producer}</span>
          </p>
        </div>
      ) : null}
      {onSelect ? (
        <div>
          <p className="MovieCard--releaseDate">
            <span>Release date : </span>
            <span>{release_date}</span>
          </p>
          <p
            className="MovieCard--showMore"
            onClick={(e) => {
              e.stopPropagation();
              setShowMore(true);
            }}
          >
            {!showMore ? 'Show more' : 'Show less'}
          </p>
        </div>
      ) : null}
      {showMore ? <p className="MovieCard--crawl">{opening_crawl}</p> : null}
    </div>
  );
}

export default MovieCard;
