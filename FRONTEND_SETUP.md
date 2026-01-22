# YG Movies - Frontend Setup Guide

## Overview

I've created a simple React frontend for your movie API with the following features:

- View all movies in a responsive Bootstrap card grid
- Click on a movie to see detailed information
- Add new movies with a form
- Delete movies
- Bootstrap styling (no Tailwind)
- Function components only (no classes)
- Regular React JavaScript (no TypeScript)

## Project Structure

```
frontend/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.js       # Navigation bar
│   │   ├── MovieList.js    # Grid of movies
│   │   ├── MovieCard.js    # Individual movie card
│   │   ├── MovieDetail.js  # Detailed movie view
│   │   └── AddMovieForm.js # Form to add new movies
│   ├── App.js              # Main app component
│   ├── index.js            # React entry point
│   └── index.css           # Basic styles
└── package.json            # Dependencies
```

## Installation & Running

### Quick Setup

Run the setup script:
```bash
./setup_frontend.sh
```

### Manual Setup

1. Install backend dependencies:
```bash
bundle install
```

2. Install frontend dependencies:
```bash
cd frontend
npm install
```

### Running the Application

1. Start the Rails backend (in project root):
```bash
bin/rails server
```
The backend will run on http://localhost:3000

2. In a new terminal, start the React frontend:
```bash
cd frontend
npm start
```
The frontend will run on http://localhost:3001

## What I Fixed

1. Fixed bugs in `MoviesController`:
   - Fixed typo: `movie.find_by` → `Movie.find_by`
   - Fixed nested if-else structure in create and update methods
   - Fixed genre handling logic

2. Added CORS support:
   - Added `rack-cors` gem to Gemfile
   - Created CORS initializer to allow frontend-backend communication

## Features

### Navbar Component
- Displays app title
- Add Movie button
- Click title to return to movie list

### Movie List
- Responsive grid layout
- Shows movie poster, title, rating, and release date
- Click any movie card to view details

### Movie Card
- Displays poster image (or placeholder)
- Shows movie name
- Displays rating with star icon
- Shows release date

### Movie Detail
- Full movie information display
- Movie poster
- Rating badges
- Genre tags
- Runtime, cast, and overview
- Watch Movie button (if URL provided)
- Delete button

### Add Movie Form
- All movie fields
- Genres input (comma-separated)
- Form validation
- Cancel button

## Technologies Used

- React 18
- Bootstrap 5
- React Hooks (useState, useEffect)
- Fetch API for backend communication

## Notes

- All components use function syntax (no classes)
- The frontend proxies API requests to the Rails backend
- Bootstrap is used for all styling
- The app is fully responsive
