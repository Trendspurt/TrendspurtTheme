import React from 'react'

export default (props) => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return (
    <div className={"Text "+className} style={style}>
      {props.children}
    </div>
  )
}