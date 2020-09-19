import React from 'react'

/**
 * Custom Container supporting className and style
 */

export default (props) => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return (
    <div className={"container "+className} style={style}>
      {props.children}
    </div>
  )
}