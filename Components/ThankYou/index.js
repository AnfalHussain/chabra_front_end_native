import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
import { withNavigation } from "react-navigation";

import wallpaper from "../../assets/wall.png";
import logo from "../../assets/chabraLogo.png";

import { ImageBackground, Image } from "react-native";
import GradientButton from "react-native-gradient-buttons";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header,
  Title,
  Icon
} from "native-base";
import OrderHistory from "../OrderHistory";

class ThankYou extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    };
  };

  render() {
    return (
      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Content>
          <Header transparent />
          <List>
            <ListItem style={{ borderBottomWidth: 0 }}>
              <Body>
                <Body>
                  <Title>Thank you for using Chabra!</Title>
                </Body>
              </Body>
            </ListItem>
            <GradientButton
              radius={40}
              style={{
                width: 380,
                marginTop: 10,
                textAlign: "center",
                alignSelf: "center"
              }}
              onPressAction={() => this.props.navigation.popToTop()}
            >
              <Text
                style={{ color: "white", fontFamily: "Futura", fontSize: 22 }}
              >
                Back to Chabra!
              </Text>
            </GradientButton>

            <GradientButton
              radius={40}
              style={{
                width: 380,
                marginTop: 10,
                textAlign: "center",
                alignSelf: "center"
              }}
              onPressAction={() =>
                this.props.navigation.push("OrderListScreen")
              }
            >
              <Text
                style={{ color: "white", fontFamily: "Futura", fontSize: 22 }}
              >
                Orders History
              </Text>
            </GradientButton>
          </List>
          <Body>
            <Label style={{ color: "red", opacity: 0.6 }} />
          </Body>
        </Content>
      </ImageBackground>
    );
  }
}
const mapStateToProps = state => ({
  profile: state.authReducer.profile
});

export default withNavigation(connect(mapStateToProps)(ThankYou));
