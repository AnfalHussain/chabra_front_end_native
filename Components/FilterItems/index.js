import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/";

import { View } from "react-native";
import { Button, Text } from "native-base";

// Style
import styles from "./styles";

class FilterItems extends Component {
  state = {
    query: "",
    category: this.props.filteredProducts
  };

  clearFilter = () => {
    this.props.clearFilter();
  };

  filterByFruits = () => {
    this.props.clearFilter();
    this.props.filterProductsByCategory("Fruit");
  };

  filterByVegetables = () => {
    this.props.clearFilter();
    this.props.filterProductsByCategory("Vegetable");
  };

  render() {
    return (
      <>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "center",
            alignItems: "center"
          }}
        >
          <Button onPress={this.clearFilter} style={styles.button}>
            <Text>All</Text>
          </Button>
          <Button onPress={this.filterByFruits} style={styles.button}>
            <Text>Fruits</Text>
          </Button>

          <Button onPress={this.filterByVegetables} style={styles.button}>
            <Text>Vegetables</Text>
          </Button>
        </View>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    filteredProducts: state.productsReducer.filteredProducts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    filterProducts: query => dispatch(actionCreators.filterProducts(query)),
    filterProductsByCategory: category =>
      dispatch(actionCreators.filterProductsByCategory(category)),

    clearFilter: () => dispatch(actionCreators.clearFilterProductsByCategory())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);
