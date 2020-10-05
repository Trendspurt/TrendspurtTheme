import Head from 'next/head'
import Layout from '@@layouts/Layout'
import {Version, Container, Button, Spacer, HeroBase, Headline, Text, Claim, TextVideo} from '@trendspurt/trendspurt-theme';
import { Row, Col } from 'react-bootstrap';

export default (props) => {
  return (
    <Layout>

      <HeroBase title="Mojo for Adobe XD"
             background="/HeroA_bg.jpg"
             backdrop1="/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">Mojo for Adobe XD</Headline>
        <Button>Download Now</Button>
      </HeroBase>

      {/* <Container>
        <Headline type="h1">
          <meta>BRIGHT MODE</meta>
          COMPOSITION ALL
        </Headline>
        <Text>Lorem ipsum dolor sit 22</Text>
      </Container> */}

      {/* <TextVideo reversed></TextVideo> */}

      <Container>
        <TextVideo
          meta="powerful yet intuitive"
          title="ANIMATION TIMELINE"
          sub={`Use the Mojo animation timeline for more complex and precise animations choreographies`}
          body={
            <ul>
              <li>Mu ltiple property tracks per element</li>
              <li>Unlimited tweens</li>
              <li>Easings for more natural animations</li>
              <li>Timed actions for interactive timelines and scripting</li>
            </ul>
          }
          video="/video1.mp4">
        </TextVideo>
      </Container>

      <Container>
        <TextVideo 
          meta="powerful yet intuitive"
          title="ANIMATION TIMELINE"
          sub={`Use the Mojo animation timeline for more complex and precise animations choreographies`}
          body={
            <ul>
              <li>Mu ltiple property tracks per element</li>
              <li>Unlimited tweens</li>
              <li>Easings for more natural animations</li>
              <li>Timed actions for interactive timelines and scripting</li>
            </ul>
          }>
        </TextVideo>
      </Container>

      <Container>
      <TextVideo reversed
          meta="powerful yet intuitive"
          title="ANIMATION TIMELINE REV"
          body={
            <ul>
              <li>Mu ltiple property tracks per element</li>
              <li>Unlimited tweens</li>
              <li>Easings for more natural animations</li>
              <li>Timed actions for interactive timelines and scripting</li>
            </ul>
          }>
        </TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>

      <Container>
        <TextVideo></TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>

      <Claim title="Use Mojo for" background="/Claim_bg_shapes.png" inverted>
        <strong>RICH PROTOTYPING</strong> / <strong><nobr>WEB EXPORT</nobr></strong> / <strong><nobr>RICH CONTENT</nobr></strong> / UI ANIMATIONS / STORYTELLING / SCRIPTING / INTERACTIVE INFOGRAPHICS / BANNERS / CONFIGURATORS / ...
      </Claim>

      <Container>
        <TextVideo ></TextVideo>
      </Container>

      <Container>
        <TextVideo reversed></TextVideo>
      </Container>
      
    </Layout>
  )
}
