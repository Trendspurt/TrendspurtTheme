import React from "react"
import Helper from '../helper/Helper'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.slotNames = ['meta'];
    this.slots = Helper.getSlots(props, this.slotNames);

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
        <this.tag>{Helper.childrenWithoutSlots(this.props, this.slotNames)}</this.tag>
        {this.props.subTitle ? <div className="subTitle">{this.props.subTitle}</div> : ''}
        
        <hr></hr>
        {this.slots.meta}
        {/* {Helper.getSlot(this.props, 'meta')} */}
      </div>
    );
  }
}