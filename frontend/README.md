# YG Movies Frontend

A simple React frontend for the YG Movies API.

## Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Make sure your Rails API is running on port 3000

3. Start the React development server:
```bash
npm start
```

The frontend will run on port 3001 and proxy API requests to the Rails backend on port 3000.

## Features

- View all movies in a card grid layout
- Click on a movie to see detailed information
- Add new movies with the form
- Delete movies
- Bootstrap styling
- Responsive design

## Components

- **App.js**: Main application component with state management
- **Navbar.js**: Navigation bar with app title and add movie button
- **MovieList.js**: Grid display of all movies
- **MovieCard.js**: Individual movie card in the grid
- **MovieDetail.js**: Detailed view of a selected movie
- **AddMovieForm.js**: Form to add new movies
