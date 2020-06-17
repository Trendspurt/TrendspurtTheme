import React from 'react'

export default function IFrame(props) {
  return <figure className="ts-IFrame" style={{height: props.height}}>
    <iframe width="100%" height="100%" src={props.src} frameBorder="0"></iframe>
    <figcaption>{props.title}</figcaption>
  </figure>
}