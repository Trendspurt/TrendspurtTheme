import React from 'react'

import { 
  Version,
  Headline,
  Text, 
  Image, 
  Download, 
  YouTube, 
  Video, 
  CTA, 
  IFrame, 
  Code, 
} from 'trendspurt-theme'
// import 'trendspurt-theme/dist/index.css'

const App = () => {
  return (
    <div style={{margin: "auto", width: "80%"}}>
      <Version />

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
      <YouTube id="i6952GF3pdI" title="This YouTube video shows the example composition in action" />

      <h3>Video</h3>
      <Video title="This video shows the example composition in action" />

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

      <h3>IFrame</h3>
      <IFrame title="Iframe in action" src="http://www.trendspurt.com"
              height="600px"
              style={{}}></IFrame>



      <br/><br/><br/>

    </div>
  )
}

export default App
