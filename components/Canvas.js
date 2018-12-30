import React, { Component } from 'react';
import {asset, Pano, Text} from "react-vr";

export class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src
    }
  }

  render() {
    return (
      <Pano source={this.state.src} />
    );
  }
}

export default Canvas;
