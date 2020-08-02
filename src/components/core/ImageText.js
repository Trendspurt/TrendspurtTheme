import React from 'react'
import Helper from '../helper/Helper';
import {Container, Row, Col} from 'react-bootstrap';

const DEBUG = true;
const LOG = '[ ImageText ]';

export default (props) => {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? 'reversed' : '';
  const style = props.style ? props.style : {};
  Object.assign(style, {backgroundImage: `url(${props.background})`});
  const aspectRatio = props.aspectRatio ? 1/props.aspectRatio : 1/(16/9);
  return (
    <section className={"ImageText "+className} style={style}>
      <Container>
        <Row>
          <Col lg={props.reversed ? {offset: 1, span: 6} : {offset: 0, span: 6}} className="firstCol">
            <div className="frameWrapper" style={{paddingTop: aspectRatio*100+`%`}}>
              <div className="image" style={{backgroundImage: `url(${Helper.getSlot(props, 'image')})`}}></div>
            </div>
          </Col>
          <Col lg={props.reversed ? {offset: 0, span: 5} : {offset: 1, span: 5}} className="secondCol">
            <h1 className="font2-h1">{Helper.getSlot(props, 'title')}</h1>
            <div>{Helper.getSlot(props, 'body')}</div>
          </Col>
        </Row>      
      </Container>
    </section>
  )
}