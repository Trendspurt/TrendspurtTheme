import Head from 'next/head'
import Layout from '@@layouts/Layout'
import {Version, Container, Button, Spacer, HeroBase, Headline, Text, TextVideo, VideoHeroA} from '@trendspurt/trendspurt-theme';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  return (
    <Layout dark>

      <VideoHeroA></VideoHeroA>

      <Container>
        <Headline type="h1">
          <meta>BRIGHT MODE</meta>
          COMPOSITION ALL
        </Headline>
        <Text>Lorem ipsum dolor sit 22</Text>
      </Container>

      <TextVideo reversed></TextVideo>

      <Container>
        <TextVideo></TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>

      <Container>
        <TextVideo ></TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>

      <Container>
        <TextVideo ></TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>
      
      
    </Layout>
  )
}
