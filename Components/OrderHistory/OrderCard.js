import React, { Component } from "react";
import { View } from "react-native";
import moment from "moment";
import { withNavigation } from "react-navigation";
// NativeBase Components
import {
  Content,
  ListItem,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Icon
} from "native-base";

// Style
import styles from "./styles";

const OrderCard = ({ navigation, order }) => {
  const handlePress = () => {
    navigation.navigate("OrderDetailScreen", { orderID: order.id });
  };
  return (
    <Content style={styles.container}>
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          {/* <CardItem style={styles.transparent}> */}
          <Left style={styles.left}>
            <Text style={styles.text}>
              Order ID {order.order_ref.toUpperCase()}
            </Text>

            <View style={styles.cardView}>
              <Text style={styles.text1}>
                {/* {"\t"} */}
                <Icon
                  name="logo-usd"
                  type="iOS"
                  style={styles.icon}
                ></Icon>{" "}
                {order.total} KWD
                {"    "}
                <Icon
                  name="calendar"
                  type="Entypo"
                  style={styles.icon}
                ></Icon>{" "}
                {moment(order.date_time).calendar()}
              </Text>
            </View>
          </Left>
          <Icon
            name="caretright"
            type="AntDesign"
            style={styles.viewIcon}
          ></Icon>
          {/* </CardItem> */}
        </Card>
      </ListItem>
    </Content>
  );
};

export default withNavigation(OrderCard);
