import React from "react"
import {Container, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Button from './Button';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
    this.style = props.style ? props.style : {};
    this.brand = { image: '', width: '120px', height: '40px' };
    Object.assign(this.brand, props.brand);
  }
  render() {
    return (
      <Navbar className="NavBar" style={this.style} fixed="top" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{width: this.brand.width, height: this.brand.height, backgroundImage: `url(${this.brand.image})`}}></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-auto">
              {this.props.items}
            </Nav>
            <Form inline>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button> */}
              {/* <Button>Login</Button> */}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}