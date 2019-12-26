import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItemFromBasket } from "../../redux/actions";

// NativeBase Components
import { Text, Left, Body, Button, ListItem, Icon } from "native-base";

class BasketItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "black", marginLeft: 16 }}> {item.name} </Text>
          <Text note style={{ marginLeft: 30 }}>
            {item.price}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "black", marginLeft: 60 }}>
            {item.quantity}
          </Text>
        </Body>
        <Button
          transparent
          onPress={() => this.props.removeItemFromBasket(item)}
        >
          <Text>
            <Icon
              name="ios-trash"
              type="Ionicons"
              style={{ color: "#1a215c", fontSize: 32 }}
            />
          </Text>
        </Button>
      </ListItem>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeItemFromBasket: item => dispatch(removeItemFromBasket(item))
});

export default connect(null, mapDispatchToProps)(BasketItem);
