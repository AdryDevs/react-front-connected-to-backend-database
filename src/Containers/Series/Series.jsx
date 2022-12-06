
import React, { useEffect, useState } from 'react'
import "./Series.scss";
import { Container } from 'react-bootstrap';
import { Row, Col, Form } from 'react-bootstrap';
import SerieBox from '../../Components/SerieBox';
import './Series.scss'

const API_URL= "https://proyectobackendpeliculas-production.up.railway.app/series/";
const API_URL_SEARCH="https://proyectobackendpeliculas-production.up.railway.app/series/search/";

const Series = () => {
    
      const [series, setSeries] = useState([]);
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
            setSeries(data);
          })
        }else{
          fetch(API_URL_SEARCH+search)
          .then((res) => res.json())
          .then(data => {
            console.log(data);
            setSeries(data);
          })
        }
    
      }, [search])
    
    
      console.log(series);
    
      return (
     <Container fluid className='seriesDesign'>
            <Row className='d-flex justify-content-center align-items-center mt-1'>
        <Col lg={6}>
        <Form>
          <Form.Control type='search' placeholder='Search' id='movieInput' onChange={(e)=>searchHandler(e)}>
          </Form.Control>
        </Form>
        </Col>
      </Row>
      <Row className='d-flex'>
                {series.map((serie) => {
                  return (
                  <Col xs={12} sm={5} md={4} lg={3}>
                 <SerieBox key={serie.title} serie={serie} />
                 </Col>
                  )
                  })}
        </Row>
     </Container>
      );
    }

export default Series;