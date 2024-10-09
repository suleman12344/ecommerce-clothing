"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define types for cart items
type CartItem = {
  id: string;
  title: string;
  price: string;
  count: number;
  identity: string;
};

type CartContextType = {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // Add setCartItems here
  cartCount: number;
  addToCart: (item: CartItem) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const cartCount = cartItems.reduce((total, item) => total + item.count, 0);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].count += item.count;
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, item]);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, cartCount, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
