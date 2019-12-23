import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../redux/actions/";
import { Item, Input, Container } from "native-base";

import { Searchbar } from "react-native-paper";

class SearchBar extends Component {
  state = {
    searchQuery: ""
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
    this.props.filterProducts(query);
  };

  render() {
    const query = this.state.searchQuery;

    return (
      <Searchbar
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search Products..."
        onChangeText={this.handleSearch}
        value={query}
        style={{ backgroundColor: "#FAFEFD" }}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterProducts: query => dispatch(actionCreators.filterProducts(query))
  };
};
export default connect(null, mapDispatchToProps)(SearchBar);
