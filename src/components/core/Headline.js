import React from "react"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.className = '';
    switch(props.type) {
      case 'huge':
        this.tag = 'h1';
        this.className = 'huge';
        break;
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
        this.tag = props.type;
        break;
      default:
        this.tag = 'h2';
    }
    this.className = props.className ? this.className + ' ' + props.className : this.className;
    this.style = props.style ? props.style : {};
  }
  render() {
    return (
      <div className={"Headline "+this.className} style={this.style}>
        {this.props.metaTitle ? <div className="metaTitle">{this.props.metaTitle}</div> : ''}
        <this.tag>{this.props.children}</this.tag>
        {this.props.subTitle ? <div className="subTitle">{this.props.subTitle}</div> : ''}
      </div>
    );
  }
}