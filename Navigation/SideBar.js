import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/authActions";
import { withNavigation } from "react-navigation";

import { Text, Content, Button, Icon, Item } from "native-base";
import { View } from "react-native";
import styles from "./styles";

class SideBar extends Component {
  render() {
    return (
      <>
        <Content style={{ backgroundColor: "#16171f", opacity: 0.95 }}>
          <View>
            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("OrderListScreen")}
              >
                <Icon name="back" type="Entypo" style={styles.icon2} />
                <Text style={styles.menuBtn}> Order History</Text>
              </Button>
            </Item>

            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("EditProfileScreen")}
              >
                <Icon
                  name="user-edit"
                  type="FontAwesome5"
                  style={styles.icon2}
                />
                <Text style={styles.menuBtn}>Edit Profile</Text>
              </Button>
            </Item>

            <Item>
              <Button
                transparent
                onPress={() => this.props.navigation.push("AdressesScreen")}
              >
                <Icon name="address" type="Entypo" style={styles.icon2} />
                <Text style={styles.menuBtn}>Adresses</Text>
              </Button>
            </Item>

            <Item>
              <Button transparent onPress={this.props.logout}>
                <Icon name="log-out" type="Feather" style={styles.icon2} />
                <Text style={styles.menuBtn}>Logout</Text>
              </Button>
            </Item>
          </View>
        </Content>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actionCreators.logout())
  };
};

export default withNavigation(connect(null, mapDispatchToProps)(SideBar));
