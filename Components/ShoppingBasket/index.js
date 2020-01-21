import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";

// NativeBase Components
import { Text, List, Container, ListItem } from "native-base";

import { Alert } from "react-native";
import GradientButton from "react-native-gradient-buttons";
import styles from "./styles";

import { ImageBackground, View, ScrollView } from "react-native";

// Component
import BasketItem from "./BasketItem";
import wallpaper from "../../assets/wall.png";
import { AsyncStorage } from "react-native";

class ShoppingBasket extends Component {
  static navigationOptions = {
    title: "Shopping Basket",
    headerStyle: {
      backgroundColor: "#F4F7F2",
      fontWeight: "bold"
    }
  };

  state = {
    items: null // products in the shopping basket
  };

  componentDidMount = async () => {
    const itemsUnparsed = await AsyncStorage.getItem("items");
    const itemsParsed = JSON.parse(itemsUnparsed);

    await this.setState({
      items: itemsParsed
    });
    console.log("this.state.items: ", this.state.items);
  };

  handlePress = () => {
    if (!this.props.user) {
      this.props.navigation.push("LoginScreen");
    } else {
      if (this.props.items.length == 0)
        Alert.alert("Your Basket Is Empty", "Add some products to proceed");
      else this.props.navigation.push("SummaryScreen");
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
              radius={40}
              gradientDirection="horizontal"
              gradientBegin="#FFC919"
              gradientEnd="#EF8A08"
              width="90%"
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
