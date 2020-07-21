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
              <Nav.Link href="#WIP">Explore</Nav.Link>
              <Nav.Link href="#WIP">Learn</Nav.Link>
              <Nav.Link href="#WIP">Mojo Pro</Nav.Link>
              <Nav.Link href="#WIP">Market</Nav.Link>
              <Nav.Link href="#WIP">Templates</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button> */}
              <Button>Login</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}