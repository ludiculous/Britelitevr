import React, { Component } from "react";
import {Text} from "react-vr"

class Display extends Component {

  render() {
    return (
       <Text
          style={{
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 2, -3]}],
          }}>
          {this.props.txt}
        </Text>
    );
  }
}

export default Display;