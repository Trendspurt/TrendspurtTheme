import React from 'react'

import Container from 'react-bootstrap/Container';

import { 
  Version,
  Section,
  Headline,
  Text, 
  Image, 
  Download, 
  YouTube, 
  Video, 
  CTA, 
  IFrame, 
  Code, 
  HeroA,
  HeroBase,
  Button,
  NavBar
} from 'trendspurt-theme'
// import 'trendspurt-theme/dist/index.css'

const App = () => {
  return (
    <div>
      <Version />
 
      <NavBar brand={{image: "demo/images/brand_mojo.svg"}}></NavBar>

      <HeroBase title="Mojo for Adobe XD"
             background="demo/images/HeroA_bg.jpg"
             backdrop1="demo/images/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">I am a huge Headline</Headline>
        <Button>Download Now</Button>
      </HeroBase>

      <Container>
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">I am a huge Headline</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <Container>
        <Headline type="h1">YouTube</Headline>
        {/* <YouTube id="i6952GF3pdI" title="This YouTube video shows the example composition in action" /> */}
      </Container>

      <Container>
        <Headline type="h1">I am a Headline (h1)</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <Container>
        <Headline type="h1">Creating rich prototypes in no time</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>
      
      <Container>
        <Headline type="h2">I am a Headline (h2)</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <Container>
        <Headline type="h3">I am a Headline (h3)</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <Container>
        <Headline type="h4">I am a Headline (h4)</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>



      <br/>
      <br/>
      <br/>
      <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
      <br/>
      <br/>
      <br/>

      <h3>Headline</h3>
      <Headline>A Headline (default tag)</Headline>
      <Headline tag="h3">A Headline (h3)</Headline>
      <Headline tag="h4">A Headline (h4)</Headline>
      
      <h3>Text</h3>
      <Text>Prodigy</Text>

      <h3>Image</h3>
      <Image src="https://images.unsplash.com/photo-1591041430413-7c3355d2f576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
        Image with caption
      </Image>      
      <Image src="https://images.unsplash.com/photo-1591041430413-7c3355d2f576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" source="Some Company XYZ">
        Image with caption and source attribute
      </Image>      
      
      <h3>Download</h3>
      <Download url="DownloadUrl.txt">This is the download text</Download>

      <h3>YouTube</h3>
      {/* <YouTube id="i6952GF3pdI" title="This YouTube video shows the example composition in action" /> */}

      <h3>Video</h3>
      {/* <Video title="This video shows the example composition in action" /> */}

      <h3>CTA (WIP)</h3>
      <CTA>A simple call to action</CTA>

      <h3>Code</h3>
      <Code> 
        {`
<div>
  
  <div style="width: 200px; height: 200px; left: 50px; top: 50px; background-color: green;"
      ##mojo-fx-magnet#/#></div>

  <div id="blue" style="width: 200px; height: 200px; left: 300px; top: 50px; background-color: blue;">sadsajdjaskhd jashdkjhaks jhdkasjhdkash</div>

  <div id="gold" style="width: 200px; height: 200px; left: 550px; top: 50px; background-color: gold;"></div>

</div>
        `}
      </Code>

{/*
      <h3>IFrame</h3>
      <IFrame title="Iframe in action" src="http://www.trendspurt.com"
              height="600px"
              style={{}}></IFrame>
*/}


      <br/><br/><br/>

    </div>
  )
}

export default App
