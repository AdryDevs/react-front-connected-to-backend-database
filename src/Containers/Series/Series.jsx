
import React, { useEffect, useState } from 'react'
import "./Series.scss";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import SerieBox from '../../Components/SerieBox';
import './Series.scss'

const API_URL= "https://proyectobackendpeliculas-production.up.railway.app/series/";

const Series = () => {
    
      const [series, setSeries] = useState([]);
    
      useEffect(() => {
     fetch(API_URL)
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          setSeries(data);
        })
      }, [])
    
      console.log(series);
    
      return (
     <Container fluid className='containerseries'>
        <Row d-flex justify-content-center>
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