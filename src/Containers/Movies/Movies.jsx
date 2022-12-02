import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
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

  const searchMovie = useSelector(movieData);
  const search = searchMovie.title;
  const text = searchMovie.text;
  

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
  
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setMovies({ ...search, details: search}));
    navigate(`/movies/${search.title}`);
  }

  const handleText = (e) => {
    dispatch(setMovies({ ...text, details: text}));
    navigate(`/movies/${text.title}`);
  }


  return (
    <Container fluid>
      <Row>
        <Col>
          <div>
            {movies.map((movie) => {
              return (
                <MovieBox key={movie.title} movie={movie} handleMovieClick={handleMovieClick} />
              )
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Movies;