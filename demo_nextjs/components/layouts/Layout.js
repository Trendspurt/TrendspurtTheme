import Head from 'next/head'
import {NavBar, Footer} from '@trendspurt/trendspurt-theme';
import {Container, Row, Col, Nav, NavDropdown} from 'react-bootstrap';
import { signin, signout, useSession } from 'next-auth/client';
import Link from 'next/link';

export default function Layout(props) {

  const [session, loading] = useSession()

  let navItems = [
    // <Nav.Link href="/">Explore</Nav.Link>,
    <Nav.Link href="/bright">Bright Mode <img draggable="false" width="16" style={{position: 'relative', top: '-2px'}} alt="🔥" src="https://s.w.org/images/core/emoji/11/svg/1f525.svg"/></Nav.Link>,
    <Nav.Link href="/dark">Dark Mode</Nav.Link>,
    <NavDropdown title="Explore" id="basic-nav-dropdown">
      {[
        <NavDropdown.Item href="/showroom" key={Math.random()}>Showroom</NavDropdown.Item>,
      <NavDropdown.Item href="/use-cases" key={Math.random()}>Use Cases</NavDropdown.Item>,
      <NavDropdown.Item href="/features" key={Math.random()}>Features</NavDropdown.Item>,
      ]}
    </NavDropdown>,
  ];

  // Add keys dynamically (Only works for first level. Nexted elements will already run into non unique key issue while declaring)
  navItems = navItems.map((item, index) => {
    return React.cloneElement(
      item, {key: index, ...item.props}, item.props.children
    )
  })

  return (
    <div className={ 'Layout' + ((props.dark) ? ' dark' : '') + (props.className ? ' '+props.className : '') } style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Head>
        <title>MOJO – Explore Mojo (for Adobe XD)</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <NavBar brand={{image: "/brand.svg"}}
              items={navItems}></NavBar>

      <main className={props.className} style={{flex: '2 1 100%'}}>
        {props.children}
      </main>

      <footer>
        <Footer>
          <Container>
            <Row>
              <Col md={6}>
                <Link href="/contact">Contact</Link>
                <br/>
                <Link href="/contact">Hire us</Link>
              </Col>
              <Col md={6}>
                <div>&copy; 2020 Trendspurt GmbH</div>
                <Link href="/about/privacy-and-terms">Privacy and Terms of Use</Link>
                <br/>
                <Link href="/about/legal">Legal Disclosure / Impressum</Link>
              </Col>
            </Row>
          </Container>
        </Footer>
      </footer>
    </div>
  )
}
