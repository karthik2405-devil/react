import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price} x {item.quantity}</p>
          <button onClick={() => dispatch(increment(item))}>+</button>
          <button onClick={() => dispatch(decrement(item))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
