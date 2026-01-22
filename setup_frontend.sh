#!/bin/bash

echo "Setting up YG Movies Frontend..."

# Install backend dependencies
echo "Installing backend dependencies..."
bundle install

# Install frontend dependencies
echo "Installing frontend dependencies..."
cd frontend
npm install
cd ..

echo ""
echo "Setup complete!"
echo ""
echo "To run the application:"
echo "1. Start the Rails backend: bin/rails server"
echo "2. In a new terminal, start the React frontend: cd frontend && npm start"
echo ""
echo "Backend will run on: http://localhost:3000"
echo "Frontend will run on: http://localhost:3001"
