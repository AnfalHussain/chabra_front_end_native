import * as actionTypes from "./types";
import jwt_decode from "jwt-decode";
import { setErrors, resetErrors } from "./errors";
import { AsyncStorage } from "react-native";
import instance from "./instance";

export const fetchProfile = () => async dispatch => {
  try {
    const res = await instance.get("profile/");
    const profile = res.data;
    dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
  }
};

//CREATE ADDRESS

//Edit ADDRESSES

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      console.log("user:", user);
      let decodedUser = jwt_decode(user.access);
      dispatch(setAuthToken(user.access));
      dispatch(setCurrentUser(decodedUser));
      // dispatch(fetchOrders());
      //Ask Khalid what he means by then goBack()
      //Khalid's Note Navigate to profile after defining login screen in ProfileTab then goBack()
      dispatch(resetErrors());
      navigation.replace("ProfileScreen");
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await instance.post("register/", userData);
      dispatch(login(userData, navigation));
      dispatch(resetErrors());
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};
const resetProfile = () => ({
  type: actionTypes.RESET_PROFILE
});

export const editProfile = (userData, navigation) => {
  return async dispatch => {
    try {
      let newUserDate = {
        user: {
          username: "",
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email
        },
        phone: userData.phone,
        gender: userData.gender,
        age: userData.age,
        image: userData.image
      };

      const res = await instance.put("profile/", newUserDate);
      dispatch({ type: actionTypes.EDIT_PROFILE, payload: res.data });
      dispatch(resetErrors());
      navigation.navigate("ProfileScreen");
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const checkForExpiredToken = navigation => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        dispatch(setAuthToken(token));
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  return async dispatch => {
    if (token) {
      await AsyncStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(fetchProfile());
    } else {
      await AsyncStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
    }
  };
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const logout = () => {
  return async dispatch => {
    dispatch(setAuthToken());
    dispatch(setCurrentUser());
    dispatch(resetProfile());
  };
};

// export const fetchOrders = () => async dispatch => {
//   try {
//     const res = await instance.get("orders/");
//     const orders = res.data;
//     dispatch({ type: actionTypes.FETCH_ORDERS, payload: orders });
//   } catch (error) {
//     console.error(error);
//   }
// };
