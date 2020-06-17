import React from 'react'

export default function IFrame(props) {
  return <div className="ts-IFrame" style={Object.assign({}, props.style)}>
    <iframe width="100%" height="100%" src={props.src} frameBorder="0" style={{height: props.height, boxSizing: 'content-box', border: `${props.border ? props.border : 'none'}`, boxShadow: `${props.boxShadow ? props.boxShadow : '0px 0px 22px #E0E0E0'}`}}></iframe>
    <p class="caption">{props.title}</p>
  </div>
}