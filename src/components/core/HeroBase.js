import React from "react"
import {Container, Row, Col} from 'react-bootstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.className = props.className ? props.className : '';
    this.style = props.style ? props.style : {};
    this.tag = props.tag ? props.tag : 'h2';
    Object.assign(this.style, {backgroundImage: `url(${this.props.background})`});
    this.backdrop1Style = props.backdrop1 ? {backgroundImage: `url(${this.props.backdrop1})`} : {};
  }
  render() {
    return (
      <Container fluid className={"HeroBase "+this.className} style={this.style}>

        <div className="backdrop1" style={this.backdrop1Style}></div>

        <Container>
          <Row>
            <Col lg={{offset: 0, span: 12}}>
              {this.props.children}
            </Col>
          </Row>
        </Container>

      </Container>
    );
  }
}