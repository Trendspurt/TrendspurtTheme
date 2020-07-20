import React from "react"

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <figure className="ts-Image">
        <img src={this.props.src}/>
        <figcaption>{this.props.children}</figcaption>
        {this.props.source &&
          <figcaption className="source">(source: {this.props.source})</figcaption>
        }
      </figure>      
    );
  }
}


