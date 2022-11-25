import React, { useEffect, useState } from 'react'
import "./Movies.scss";
// import { Container } from 'react-bootstrap';
// import { Row } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
import MovieBox from '../../Components/MovieBox';


const API_URL= "https://api.themoviedb.org/3/movie/popular?api_key=7a058400ca0cc2ae0814f1abeef2423d";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])

  return (
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <div>
    //         <Card style={{ width: '16rem' }}>
    //           <Card.Img variant="bot" src="https://www.covercaratulas.com/ode/mini/carteles-43111.jpg" />
    //         </Card>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
    <div>
      {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq}/>)}
    </div>
  )
}


export default Movies