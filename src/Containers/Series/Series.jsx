
import React, { useEffect, useState } from 'react'
import "./Series.scss";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import SerieBox from '../../Components/SerieBox';

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
     <Container fluid>
        <Row>
          <Col>
             <div>
                {series.map((serie) => {
                  return (
                 <SerieBox key={serie.title} serie={serie} />
                  )
                  })}
             </div>
          </Col>
        </Row>
     </Container>
      );
    }

export default Series;