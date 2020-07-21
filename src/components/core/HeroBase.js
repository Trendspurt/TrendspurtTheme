import React from "react"
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    Object.assign(this.style, {backgroundImage: `url(${this.props.background})`});
    this.backdrop1Style = props.backdrop1 ? {backgroundImage: `url(${this.props.backdrop1})`} : {};
  }
  render() {
    return (
      <Container fluid className="HeroBase" style={this.style}>
       
        <div className="backdrop1" style={this.backdrop1Style}></div>

        <Container>
          <Row>
            {/* <Col md={{offset: 1, span: 7}}> */}
            <Col md={{offset: 0, span: 7}}>
              {this.props.children}
            </Col>
            <Col md={{offset: 1, span: 2}}>
            </Col>
          </Row>
        </Container>

      </Container>
    );
  }
}