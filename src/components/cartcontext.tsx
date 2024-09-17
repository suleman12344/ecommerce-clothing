// CartContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  cartCount: number;
  addToCart: (quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (quantity: number) => {
    setCartCount(cartCount + quantity);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
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
