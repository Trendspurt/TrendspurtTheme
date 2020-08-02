import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export default function YouTube(props) {
  return <figure className="YouTube">
    <Container>
      <div className="frameWrapper">
        <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <figcaption>{props.title}</figcaption>
    </Container>
  </figure>
}