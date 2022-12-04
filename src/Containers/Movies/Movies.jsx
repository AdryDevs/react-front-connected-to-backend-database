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
    <Container className='containerprincipal' fluid>
      <Row  >
        <Col className='grid'>
          <div className='containermovie'>
            {movies.map((movie) => {
              return (
                <MovieBox  key={movie.title} movie={movie} />
              )
              })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Movies;