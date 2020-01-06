import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
  orders: [],
  orderLoading: true
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let newItem = action.payload;

      let checkItem = state.items.find(item => item.id === newItem.id);
      if (checkItem) {
        checkItem.quantity += newItem.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(newItem)
        };
      }

    case actionTypes.REMOVE_ITEM:
      let filteredItems = state.items.filter(item => item !== action.payload);
      return {
        ...state,
        items: filteredItems
      };

    case actionTypes.UPDATE_ASYNC_STORAGE:
      return {
        ...state,
        items: [...state.items]
      };

    case actionTypes.CHECKOUT:
      return {
        orders: state.orders.concat(action.payload),
        items: []
      };
    case actionTypes.FETCH_ORDERS:
      const orders = action.payload;
      return {
        orders: orders,
        orderLoading: false
      };
    default:
      return state;
  }
};

export default basketReducer;
