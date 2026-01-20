class MoviesController < ApplicationController
  def index
    @movies = Movie.all
    render :index
  end

  def show
    @movie = movie.find_by(id: params[:id])
    render :show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
