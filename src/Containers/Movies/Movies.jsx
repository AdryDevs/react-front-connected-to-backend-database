import React, { useEffect, useState } from 'react'
import "./Movies.scss";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MovieBox from '../../Components/MovieBox';



const API_URL= "https://proyectobackendpeliculas-production.up.railway.app/movies/";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
  }, [])

  
  

  return (
    <Container fluid>
      <Row d-flex justify-content-center>
            {movies.map((movie) => {
              return (
                <Col xs={12} sm={5} md={4} lg={3}>
                <MovieBox key={movie.title} movie={movie} />
                </Col>
              )
              })}
      </Row>
    </Container>
  );
}


export default Movies;