import React from "react"

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.tag = props.tag ? props.tag : 'h2';
  }
  render() {
    return (
      <section className="ts-Headline">
        <this.tag>{this.props.children}</this.tag>
      </section>
    );
  }
}