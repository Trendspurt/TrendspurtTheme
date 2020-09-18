import React from 'react'

export default (props) => {
  const className = props.className ? props.className : '';
  const style = props.style ? props.style : {};
  return (
    <div className={"Button "+className} style={style}>
      <button onClick={props.onClick}>
        <div className="label">{props.children}</div>
        <div className="icon"></div>
      </button>
    </div>
  )
}