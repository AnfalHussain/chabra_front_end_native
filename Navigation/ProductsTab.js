import React, { Component } from "react";
import { Icon } from "native-base";
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
import ShoppingBasket from "../Components/ShoppingBasket";
import OrderSum from "../Components/SummaryOrder"
import OrderList from '../Components/OrderHistory'
import ThankYou from "../Components/ThankYou"
import OrderDetails from "../Components/OrderDetails";


import { createStackNavigator } from "react-navigation-stack";

const ProductsTab = createStackNavigator(
  {
    ProductsListScreen: ProductsList,
    ProductDetailScreen: ProductDetail,
    ShoppingBasketScreen: ShoppingBasket,
    SummaryScreen: OrderSum,
    OrderListScreen: OrderList,
    OrderDetailScreen: OrderDetails,
    ThankYouScreen: ThankYou,

  },

  {
    initialRouteName: "ProductsListScreen",
    navigationOptions: {
      tabBarLabel: "Chabra List",
      tabBarIcon: () => <Icon type="Entypo" name="shop" size={20} />,
      headerStyle: {
        backgroundColor: "#3dffcb",
        fontWeight: 'bold',
      }
    }
  }
);

export default ProductsTab;
