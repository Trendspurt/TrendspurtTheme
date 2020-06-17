import React from 'react'

export default function YouTube(props) {
  return <figure className="ts-YouTube">
    <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <figcaption>{props.title}</figcaption>
  </figure>
}