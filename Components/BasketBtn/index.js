import React, { Component } from "react";
import { Icon, View, Text } from "native-base";
import { withNavigation } from "react-navigation";
import IconBadge from "react-native-icon-badge";
import { connect } from "react-redux";
import styles from "./styles";
class ShoppingCartBtn extends Component {
  render() {
    const items = this.props.items;

    if (items) {
      let n = 0;
      items.map(item => {
        n += item.quantity;
      });
    }
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <IconBadge
          MainElement={
            <Icon
              onPress={() =>
                this.props.navigation.navigate("ShoppingBasketScreen")
              }
              name="shopping-basket"
              type="FontAwesome"
              style={styles.icon}
            />
          }
          BadgeElement={
            <Text style={{ color: "#FFFFFF" }}>{items ? items.length : 0}</Text>
          }
          IconBadgeStyle={{
            width: 20,
            height: 20,
            backgroundColor: "#E63946",
            left: 20
          }}
          Hidden={items && items.length == 0}
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.basketReducer.items
});
export default withNavigation(connect(mapStateToProps)(ShoppingCartBtn));
