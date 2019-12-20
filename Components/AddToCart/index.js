import React, { Component } from "react";
import { Text, Button, Icon } from "native-base";
import { addItemToBasket } from "../../redux/actions";
import { connect } from "react-redux";
import IconBadge from "react-native-icon-badge";

// Style
import styles from "./styles";

class AddToCart extends Component {
  handleAddItem = () => {
    if (
      this.props.products.find(product => product.id === this.props.product.id)
    ) {
      if (
        this.props.products.find(
          product => product.id === this.props.product.id
        ).quantity +
          1 <=
        this.props.product.stock
      ) {
        const newItem = {
          id: this.props.product.id,
          name: this.props.product.name,
          price: this.props.product.price,
          quantity: 1
        };
        this.props.addToBasket(newItem);
      } else {
        return alert("Exceeded stock!");
      }
    } else {
      const newItem = {
        id: this.props.product.id,
        name: this.props.product.name,
        price: this.props.product.price,
        quantity: 1
      };
      this.props.addToBasket(newItem);
    }
  };

  render() {
    return (
      <Button
        style={{ backgroundColor: "#4dd0f7" }}
        onPress={this.handleAddItem}
      >
        <Text style={styles.text1}>
          <Icon name="ios-add-circle" type="Ionicons" style={styles.icon2} />{" "}
        </Text>
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToBasket: item => dispatch(addItemToBasket(item))
  };
};

const mapStateToProps = state => {
  return {
    products: state.basketReducer.items
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
