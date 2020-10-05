import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Text from '../core/Text';
import Headline from '../core/Headline';

export default (props) => {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? ' reversed' : '';

  return (
    <div className={"VideoHeroA "+className}>
      <div className="wrapper">
        {/* <!-- Video Col --> */}
        <div className="video-col">
          <div className="video">
            <video src="/video2.mp4" autoPlay={true} muted={true} loop={true}></video>
          </div>

          <div className="overlay">
            <Container>
              <div>
                <Headline type="huge">Mojo for Adobe XD</Headline>
                <Text>Now available</Text>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}