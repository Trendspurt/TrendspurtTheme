import React from 'react'

export default function Video(props) {
  return <figure className="ts-Video">
    <video controls>
      <source src={props.path} type="video/mp4" />
    </video>    
    <figcaption>{props.title}</figcaption>
  </figure>
}