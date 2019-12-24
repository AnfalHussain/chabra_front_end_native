import React, { Component } from "react";
import { connect } from "react-redux";
import wallpaper from "../../assets/wall.png";

import { ImageBackground, View } from "react-native";
// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Content,
  Spinner,
  Item,
  Input,
  Card,
  CardItem,
  Icon
} from "native-base";
//Components
import BasketBtn from "../BasketBtn";
//Actions
import {
  fetchProductDetail,
  resetProductDetail,
  addItemToBasket
} from "../../redux/actions";

//Styles
import styles from "./styles";
import GradientButton from "react-native-gradient-buttons";
import { red } from "ansi-colors";

class ProductDetail extends Component {
  state = {
    quantity: 0
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("productName"),
      headerRight: <BasketBtn />,
      headerStyle: {
        backgroundColor: "#3dffcb",
        fontWeight: "bold"
      }
    };
  };

  componentDidMount() {
    //If the product detail is already fetched before then just display otherwise fetch this means you will have to change your reducer to be an array
    // then find the product if it exists it updates a state in the reducer called currentProduct for example

    this.props.fetchProductDetail(this.props.navigation.getParam("productID"));
  }

  limited = () => {
    if (this.props.product.stock < 10 && this.props.product.stock > 0) {
      return (
        <>
          <Text style={{ color: "red", marginLeft: 60 }}>
            {this.props.product.stock} items left!
          </Text>
        </>
      );
    }
  };

  changeQuantity = number => {
    if (this.state.quantity >= 0) {
      if (
        this.props.items.find(product => product.id === this.props.product.id)
      ) {
        let quantityInCart = this.props.items.find(
          product => product.id === this.props.product.id
        ).quantity;
        if (
          quantityInCart + number + this.state.quantity >
          this.props.product.stock
        ) {
          return alert("Exceeded stock!");
        } else {
          const newQuantity = this.state.quantity + number;
          this.setState({ quantity: newQuantity });
        }
      } else if (number + this.state.quantity > this.props.product.stock) {
        return alert("Exceeded stock!");
      }
      const newQuantity = this.state.quantity + number;
      this.setState({ quantity: newQuantity });
    }
  };

  handleAddItem = () => {
    const newItem = {
      id: this.props.product.id,
      quantity: this.state.quantity,
      name: this.props.product.name,
      price: this.props.product.price
    };
    this.props.addToBasket(newItem);
    this.setState({ quantity: 0 });
  };

  render() {
    const product = this.props.product;

    let checkQuantity = () => {
      if (product.stock > 0) {
        return (
          <>
            <CardItem style={styles.myCard}>
              <Button
                style={{
                  backgroundColor: "#1654E7",
                  borderRadius: 50
                }}
                onPress={() =>
                  this.state.quantity > 0 && this.changeQuantity(-1)
                }
              >
                <Icon
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    fontFamily: "Futura"
                  }}
                  name="md-remove"
                  type="Ionicons"
                ></Icon>
              </Button>

              <Item rounded style={styles.inputField}>
                <Input style={styles.order}>{this.state.quantity}</Input>
                {/* <Input
                    type="text" value={this.state.quantity} /> */}
              </Item>
              <Button
                style={{
                  backgroundColor: "#1654E7",
                  borderRadius: 60
                }}
                onPress={() => this.changeQuantity(1)}
              >
                <Icon
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    fontFamily: "Futura"
                  }}
                  name="md-add"
                  type="Ionicons"
                ></Icon>
              </Button>
            </CardItem>
            <View style={{ marginLeft: 130 }}>
              <Text style={{ color: "red", marginLeft: 20 }}>
                {this.limited()}
              </Text>
            </View>

            <Button style={styles.addToCartBtn} onPress={this.handleAddItem}>
              <Text style={styles.basketBtn}>
                Add to Basket{" "}
                <Icon
                  onPress={() =>
                    this.props.navigation.navigate("ShoppingBasketScreen")
                  }
                  name="shopping-basket"
                  type="FontAwesome"
                  style={styles.icon}
                />
              </Text>
            </Button>
          </>
        );
      } else {
        return (
          <Button disabled style={styles.mybutn}>
            <Text style={styles.basketBtnOutofStock}>Out of Stock</Text>
          </Button>
        );
      }
    };

    // RETURN
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <ImageBackground
          source={wallpaper}
          style={{ width: "100%", height: "100%" }}
        >
          <Content style={styles.container}>
            <View style={styles.imgView}>
              <Thumbnail
                style={styles.image}
                bordered
                source={{ uri: product.img }}
              />
            </View>

            {/* <View style={styles.center}>
              
            </View> */}

            <CardItem style={styles.myCard2}>
              <Text style={styles.country}>Description:</Text>
              <Text style={styles.description}>{product.description}</Text>
            </CardItem>

            <CardItem style={styles.myCard2}>
              <Text style={styles.country}>Origin:</Text>
              <Text style={styles.countryName}> {product.country}</Text>
            </CardItem>

            <CardItem style={styles.myCard2}>
              <Text style={styles.country}>Price:</Text>
              <Text style={styles.price}> {product.price} KWD</Text>
            </CardItem>

            <View>
              <View>{checkQuantity()}</View>
            </View>
          </Content>
        </ImageBackground>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.productDetailReducer.product,
    items: state.basketReducer.items,
    loading: state.productDetailReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProductDetail: productID => dispatch(fetchProductDetail(productID)),
    resetProductDetail: () => dispatch(resetProductDetail()),
    addToBasket: item => dispatch(addItemToBasket(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
