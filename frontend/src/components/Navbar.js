import React from 'react';

function Navbar({ onAddMovie, onBackToList }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" onClick={onBackToList} style={{ cursor: 'pointer' }}>
          YG Movies
        </span>
        <button
          className="btn btn-primary"
          onClick={onAddMovie}
        >
          Add Movie
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
