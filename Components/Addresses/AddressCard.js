import React, { Component } from "react";
import { View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList
} from "accordion-collapse-react-native";

// NativeBase Components
import {
  Content,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left
} from "native-base";

// Style
import styles from "./styles";

class AddressCard extends Component {
  render() {
    return (
      <>
        <Collapse>
          <CollapseHeader>
            <View>
              <Text>where are you</Text>

              <Text>{this.props.addressTitle}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <Text>Ta daa!</Text>
          </CollapseBody>
        </Collapse>
      </>
    );
  }
}
export default AddressCard;
