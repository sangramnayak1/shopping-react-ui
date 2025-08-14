// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [saveForLaterItems, setSaveForLaterItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    const storedSaveForLater = localStorage.getItem("saveForLaterItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
    if (storedSaveForLater) setSaveForLaterItems(JSON.parse(storedSaveForLater));
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("saveForLaterItems", JSON.stringify(saveForLaterItems));
  }, [saveForLaterItems]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToSaveForLater = (product) => {
    removeFromCart(product.id);
    setSaveForLaterItems((prev) => [...prev, product]);
  };

  const moveBackToCart = (product) => {
    setSaveForLaterItems((prev) => prev.filter((item) => item.id !== product.id));
    setCartItems((prev) => [...prev, product]);
  };

  const removeFromSaveForLater = (id) => {
    setSaveForLaterItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        moveToSaveForLater,
        saveForLaterItems,
        moveBackToCart,
        removeFromSaveForLater
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
