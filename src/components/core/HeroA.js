import React from "react"
import Container from 'react-bootstrap/Container';
import {Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    Object.assign(this.style, {backgroundImage: `url(${this.props.background})`});
  }
  render() {
    return (
      <Container fluid className="HeroA" style={this.style}>
       
        <div className="backdrop">
        </div>

        <Row>
          <Col md={{offset: 1, span: 7}}>
            {this.props.metaTitle ? <div className="metaTitle">{this.props.metaTitle}</div> : ''}
            <h1 className="title">{this.props.title}</h1>
            {this.props.subTitle ? <h2 className="subTitle">{this.props.subTitle}</h2> : ''}
            {this.props.children}
          </Col>
          <Col md={{offset: 1, span: 2}}>
          </Col>
        </Row>

      </Container>
    );
  }
}