import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket, checkoutBasket } from "../../redux/actions";
import moment from "moment";
import { ImageBackground, View } from "react-native";
import wallpaper from "../../assets/wall.png";

// NativeBase Components
import {
  Text,
  List,
  Button,
  Title,
  Label,
  Input,
  Body,
  Item
} from "native-base";
import GradientButton from "react-native-gradient-buttons";
import styles from "./styles";

// Component
import BasketItem from "./BasketItem";

class OrderSummary extends Component {
  static navigationOptions = {
    title: "Order Summary",
    headerStyle: {
      backgroundColor: "#3dffcb",
      fontWeight: "bold"
    }
  };

  state = {
    total: 0,
    name: "",
    area: "",
    street: "",
    block: "",
    optional: ""
  };

  totalPrice = () => {
    let total = 0;
    this.props.items.forEach(item => {
      total = total + parseFloat(item.price) * parseInt(item.quantity);
    });
    return total.toFixed(3);
  };

  handlePress = () => {
    const newOrder = {
      baskets: this.props.items,

      address: {
        name: this.state.name,
        area: this.state.area,
        street: this.state.street,
        block: this.state.block,
        optional: this.state.optional
      }
    };
    this.props.checkoutBasket(newOrder);
    this.props.navigation.replace("ThankYouScreen");
  };

  render() {
    if (!this.props.user) return this.props.navigation.replace("LoginScreen");
    let items = this.props.items;
    let basketItems;
    if (items) {
      basketItems = items.map((item, index) => (
        <BasketItem
          item={item}
          key={index}
          removeItemFromBasket={this.props.removeItemFromBasket}
        />
      ));
    }

    return (
      <ImageBackground
        source={wallpaper}
        style={{ width: "100%", height: "100%" }}
      >
        <List style={styles.container}>
          {basketItems}
          <Text
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: "bold",
              fontWeight: "bold",
              fontFamily: "Futura",
              backgroundColor: "transparent",
              paddingTop: 30,
              paddingLeft: 20,
              paddingBottom: 10
            }}
          >
            Total:{" "}
            <Text
              style={{
                paddingLeft: 80,
                fontSize: 18,
                fontFamily: "Futura",
                fontWeight: "normal"
              }}
            >
              {" "}
              {this.totalPrice()} KWD
            </Text>{" "}
          </Text>

          <Text
            style={{
              color: "black",
              fontSize: 22,
              fontWeight: "bold",
              fontWeight: "bold",
              fontFamily: "Futura",
              backgroundColor: "transparent",
              paddingLeft: 20,
              paddingTop: 5,
              paddingBottom: 10
            }}
          >
            Shipping Address:
          </Text>
          <Item rounded style={styles.item}>
            <Input
              style={{
                color: "black",
                margin: 10,
                fontSize: 18,
                fontFamily: "Futura",
                backgroundColor: "transparent",
                height: 20
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Address Name"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
          </Item>

          <Item rounded style={styles.item}>
            <Input
              style={{
                color: "black",
                margin: 10,
                fontSize: 18,
                fontFamily: "Futura",
                backgroundColor: "transparent",
                height: 20
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Area"
              value={this.state.area}
              onChangeText={area => this.setState({ area })}
            />
          </Item>

          <Item rounded style={styles.item}>
            <Input
              style={{
                color: "black",
                margin: 10,
                fontSize: 18,
                fontFamily: "Futura",
                backgroundColor: "transparent",
                height: 20
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Street"
              value={this.state.street}
              onChangeText={street => this.setState({ street })}
            />
          </Item>

          <Item rounded style={styles.item}>
            <Input
              style={{
                color: "black",
                margin: 10,
                fontSize: 18,
                fontFamily: "Futura",
                backgroundColor: "transparent",
                height: 20
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Block Number"
              value={this.state.block}
              onChangeText={block => this.setState({ block })}
            />
          </Item>

          <Item rounded style={styles.item}>
            <Input
              style={{
                color: "black",
                margin: 10,
                fontSize: 18,
                fontFamily: "Futura",
                backgroundColor: "transparent",
                height: 20
              }}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Optional"
              value={this.state.optional}
              onChangeText={optional => this.setState({ optional })}
            />
          </Item>

          <View style={{ backgroundColor: "transparent", margin: 10 }}></View>
          <GradientButton
            width="90%"
            blueMarine
            rounded
            style={styles.roundedBtn}
            onPressAction={() => this.handlePress()}
          >
            <Text style={styles.checkoutStyle}>Checkout</Text>
          </GradientButton>
        </List>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  items: state.basketReducer.items,
  orders: state.basketReducer.orders,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  checkoutBasket: items => dispatch(checkoutBasket(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummary);
