import * as actionTypes from "./types";
import instance from "./instance";
import { fetchProfile } from "./authActions";
import { AsyncStorage } from "react-native";

export const fetchProducts = () => async dispatch => {
  try {
    const res = await instance.get("products/");
    const products = res.data;
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: products });
  } catch (error) {
    console.error(error);
  }
};

export const filterProducts = query => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: query
  };
};

export const setLoading = () => ({
  type: actionTypes.LOADING
});

export const updateAsyncStorage = () => ({
  type: actionTypes.UPDATE_ASYNC_STORAGE
});

export const addItemsTOAsyncStorage = basketItems => async dispatch => {
  try {
    await AsyncStorage.setItem("items", JSON.stringify(basketItems));
  } catch (error) {
    console.error(error);
  }
};

export const addItemToBasket = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };

  //plan A dispatch updateAsyncStorage

  //plan B maybe do this:
  // make an array appened the new item to the array then set the array to the async storage

  //       await AsyncStorage.setItem("token", token);
};

export const removeItemFromBasket = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});

export const checkoutBasket = products => async dispatch => {
  try {
    const res = await instance.post("orders/", products);
    dispatch({ type: actionTypes.CHECKOUT, payload: res.data });
    // dispatch fetch profile to get updated order history
    dispatch(fetchProfile());

    // remove items from  basket after checkingout
    await AsyncStorage.removeItem("items");
  } catch (error) {
    console.error(error);
  }
};
