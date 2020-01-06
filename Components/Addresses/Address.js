import React, { Component } from "react";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
  Text,
  Body,
  CardItem,
  Content,
  Card,
  Spinner,
  Drawer,
  Accordion
} from "native-base";
import { ImageBackground, View } from "react-native";

//Components
import wallpaper from "../../assets/wall.png";
import SideBar from "../../Navigation/SideBar";

import styles from "./styles";

class Address extends Component {
  render() {
    const profile = this.props.profile;
    const user = this.props.user;
    const loading = this.props.profileLoading;

    if (!user) {
      // if user is undefind
      // redirect to Login page
      return this.props.navigation.replace("LoginScreen");
    }
    // else if user is defined
    if (loading) {
      return (
        <ImageBackground
          source={wallpaper}
          style={{ width: "100%", height: "100%" }}
        >
          <Spinner />
        </ImageBackground>
      );
    } else {
      const dataArray = profile.addresses.map(address => {
        return {
          title: address.name
        };
      });

      // [
      //     { title: "First Element", content: "Lorem ipsum dolor sit amet" },
      //     { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      //     { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
      //   ];

      return (
        <>
          <ImageBackground
            source={wallpaper}
            style={{ width: "100%", height: "100%" }}
          >
            <Drawer
              ref={ref => {
                this.drawer = ref;
              }}
              content={<SideBar navigator={this.navigator} />}
              onClose={() => this.closeDrawer()}
              panOpenMask={0.6}
              openDrawerOffset={0.4}
              onClose={this.closeDrawer}
              onOpen={this.openDrawer}
              captureGestures="open"
            >
              <Content>
                <Card style={styles.container}>
                  <CardItem
                    style={{ backgroundColor: "transparent", margin: 15 }}
                  >
                    <Body>
                      <Accordion dataArray={dataArray} expanded={0} />
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Drawer>
          </ImageBackground>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading
});

export default withNavigation(connect(mapStateToProps)(Address));
