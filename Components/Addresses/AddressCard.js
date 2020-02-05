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
          {/* <CollapseHeader>
            <View>
              <Text>where are you</Text>

              <Text>{this.props.addressTitle}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            <View>
              <Text style={{ color: "#EF8A08" }}>Ta daa!</Text>
            </View>
          </CollapseBody> */}



          
        </Collapse>
      </>
    );
  }
}
export default AddressCard;
