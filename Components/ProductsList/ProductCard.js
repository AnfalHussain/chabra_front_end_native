import React, { Component } from "react";
// NativeBase Components
import { Text, CardItem, Icon, Left, Button } from "native-base";
import { View } from "react-native";

import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { CardViewWithImage } from "react-native-simple-card-view";

import IconBadge from "react-native-icon-badge";

// Style
import styles from "./styles";
//Components
import AddToCart from "../AddToCart";

class ProductCard extends Component {
  handlePress = () => {
    this.props.navigation.navigate("ProductDetailScreen", {
      productID: this.props.product.id,
      productName: this.props.product.name
    });
  };

  render() {
    return (
      <>
        <View style={{ width: 200 }}>
          <IconBadge
            MainElement={
              <CardItem
                button
                onPress={this.handlePress}
                style={styles.itemList}
              >
                <CardViewWithImage
                  width={160}
                  source={{ uri: this.props.product.img }}
                  content={`${this.props.product.price} KWD/item`}
                  title={this.props.product.name}
                  titleFontSize={16}
                  titleFontFamily={"Avenir"}
                  imageWidth={130}
                  imageHeight={130}
                  buttonComponent={
                    this.props.product.stock !== 0 ? (
                      <AddToCart product={this.props.product} />
                    ) : (
                      <Button disabled>
                        <Text> Out of stock</Text>
                      </Button>
                    )
                  }
                  contentFontFamily={"Futura"}
                  contentFontSize={15}
                  contentMargin={
                    ((top = 5), (bottom = 5), (right = 5), (left = 5))
                  }
                  roundedImage={false}
                  style={styles.transparent}
                />
              </CardItem>
            }
            BadgeElement={
              <Text style={{ color: "white", fontSize: 18 }}>
                {this.props.products.find(
                  product => product.id === this.props.product.id
                )
                  ? this.props.products.find(
                      product => product.id === this.props.product.id
                    ).quantity
                  : 0}{" "}
                in basket
              </Text>
            }
            IconBadgeStyle={{
              width: 100,
              height: 30,
              backgroundColor: "#117efa",
              top: 20
            }}
            Hidden={
              !this.props.products.find(
                product => product.id === this.props.product.id
              )
            }
          />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.basketReducer.items
  };
};
export default withNavigation(connect(mapStateToProps)(ProductCard));
