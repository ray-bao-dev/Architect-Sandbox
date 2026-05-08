import { createContext, useContext } from 'react';

export type CartItem = {
  productId: string;
  quantity: number;
};

export type CartContextValue = {
  items: CartItem[];
  addItem: (productId: string, quantity?: number) => void;
  updateItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  itemCount: number;
  subtotal: number;
};

export const CartContext = createContext<CartContextValue | null>(null);

export const useCart = () => {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error('useCart must be used within CartProvider');
  }
  return value;
};
