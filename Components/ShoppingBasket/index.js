import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";

// NativeBase Components
import {
  Text,
  List,
  Button,
  Title,
  Container,
  Body,
  ListItem
} from "native-base";
import GradientButton from "react-native-gradient-buttons";
import styles from "./styles";

import { ImageBackground, View, ScrollView } from "react-native";

// Component
import BasketItem from "./BasketItem";
import wallpaper from "../../assets/wall.png";

class ShoppingBasket extends Component {
  static navigationOptions = {
    title: "Shopping Basket",
    headerStyle: {
      backgroundColor: "#3dffcb",
      fontWeight: "bold"
    }
  };

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.items !== this.props.items) {
  //       // fetch basket items again

  //     }
  // }

  handlePress = () => {
    if (!this.props.user) {
      this.props.navigation.push("LoginScreen");
    } else {
      this.props.navigation.push("SummaryScreen");
    }
  };
  totalPrice = () => {
    let total = 0;
    if (this.props.items) {
      this.props.items.forEach(item => {
        total = total + parseFloat(item.price) * parseFloat(item.quantity);
      });
    }
    return total.toFixed(3);
  };

  handleCheckoutButton = () => {
    this.props.checkoutBasket();
  };
  render() {
    let items = this.props.items;
    let basketItems;
    if (items) {
      basketItems = items.map((item, index) => (
        <BasketItem item={item} key={index} />
      ));
    }

    return (
      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <Container style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <List>{basketItems}</List>
          </ScrollView>

          <Container style={styles.containerBottom}>
            <View style={styles.hairLine} />

            <ListItem style={styles.itemList}>
              <Text style={styles.total}>Total: {this.totalPrice()} KWD</Text>
            </ListItem>
            <GradientButton
              width="90%"
              blueMarine
              radius={40}
              style={styles.roundedBtn}
              onPressAction={() => this.handlePress()}
            >
              <Text style={styles.checkoutStyle}>Proceed to Checkout</Text>
            </GradientButton>
          </Container>
        </Container>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItemFromBasket(item)),
  checkoutBasket: () => dispatch(checkoutBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingBasket);
