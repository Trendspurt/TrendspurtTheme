import React from "react"
import Container from 'react-bootstrap/Container';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // this.tag = props.tag ? props.tag : 'h2';
  }
  render() {
    return (
      <div className="Spacer" style={{height: (this.props.height ? this.props.height : 40)+'px'}}></div>
    );
  }
}