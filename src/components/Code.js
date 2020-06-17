import React from 'react'

export default function Code(props) {
  function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function format(input) {
    let output = htmlEntities(input).replace(/##/g, '<strong>').replace(/#\/#/g, '</strong>');
    return output;
  }
  return <div className="ts-Code" style={Object.assign({}, props.style)}>
    <pre style={{fontSize: '.9rem', padding: '20px', backgroundColor: '#F6F6F6', border: '1px solid #EEE', overflow: 'auto'}}><code dangerouslySetInnerHTML={{__html: format(props.children) }}></code></pre>
  </div>
}