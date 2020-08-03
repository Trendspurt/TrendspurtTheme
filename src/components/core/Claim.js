import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
  let className = props.className ? props.className : '';
  className += (props.inverted) ? 'inverted' : '';
  const style = props.style ? props.style : {};
  Object.assign(style, {backgroundImage: `url(${props.background})`});
  return (
    <section className={"Claim "+className} style={style}>
      <Container>
        <Row>
          <Col lg={{offset: 1, span: 10}}>
            <h1 className="font2-h1">{props.title}</h1>
            <hr />
            <div className="font-h1" style={{fontWeight: 'normal'}}>{props.children}</div>
          </Col>
        </Row>      
      </Container>
    </section>
  )
}