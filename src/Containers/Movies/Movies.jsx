import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import MovieBox from '../../Components/MovieBox';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addMovie, movieData } from './MovieSlice';

import "./Movies.scss";

const API_URL= "http://localhost:3002/movies/";

const Movies = () => {

  

  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedMovie = useSelector(movieData);
    dispatch(addMovie(selectedMovie));
    navigate(`/movies/${selectedMovie.title}`);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
  }, [])

  //Handlers

  const handleMovieClick = (movie) => {
    dispatch(setMovies({ ...movie, details: movie}));
    navigate(`/movies/${movie.title}`);
  }

  return (
    <Container fluid>
      <Row>
        <Col className="col-10 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
          <div>
            {movies.map((movie) => {
              return (
                <MovieBox 
                key={movie.title} 
                movie={movie} 
                handleMovieClick={handleMovieClick} />
              )
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Movies;