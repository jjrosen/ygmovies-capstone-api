import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieClick }) {
  return (
    <div>
      <h2 className="mb-4">Movies</h2>
      {movies.length === 0 ? (
        <div className="alert alert-info">
          No movies found. Add your first movie!
        </div>
      ) : (
        <div className="row">
          {movies.map((movie) => (
            <div key={movie.id} className="col-md-4 col-lg-3 mb-4">
              <MovieCard
                movie={movie}
                onClick={() => onMovieClick(movie.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
