import React, { Component } from "react";
import { Image } from "react-native";
import logo from "../../assets/3.png";

class ChabraLogo extends Component {
  render() {
    return (
      <Image
        style={{
          width: 100,
          height: 100,
          textAlign: "center",
          alignSelf: "center"
        }}
        bordered
        source={logo}
      ></Image>
    );
  }
}

export default ChabraLogo;
