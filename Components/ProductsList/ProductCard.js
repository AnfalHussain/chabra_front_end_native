import React, { Component } from "react";
import { View } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { CardViewWithImage } from 'react-native-simple-card-view'
import GradientButton from 'react-native-gradient-buttons';

import { Col, Row, Grid } from "react-native-easy-grid";

// NativeBase Components
import {
  Content,
  Container,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Item,
  Body,
  Button,
  Icon,
} from "native-base";

// Style
import styles from "./styles";
class ProductCard extends Component {


  handlePress = () => {
    navigation.navigate(
      "ProductDetailScreen",
      { productID: this.props.product.id, productName: this.props.product.name }
    );
  };

  handleAddItem = () => {
    const newItem = {
      id: this.props.product.id,
      name: this.props.product.name,
      price: this.props.product.price,
      quantity: 1,
    };
    this.props.addToBasket(newItem);
  };
  render() {

    return (
      <>
        <CardItem
          button
          onPress={this.handlePress}
          style={styles.itemList}
        >


          <CardViewWithImage
            width={180}
            source={{ uri: this.props.product.img }}
            content={`Each: ${this.props.product.price} KWD`
            }
            title={this.props.product.name}
            titleFontSize={20}
            titleFontFamily={"Avenir"}
            imageWidth={180}
            imageHeight={180}
            buttonComponent
            contentFontFamily={"Futura"}
            contentFontSize={16}
            roundedImage={false}
            style={styles.transparent}
          />

        </CardItem>
        {/* <Button  onPress={this.handleAddItem}> */}

        {/* </Button> */}

      </>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {

    addToBasket: item => dispatch(addItemToBasket(item))
  };
};
export default withNavigation(connect(
  null,
  mapDispatchToProps
)(ProductCard));
