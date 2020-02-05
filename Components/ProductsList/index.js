import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

// NativeBase Components

import {
  List,
  Content,
  Spinner,
  Drawer,
  Text,
  Item,
  Button,
  Icon
} from "native-base";
import { ImageBackground, View } from "react-native";

//Components
import ProductCard from "./ProductCard";
import BasketBtn from "../BasketBtn";
import SearchBar from "../SearchBar";
import FilterItems from "../FilterItems";
import Logo from "./ChabraLogo.js";
import SideBar from "../../Navigation/SideBar";

//Images
import wallpaper from "../../assets/wall.png";

// Style
import styles from "./styles";

class ProductsList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Logo />,

      headerRight: <BasketBtn />,
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
  state = {
    drawerIsOpen: false
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

  render() {
    const products = this.props.products;
    let market;
    if (this.props.loading) {
      return <Spinner />;
    }
    if (products) {
      market = this.props.filteredProducts.map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      });
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
            <SearchBar />
            <View
              style={{
                marginTop: 30,
                alignItems: "center"
              }}
            >
              <FilterItems />
            </View>

            <Content style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                  alignItems: "center",
                  marginLeft: 3
                }}
              >
                {market}
              </View>
            </Content>
          </Drawer>
        </ImageBackground>
      </>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  filteredProducts: state.productsReducer.filteredProducts,
  loading: state.productsReducer.loading,
  items: state.basketReducer.items
});

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: query => dispatch(actionCreators.filterProducts(query)),
    logout: () => dispatch(actionCreators.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
