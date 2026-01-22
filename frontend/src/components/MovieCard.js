import React from 'react';

function MovieCard({ movie, onClick }) {
  return (
    <div className="card h-100" onClick={onClick} style={{ cursor: 'pointer' }}>
      {movie.poster ? (
        <img
          src={movie.poster}
          className="card-img-top"
          alt={movie.name}
          style={{ height: '300px', objectFit: 'cover' }}
        />
      ) : (
        <div
          className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
          style={{ height: '300px' }}
        >
          <span className="text-white">No Image</span>
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="badge bg-warning text-dark">
            ★ {movie.rating}/10
          </span>
          <small className="text-muted">{movie.release_date}</small>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
