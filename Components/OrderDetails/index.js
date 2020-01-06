import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import moment from "moment";

import { ImageBackground } from "react-native";
import wallpaper from "../../assets/wall.png";

// NativeBase Components
import {
  Title,
  Text,
  Body,
  Content,
  Container,
  Card,
  CardItem
} from "native-base";

// Style
import styles from "./styles";
import BasketItem from "../SummaryOrder/BasketItem";

class OrderDetail extends Component {
  static navigationOptions = ({ order, navigation }) => {
    return {
      title: "Order Detail",
      headerStyle: {
        backgroundColor: "#3dffcb",
        fontWeight: "bold"
      }
    };
  };

  render() {
    let order = this.props.profile.order_history.find(
      order => order.id === this.props.navigation.getParam("orderID")
    );
    let orderAddress = this.props.profile.addresses.find(
      address => address.id === order.address
    );
    const getOrderItem = () =>
      order.baskets.map(item => (
        <Text style={styles.text}>
          {item.product.name} - {item.product.price} KWD - Qty: {item.quantity}{" "}
          {"\n"}{" "}
        </Text>
      ));
    return (
      <Container>
        <ImageBackground
          source={wallpaper}
          style={{ width: "100%", height: "100%" }}
        >
          <Content padder>
            <Card style={styles.container}>
              <CardItem style={styles.middleText}>
                <Text style={styles.middleText}>
                  Order Number: {order.order_ref.toUpperCase()}
                </Text>
              </CardItem>
              <CardItem style={styles.middleText}>
                <Body>
                  <Text style={styles.titleOfDetail}>Shipping Address:</Text>
                  <Text style={styles.text}>
                    Area: {orderAddress.area} {"\n"}
                    Street: {orderAddress.street} {"\n"}
                    Block: {orderAddress.block}
                    {"\n"}
                  </Text>
                  <View style={styles.hairLine} />
                  <Text style={styles.titleOfDetail}>Items Ordered:</Text>

                  <View style={styles.text}>{getOrderItem()}</View>

                  <View style={styles.hairLine} />

                  <Text style={styles.titleOfDetail}>Total Price: </Text>

                  <Text style={styles.text}>{order.total} KWD</Text>

                  <View style={styles.hairLine} />
                  <Text style={styles.titleOfDetail}>Order Date:</Text>

                  <Text style={styles.text}>
                    {moment(order.date_time).calendar()}
                    {"\n"}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  loading: state.authReducer.profileLoading
});

export default connect(mapStateToProps)(OrderDetail);
