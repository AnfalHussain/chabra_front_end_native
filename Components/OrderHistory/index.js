import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./styles";
import SideBar from "../../Navigation/SideBar";

// NativeBase Components

import {
  List,
  Drawer,
  Content,
  Spinner,
  Button,
  Icon,
  Text,
  View
} from "native-base";
import { ImageBackground } from "react-native";
import wallpaper from "../../assets/wall.png";

//Components
import OrderCard from "./OrderCard";

// Style

class OrderHistory extends Component {
  state = {
    drawerIsOpen: false
  };

  handleDrawer = async () => {
    if (this.state.drawerIsOpen) {
      this.drawer._root.close();
    } else {
      this.drawer._root.open();
    }
    this.setState({ drawerIsOpen: !this.state.drawerIsOpen });
    this.props.navigation.setParams({ isOpen: this.state.drawerIsOpen });
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Orders History",

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

  componentDidMount() {
    this.props.navigation.setParams({
      handleDrawer: this.handleDrawer,
      isOpen: this.state.drawerIsOpen
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <ImageBackground
          source={wallpaper}
          style={{ width: "100%", height: "100%" }}
        >
          <Spinner />
        </ImageBackground>
      );
    } else {
      const orders = this.props.profile.order_history;
      const history = orders.map(order => {
        return <OrderCard order={order} key={order.id} />;
      });
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
              <Content style={{ marginTop: 10 }}>
                {history.length === 0 ? (
                  <View style={styles.viewMessage}>
                    <Text style={styles.noOrdersMessage}>
                      {" "}
                      You have not made any orders yet{" "}
                    </Text>
                  </View>
                ) : (
                  <List>{history}</List>
                )}
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
  loading: state.authReducer.profileLoading
});

export default connect(mapStateToProps)(OrderHistory);
