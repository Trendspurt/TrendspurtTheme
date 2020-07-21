import React from "react"
import Container from 'react-bootstrap/Container';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // this.tag = props.tag ? props.tag : 'h2';
  }
  render() {
    return (
      <section className="Section">
        <Container>
          {this.props.children}
        </Container>
      </section>
    );
  }
}