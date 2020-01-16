import React, { Component } from "react";
import { Icon } from "native-base";

// Components:
import Profile from "../Components/Profile";
import EditProfile from "../Components/EditProfile";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import OrderList from "../Components/OrderHistory";
import OrderDetails from "../Components/OrderDetails";
import Adresses from "../Components/Addresses/Address";
import { createStackNavigator } from "react-navigation-stack";

const ProfileTab = createStackNavigator(
  {
    ProfileScreen: Profile,
    LoginScreen: Login,
    SignupScreen: Signup,
    EditProfileScreen: EditProfile,
    OrderListScreen: OrderList,
    OrderDetailScreen: OrderDetails,
    AdressesScreen: Adresses
  },

  {
    initialRouteName: "ProfileScreen",
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="FontAwesome"
          name="user"
          size={20}
          style={{ color: tintColor }}
        />
      ),
      tabBarOptions: {
        activeTintColor: "#00072D",
        showLabel: false,

        style: {
          backgroundColor: "white"
        }
      }
      //   headerStyle: {
      //     backgroundColor: "#3dffcb",
      //     fontWeight: "bold"
      //   }
    }
  }
);

export default ProfileTab;
