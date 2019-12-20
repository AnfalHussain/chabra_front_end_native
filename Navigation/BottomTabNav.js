import { createBottomTabNavigator } from "react-navigation-tabs";

//Import your stacks
import ProductsTab from "./ProductsTab";
import ProfileTab from "./ProfileTab";
import Logout from "./SideBar";

const BottomTabNav = createBottomTabNavigator(
  {
    Products: ProductsTab,
    Profile: ProfileTab
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        tabBarVisible: false,
        showLabel: false,
        headerTransparent: true,

        style: {
          backgroundColor: "#4693e0"
        },
        headerStyle: {
          backgroundColor: "#3dffcb",
          fontWeight: "bold"
        }
      }
    }
  }
);

export default BottomTabNav;
