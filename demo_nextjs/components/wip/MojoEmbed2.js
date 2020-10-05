import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

export default function MojoEmbed2(props) {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  Object.assign(style, {backgroundImage: `url(${props.background})`});
  const aspectRatio = props.aspectRatio ? 1/props.aspectRatio : 1/(16/9);

  function on_iframe_load(evt) {
    // Force player background to dark
    var iframeDocument = evt.currentTarget.contentDocument; 
    var player = iframeDocument.getElementById('player');
    player.style.backgroundColor = '#16171b';
  }

  return (
    <section className={"MojoEmbed2 "+className} style={style}>
      <div className="frameWrapper">
        <iframe width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          src={props.src}
          onLoad={on_iframe_load}></iframe>
      </div>
    </section>
  )
}