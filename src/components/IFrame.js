import React from 'react'

export default function IFrame(props) {
  return <div className="ts-IFrame" style={Object.assign({height: props.height, boxSizing: 'content-box'}, props.style)}>
    <iframe width="100%" height="100%" src={props.src} frameBorder="0"></iframe>
    <p>{props.title}</p>
  </div>
}