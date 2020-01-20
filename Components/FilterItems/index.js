import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/actions/";

import { View } from "react-native";
import { Button, Text } from "native-base";

class FilterItems extends Component {
  state = {
    query: "",
    category: this.props.filteredProducts
  };

  clearFilter = () => {
    this.props.clearFilter();
  };

  filterByFruits = () => {
    this.props.filterProductsByCategory("Fruit");
    // this.props.filterProducts(query);
  };

  filterByVegetables = () => {
    this.props.filterProductsByCategory("Vegetable");
    // this.props.filterProducts(query);
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
          <Button onPress={this.clearFilter}>
            <Text>All</Text>
          </Button>
          <Button onPress={this.filterByFruits}>
            <Text>Fruits</Text>
          </Button>

          <Button onPress={this.filterByVegetables}>
            <Text>Vegetables</Text>
          </Button>
          {/* buttons */}
        </View>
      </>
    );
  }

  //buton category
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

// export default FilterItems;

export default connect(mapStateToProps, mapDispatchToProps)(FilterItems);
