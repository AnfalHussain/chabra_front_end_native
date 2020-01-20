import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions";

// NativeBase Components

import { List, Content, Spinner, Text, Item, Button, Icon } from "native-base";
import { ImageBackground, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

//Components
import ProductCard from "./ProductCard";
import BasketBtn from "../BasketBtn";
import SearchBar from "../SearchBar";
import FilterItems from "../FilterItems";
import Logo from "./ChabraLogo.js";

import wallpaper from "../../assets/wall.png";

// Style
import styles from "./styles";

class ProductsList extends Component {
  static navigationOptions = {
    headerTitle: <Logo />,

    headerRight: <BasketBtn />,

    headerStyle: {
      backgroundColor: "#F4F7F2",
      fontWeight: "bold"
    }
  };

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
          <SearchBar />
          <FilterItems />
          <Content style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignContent: "flex-start",
                alignItems: "center"
              }}
            >
              {market}
            </View>
          </Content>
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
