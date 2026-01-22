import React, { useState } from 'react';

function AddMovieForm({ onMovieAdded, onCancel }) {
  const [formData, setFormData] = useState({
    name: '',
    movie_url: '',
    poster: '',
    overview: '',
    actors: '',
    rating: '',
    user_rating: '',
    release_date: '',
    run_time: '',
    genres: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/movies.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        onMovieAdded();
        setFormData({
          name: '',
          movie_url: '',
          poster: '',
          overview: '',
          actors: '',
          rating: '',
          user_rating: '',
          release_date: '',
          run_time: '',
          genres: ''
        });
      } else {
        alert('Failed to add movie');
      }
    } catch (error) {
      console.error('Error adding movie:', error);
      alert('Error adding movie');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="mb-4">Add New Movie</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Movie Name *</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="poster" className="form-label">Poster URL</label>
          <input
            type="text"
            className="form-control"
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="https://example.com/poster.jpg"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="movie_url" className="form-label">Movie URL</label>
          <input
            type="text"
            className="form-control"
            id="movie_url"
            name="movie_url"
            value={formData.movie_url}
            onChange={handleChange}
            placeholder="https://example.com/movie.mp4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="overview" className="form-label">Overview</label>
          <textarea
            className="form-control"
            id="overview"
            name="overview"
            value={formData.overview}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="actors" className="form-label">Actors</label>
          <input
            type="text"
            className="form-control"
            id="actors"
            name="actors"
            value={formData.actors}
            onChange={handleChange}
            placeholder="Actor 1, Actor 2, Actor 3"
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="rating" className="form-label">Rating (0-10)</label>
            <input
              type="number"
              className="form-control"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="10"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="user_rating" className="form-label">User Rating (0-10)</label>
            <input
              type="number"
              className="form-control"
              id="user_rating"
              name="user_rating"
              value={formData.user_rating}
              onChange={handleChange}
              min="0"
              max="10"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="release_date" className="form-label">Release Date</label>
            <input
              type="text"
              className="form-control"
              id="release_date"
              name="release_date"
              value={formData.release_date}
              onChange={handleChange}
              placeholder="2024"
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="run_time" className="form-label">Runtime</label>
            <input
              type="text"
              className="form-control"
              id="run_time"
              name="run_time"
              value={formData.run_time}
              onChange={handleChange}
              placeholder="2h 30m"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="genres" className="form-label">Genres</label>
          <input
            type="text"
            className="form-control"
            id="genres"
            name="genres"
            value={formData.genres}
            onChange={handleChange}
            placeholder="Action, Adventure, Sci-Fi"
          />
          <small className="form-text text-muted">
            Enter genres separated by commas
          </small>
        </div>

        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={submitting}
          >
            {submitting ? 'Adding...' : 'Add Movie'}
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancel}
            disabled={submitting}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMovieForm;
