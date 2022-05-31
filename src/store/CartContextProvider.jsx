import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exuistingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const exuistingCartItem = state.items[exuistingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (exuistingCartItem) {
      updatedItem = {
        ...exuistingCartItem,
        amount: exuistingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[exuistingCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const exuistingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const exuistingCartItem = state.items[exuistingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - exuistingCartItem.price;

    let updatedItems;
    if (exuistingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...exuistingCartItem,
        amount: exuistingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[exuistingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cardState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const cartContext = {
    items: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
