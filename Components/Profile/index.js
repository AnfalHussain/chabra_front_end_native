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
  Button,
  Thumbnail,
  Drawer,
  Icon
} from "native-base";
import { ImageBackground, View, Image } from "react-native";

//Components
import wallpaper from "../../assets/wall.png";
import SideBar from "../../Navigation/SideBar";

// Style
import styles from "./styles";

class Profile extends Component {
  state = {
    drawerIsOpen: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Profile",

      headerLeft: (
        <Button
          style={styles.menu}
          transparent
          onPress={() => navigation.getParam("handleDrawer")()}
        >
          {navigation.getParam("isOpen") ? (
            <Icon
              name="close"
              type="AntDesign"
              style={(styles.icon, styles.menu)}
            />
          ) : (
            <Icon
              name="menu"
              type="Feather"
              style={(styles.icon, styles.menu)}
            />
          )}
        </Button>
      ),

      headerStyle: {
        backgroundColor: "#F4F7F2",
        fontWeight: "bold"
      }
    };
  };

  handleDrawer = async () => {
    if (this.state.drawerIsOpen) {
      this.drawer._root.close();
    } else {
      this.drawer._root.open();
    }
    await this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    this.props.navigation.setParams({ isOpen: this.state.drawerIsOpen });
  };

  componentDidMount() {
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });
  }

  genderString = gender => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

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
      {
        console.log("profile.image", profile.image);
      }
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
                      <Text style={styles.titleOfDetail}>
                        Username:{" "}
                        <Text style={styles.infoText}>
                          {" "}
                          {profile.user.username}
                        </Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        First Name:{" "}
                        <Text style={styles.infoText}>
                          {" "}
                          {profile.user.first_name}
                        </Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Last Name:{" "}
                        <Text style={styles.infoText}>
                          {" "}
                          {profile.user.last_name}
                        </Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Age: <Text style={styles.infoText}>{profile.age}</Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Email:
                        <Text style={styles.infoText}>
                          {profile.user.email}
                        </Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Phone Number:
                        <Text style={styles.infoText}>{profile.phone}</Text>
                      </Text>
                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Gender:
                        <Text style={styles.infoText}>
                          {this.genderString(profile.gender)}
                        </Text>
                      </Text>
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

export default withNavigation(connect(mapStateToProps)(Profile));
