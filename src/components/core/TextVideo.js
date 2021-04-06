import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export default (props) => {
  let className = props.className ? props.className : '';
  className += (props.reversed) ? ' reversed' : '';

  return (
    <div className={"TextVideo "+className}>
      <div className="wrapper">
        {/* <!-- Text Col --> */}
        <div className="text-col">
          <div className="meta">{props.meta}</div>
          <h1 className="title">{props.title}</h1>
          <h2 className="subtitle">{props.sub}</h2>
          <div className="body">
            {props.body}
          </div>
        </div>
        {/* <!-- Video Col --> */}
        <div className="video-col">
          <div className="video">
            <video src={props.video} autoPlay={true} muted={true} loop={true} playsInline="true"></video>
          </div>
        </div>
      </div>
    </div>
  );
}