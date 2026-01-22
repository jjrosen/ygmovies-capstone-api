import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch('/movies.json');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = async (movieId) => {
    try {
      const response = await fetch(`/movies/${movieId}.json`);
      const data = await response.json();
      setSelectedMovie(data);
      setShowAddForm(false);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  const handleAddMovie = () => {
    setSelectedMovie(null);
    setShowAddForm(true);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
    setShowAddForm(false);
  };

  const handleMovieAdded = () => {
    fetchMovies();
    setShowAddForm(false);
  };

  const handleMovieDeleted = () => {
    fetchMovies();
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <Navbar onAddMovie={handleAddMovie} onBackToList={handleBackToList} />
      <div className="container mt-4">
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : showAddForm ? (
          <AddMovieForm
            onMovieAdded={handleMovieAdded}
            onCancel={handleBackToList}
          />
        ) : selectedMovie ? (
          <MovieDetail
            movie={selectedMovie}
            onBack={handleBackToList}
            onMovieDeleted={handleMovieDeleted}
          />
        ) : (
          <MovieList
            movies={movies}
            onMovieClick={handleMovieClick}
          />
        )}
      </div>
    </div>
  );
}

export default App;
