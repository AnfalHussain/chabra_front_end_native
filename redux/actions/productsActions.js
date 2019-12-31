import * as actionTypes from "./types";
import instance from "./instance";
import { fetchProfile } from "./authActions";
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

export const addItemToBasket = item => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: item
  };
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
  } catch (error) {
    console.error(error);
  }
};
