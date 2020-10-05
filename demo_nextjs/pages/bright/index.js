import Head from 'next/head'
import Layout from '@@layouts/Layout'
import {Version, Button, Spacer, HeroBase, Headline, Text} from '@trendspurt/trendspurt-theme';
import { Container, Row, Col } from 'react-bootstrap';

export default (props) => {
  return (
    <Layout>

      <Container>
        <Headline type="h1">
          <meta>THEME DEMO</meta>
          BRIGHT MODE
        </Headline>
        <Text>Lorem ipsum dolor sit amet</Text>

        <Button onClick={() => window.open('/bright/composition-all', '_self')}>Composition: All</Button>
      </Container>
      
    </Layout>
  )
}
