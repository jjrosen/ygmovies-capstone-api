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
    @movie = Movie.create(
      name: params[:name],
      movie_url: params[:movie_url],
      poster: params[:poster],
      overview: params[:overview],
      actors: params[:actors],
      rating: params[:rating],
      user_rating: params[:user_rating],
      release_date: params[:release_date],
      genre: params[:genre],
      run_time: params[:run_time]
    )
    render :show
  end

  def update
    @movie = Movie.find_by(id: params[:id])
    @movie.update(
        name: params[:name] || @movie.name,
      movie_url: params[:movie_url] || @movie.movie_url,
      poster: params[:poster] || @movie.poster,
      overview: params[:overview] || @movie.overview,
      actors: params[:actors] || @movie.actors,
      rating: params[:rating] || @movie.rating,
      user_rating: params[:user_rating] || @movie.user_rating,
      release_date: params[:release_date] || @movie.release_date,
      genre: params[:genre] || @movie.genre,
      run_time: params[:run_time] || @movie.run_time
    )
    render :show
  end

  def destroy
    @movie = Movie.find_by(id: params[:id])
    @movie.destroy
    render json: {message: "Movie was Removed Successfully"}
  end
end
