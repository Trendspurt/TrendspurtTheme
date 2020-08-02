import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  Object.assign(style, {backgroundImage: `url(${props.background})`});
  const aspectRatio = props.aspectRatio ? 1/props.aspectRatio : 1/(16/9);
  return (
    <section className={"MojoEmbed "+className} style={style}>
      <Container>
        <Row>
          <Col lg={{offset: 1, span: 10}}>
            <div className="frameWrapper" style={{paddingTop: aspectRatio*100+`%`}}>
              <iframe width="100%" height="100%" src={props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>      
      </Container>
    </section>
  )
}