import React, { useEffect, useState } from 'react'
import "./Movies.scss";
import { Container, Row, Col, Form } from 'react-bootstrap';
import MovieBox from '../../Components/MovieBox';
import state from '../../state';
import { observer } from "mobx-react-lite";
import MovieDetail from './MovieDetail';



const API_URL= "https://proyectobackendpeliculas-production.up.railway.app/movies/";
const API_URL_SEARCH="https://proyectobackendpeliculas-production.up.railway.app/movies/search/";

const Movies = observer( () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(['']);
 
  const searchHandler =(e) =>{
    setSearch(e.target.value);
  console.log(search);
  }

  useEffect(() => {
    if (search=='') {
      fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
    }else{
      fetch(API_URL_SEARCH+search)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
    }
  
  }, [search])

if (state.movie){
  return (
    <MovieDetail 
    movie={state.movie} >
    </MovieDetail>
  )
  
}else {
  return (
    <Container fluid className='containermovie'>
      <Row className='d-flex justify-content-center align-items-center mt-1'>
        <Col lg={6}>
        <Form>
          <Form.Control type='search' placeholder='Search' id='movieInput' onChange={(e)=>searchHandler(e)}>
          </Form.Control>
        </Form>
        </Col>
      </Row>
      <Row className='d-flex'>
            {movies.map((movie) => {
              return (
                <Col xs={12} sm={5} md={4} lg={3}>
                <MovieBox  key={movie.title} movie={movie} />
                </Col>
              )
              })}
      </Row>
    </Container>
  )}
}
)

export default Movies;