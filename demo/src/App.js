import React from 'react'

import {Container, Nav, NavDropdown} from 'react-bootstrap';

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
  NavBar,
  Claim,
  Footer,
  MojoEmbed,
  ImageText,
} from 'trendspurt-theme'
// import 'trendspurt-theme/dist/index.css'

const App = () => {

  const navItems = [
    <Nav.Link href="https://exploremojo.com" key="1">Explore</Nav.Link>,
    <Nav.Link href="#WIP" key="2">Learn</Nav.Link>,
    <Nav.Link href="#WIP" key="3">Mojo Pro</Nav.Link>,
    <Nav.Link href="#WIP" key="4">Market</Nav.Link>,
    <Nav.Link href="#WIP" key="5">Templates</Nav.Link>,
    <NavDropdown title="More" id="basic-nav-dropdown" key="6">
      {[
      <NavDropdown.Item href="#action/3.1" key="991">Action</NavDropdown.Item>,
      <NavDropdown.Item href="#action/3.2" key="992">Another action</NavDropdown.Item>,
      <NavDropdown.Item href="#action/3.3" key="993">Something</NavDropdown.Item>,
      <NavDropdown.Divider key="994" />,
      <NavDropdown.Item href="#action/3.4" key="994">Separated link</NavDropdown.Item>,
      ]}
    </NavDropdown>
  ];

  return (
    <div>
      <Version />
 
      <NavBar brand={{image: "demo/images/brand_mojo.svg"}}
              items={navItems}></NavBar>

      <HeroBase title="Mojo for Adobe XD"
             background="demo/images/HeroA_bg.jpg"
             backdrop1="demo/images/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">Phoenix Design System</Headline>
        <Button>Download Now</Button>
      </HeroBase>

      <YouTube id="i6952GF3pdI" title="This YouTube video shows the example composition in action" />

      <Container>
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">I am a huge Headline</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <ImageText>
        <image>demo/images/HeroA_bg.jpg</image>
        <title>100% Extensible</title>
        <body>Coders are also specifically invited to the Mojo party. Mojo supports several options and hooks to add custom scripts (e.g. dynamic data integration, UI extensions etc.) <br/> <Button>Hello</Button></body>
      </ImageText>

      <ImageText reversed>
        <image>demo/images/HeroA_bg.jpg</image>
        <title>Incredible live filter layers</title>
        <body>Effects like blurs, lighting, distortions and perspective corrections can all be applied as non-destructive live filter layers. This means you can erase away from them, mask them, reorder them and adjust parameters at any time.
          <ul>
            <li>Apply to single layers or over a whole layer stack</li>
            <li>Mask and erase areas after they have been applied</li>
            <li>Live full resolution preview at all times</li>
          </ul>
          <Button>Hello</Button></body>
      </ImageText>

      <ImageText>
        <image>demo/images/HeroA_bg.jpg</image>
        <title>Incredible live filter layers</title>
        <body>Effects like blurs, lighting, distortions and perspective corrections can all be applied as non-destructive live filter layers. This means you can erase away from them, mask them, reorder them and adjust parameters at any time. It’s a completely new way to work. <br/> <Button>Hello</Button></body>
      </ImageText>

      <ImageText reversed>
        <image>demo/images/HeroA_bg.jpg</image>
        <title>Incredible live filter layers</title>
        <body>Effects like blurs, lighting, distortions and perspective corrections can all be applied as non-destructive live filter layers. This means you can erase away from them, mask them, reorder them and adjust parameters at any time. It’s a completely new way to work. <br/> <Button>Hello</Button></body>
      </ImageText>

      <ImageText>
        <image>demo/images/HeroA_bg.jpg</image>
        <title>Incredible live filter layers</title>
        <body>Effects like blurs, lighting, distortions and perspective corrections can all be applied as non-destructive live filter layers. This means you can erase away from them, mask them, reorder them and adjust parameters at any time.
          <ul>
            <li>Add filter effects non-destructively</li>
            <li>Apply to single layers or over a whole layer stack</li>
            <li>Mask and erase areas after they have been applied</li>
            <li>Live full resolution preview at all times</li>
          </ul>
          <Button>Hello</Button></body>
      </ImageText>


      <MojoEmbed src="demo/mojoDemos/DummyDemo/index.html" aspectRatio={800/600}></MojoEmbed>
      <MojoEmbed src="demo/mojoDemos/DummyDemo/index.html"></MojoEmbed>

      <Claim title="Use Mojo for" background="demo/images/Claim_bg_shapes.png">
        <strong>RICH PROTOTYPING</strong> / <strong><nobr>WEB EXPORT</nobr></strong> / <strong><nobr>RICH CONTENT</nobr></strong> / UI ANIMATIONS / STORYTELLING / SCRIPTING / INTERACTIVE INFOGRAPHICS / BANNERS / CONFIGURATORS / ...
      </Claim>

      <Container>
        <Headline type="huge" metaTitle="meta title" subTitle="I am a nice sub title">I am a huge Headline</Headline>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
      </Container>

      <Claim title="Use Mojo for" background="demo/images/Claim_bg_shapes.png" inverted>
        <strong>RICH PROTOTYPING</strong> / <strong><nobr>WEB EXPORT</nobr></strong> / <strong><nobr>RICH CONTENT</nobr></strong> / UI ANIMATIONS / STORYTELLING / SCRIPTING / INTERACTIVE INFOGRAPHICS / BANNERS / CONFIGURATORS / ...
      </Claim>


      <Container>
        <Headline type="h1">
          Murx saddasd asda
          <meta>META</meta>
          I am a Headline with slots (h1)
        </Headline>
        <Text>v2 Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
        <Text>Mojo is a powerful plugin for Adobe XD to create expressive animated and interactive content at the speed of thought. It comes with dozens of ready-to-use effects and triggers that don't require any code knowledge. But if needed Mojo is super code friendly and features several options to enleash even more creative power with small code snippets.</Text>
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

{/* 
      <h3>Image</h3>
      <Image src="https://images.unsplash.com/photo-1591041430413-7c3355d2f576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60">
        Image with caption
      </Image>      
      <Image src="https://images.unsplash.com/photo-1591041430413-7c3355d2f576?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" source="Some Company XYZ">
        Image with caption and source attribute
      </Image>       */}
      
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

      <Footer>
        &copy; 2020 Trendspurt GmbH
      </Footer>

    </div>
  )
}

export default App
