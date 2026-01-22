import React from 'react';

function MovieDetail({ movie, onBack, onMovieDeleted }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        const response = await fetch(`/movies/${movie.id}.json`, {
          method: 'DELETE',
        });

        if (response.ok) {
          onMovieDeleted();
        } else {
          alert('Failed to delete movie');
        }
      } catch (error) {
        console.error('Error deleting movie:', error);
        alert('Error deleting movie');
      }
    }
  };

  return (
    <div>
      <button className="btn btn-secondary mb-4" onClick={onBack}>
        ← Back to Movies
      </button>

      <div className="row">
        <div className="col-md-4">
          {movie.poster ? (
            <img
              src={movie.poster}
              className="img-fluid rounded"
              alt={movie.name}
            />
          ) : (
            <div
              className="bg-secondary rounded d-flex align-items-center justify-content-center"
              style={{ height: '400px' }}
            >
              <span className="text-white">No Image</span>
            </div>
          )}
        </div>

        <div className="col-md-8">
          <h1>{movie.name}</h1>

          <div className="mb-3">
            <span className="badge bg-warning text-dark me-2">
              ★ {movie.rating}/10
            </span>
            {movie.user_rating && (
              <span className="badge bg-info me-2">
                User Rating: {movie.user_rating}/10
              </span>
            )}
            <span className="badge bg-secondary">
              {movie.release_date}
            </span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mb-3">
              <strong>Genres: </strong>
              {movie.genres.map((genre, index) => (
                <span key={index} className="badge bg-primary me-1">
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {movie.run_time && (
            <div className="mb-3">
              <strong>Runtime: </strong>{movie.run_time}
            </div>
          )}

          {movie.actors && (
            <div className="mb-3">
              <strong>Cast: </strong>{movie.actors}
            </div>
          )}

          <div className="mb-4">
            <strong>Overview:</strong>
            <p className="mt-2">{movie.overview}</p>
          </div>

          {movie.movie_url && (
            <div className="mb-3">
              <a
                href={movie.movie_url}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Movie
              </a>
            </div>
          )}

          <button
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Delete Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
