import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/authActions";
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
  Input,
  Drawer,
  Icon,
  Item
} from "native-base";
import { ImageBackground, View, Image } from "react-native";
import RNPickerSelect from "react-native-picker-select";

//Components
import wallpaper from "../../assets/wall.png";
import SideBar from "../../Navigation/SideBar";
import profileHeader from "../../assets/profileHeader3.jpg";
import GradientButton from "react-native-gradient-buttons";

// Style
import styles from "./styles";
import { black } from "ansi-colors";

class EditProfile extends Component {
  state = {
    drawerIsOpen: false,
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    gender: null,
    age: null,
    image: null
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
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Edit Profile",

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
        backgroundColor: "#3dffcb",
        fontWeight: "bold"
      }
    };
  };

  componentDidMount() {
    if (this.props.user) {
      const profile = this.props.profile;
      this.setState({
        first_name: profile.user.first_name,
        last_name: profile.user.last_name,
        email: profile.user.email,
        phone: profile.phone,
        gender: profile.gender,
        age: profile.age,
        image: profile.image
      });
    }
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.user !== this.props.user)
    //     this.props.fetchProfile();
  }

  componentWillUnmount() {
    if (this.props.errors.length) this.props.resetErrors();
  }

  genderString = gender => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

  render() {
    const profile = this.props.profile;
    const user = this.props.user;
    const errors = this.props.errors;
    const loading = this.props.profileLoading;

    if (!user) {
      // if user is undefind
      // redirect to Login page
      return (
        // (this.props.navigation.replace("LoginScreen")

        // )
        <>
          <Text>The endless cursed hell of the evil demon profile... </Text>

          <Button
            btn
            btn-danger
            onPress={this.props.navigation.replace("LoginScreen")}
          >
            <Text>Login</Text>
          </Button>
        </>
      );
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
      // console.log("profile.image", profile.image)
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
              <CardItem style={{ backgroundColor: "transparent" }}>
                <View style={styles.center}>
                  {/* add image picker to update user profile image */}
                  {/* if image is undefind display image placeholder */}
                  <Image
                    style={styles.image}
                    bordered
                    source={{ uri: `http://134.209.242.76/${profile.image}` }}
                  ></Image>
                </View>
              </CardItem>

              <Content>
                <Card style={styles.container}>
                  <CardItem
                    style={{ backgroundColor: "transparent", margin: 15 }}
                  >
                    <Body>
                      {!!errors.length && (
                        <View>
                          {errors.map(error => (
                            <Text
                              style={{
                                color: "red",
                                fontFamily: "Futura"
                              }}
                              key={error}
                            >
                              {error}
                            </Text>
                          ))}
                        </View>
                      )}

                      <Text style={styles.titleOfDetail}>
                        First Name: <Text> {profile.user.first_name}</Text>
                      </Text>
                      <Item
                        rounded
                        style={{
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        <Input
                          style={{
                            color: "black",
                            margin: 10,
                            fontSize: 18,
                            fontFamily: "Futura",
                            backgroundColor: "transparent",
                            height: 20
                          }}
                          autoCorrect={false}
                          autoCapitalize="none"
                          placeholder={profile.user.first_name}
                          onChangeText={first_name =>
                            this.setState({ first_name })
                          }
                          value={this.state.first_name}
                        />
                      </Item>

                      <View style={styles.hairLine} />
                      <Text style={styles.titleOfDetail}>
                        Last Name: <Text> {profile.user.last_name}</Text>
                      </Text>
                      <Item
                        rounded
                        style={{
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        <Input
                          style={{
                            color: "black",
                            margin: 10,
                            fontSize: 18,
                            fontFamily: "Futura",
                            backgroundColor: "transparent",
                            height: 20
                          }}
                          autoCorrect={false}
                          autoCapitalize="none"
                          placeholder={profile.user.last_name}
                          onChangeText={last_name =>
                            this.setState({ last_name })
                          }
                          value={this.state.last_name}
                        />
                      </Item>

                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Age: {profile.age}
                      </Text>
                      <Item
                        rounded
                        style={{
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        <Input
                          style={{
                            color: "black",
                            margin: 10,
                            fontSize: 18,
                            fontFamily: "Futura",
                            backgroundColor: "transparent",
                            height: 20
                          }}
                          autoCorrect={false}
                          autoCapitalize="none"
                          placeholder={profile.age}
                          onChangeText={age => this.setState({ age })}
                          value={this.state.age}
                        />
                      </Item>

                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Email: {profile.user.email}
                      </Text>
                      <Item
                        rounded
                        style={{
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        <Input
                          style={{
                            color: "black",
                            margin: 10,
                            fontSize: 18,
                            fontFamily: "Futura",
                            backgroundColor: "transparent",
                            height: 20
                          }}
                          autoCorrect={false}
                          autoCapitalize="none"
                          placeholder={profile.user.email}
                          onChangeText={email => this.setState({ email })}
                          value={this.state.email}
                        />
                      </Item>

                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Phone Number: {profile.phone}
                      </Text>
                      <Item
                        rounded
                        style={{
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        <Input
                          style={{
                            color: "black",
                            margin: 10,
                            fontSize: 18,
                            fontFamily: "Futura",
                            backgroundColor: "transparent",
                            height: 20
                          }}
                          autoCorrect={false}
                          autoCapitalize="none"
                          placeholder={profile.phone}
                          onChangeText={phone => this.setState({ phone })}
                          value={this.state.phone}
                        />
                      </Item>

                      <View style={styles.hairLine} />

                      <Text style={styles.titleOfDetail}>
                        Gender: {this.genderString(profile.gender)}
                      </Text>
                      <Item
                        rounded
                        style={{
                          width: 320,
                          height: 45,
                          borderWidth: 15,
                          borderColor: "#123dff",
                          borderRadius: 40,
                          backgroundColor: "white",
                          marginTop: 10
                        }}
                      >
                        {/* use picker menu to choose the gender*/}
                        <View
                          style={{
                            width: 280,
                            marginLeft: 20,
                            textAlign: "center",
                            alignSelf: "center"
                          }}
                        >
                          <RNPickerSelect
                            style={{
                              color: "black",
                              fontSize: 18,
                              fontFamily: "Futura",
                              backgroundColor: "transparent",
                              height: 20
                            }}
                            placeholder={{
                              label: "Select a gender",
                              value: null,
                              color: "black"
                            }}
                            onValueChange={value => {
                              this.state.gender;
                            }}
                            items={[
                              { label: "Female", value: "F" },
                              { label: "Male", value: "M" }
                            ]}
                          />
                        </View>
                      </Item>
                      <View style={styles.hairLine} />
                    </Body>
                  </CardItem>

                  <GradientButton
                    radius={40}
                    style={{
                      width: 280,
                      margin: 20,
                      textAlign: "center",
                      alignSelf: "center"
                    }}
                    onPressAction={() =>
                      this.props.editProfile(this.state, this.props.navigation)
                    }
                  >
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "Futura",
                        fontSize: 22
                      }}
                    >
                      Update Profile
                    </Text>
                  </GradientButton>
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
  errors: state.errors.errors,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading
});

const mapDispatchToProps = dispatch => {
  return {
    editProfile: (userDate, navigation) =>
      dispatch(actionCreators.editProfile(userDate, navigation)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(EditProfile)
);
