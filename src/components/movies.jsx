import React, { Component } from 'react';
import { getMovies } from "../services/fakeMovieService";


class Movies extends Component {
  state = {

    movies: getMovies()
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(m => m._id !== movie._id)
    this.setState({movies})
  }
  
  render() { 
    const {length: count} = this.state.movies;
    if(count === 0) return <p>There are no movie on the database</p>
    return (
      <>
            <p>Showing {this.state.movies.length} movies in the database</p>
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Number In Stock</th>
                  <th>Daily Rental Rate</th>
                  {/* Empty table header for Delete */}
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete(movie)}className="btn btn-danger btn-sm">Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>

      </>
      
    )
  }
}
 
export default Movies;