import Layout from './Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function(props) {

  return (
    <Layout className="MdxLayout">

      <Container>
        <div style={{backgroundColor: '#E4004C', color: 'white', padding: '8px 20px', borderRadius: '8px', margin: '40px 0'}}>
          META:
          <div>{props.meta}</div>
        </div>
      </Container>

      <Spacer height="60"></Spacer>

      {props.children}

      <Spacer height="60"></Spacer>

    </Layout>
  )
}
