import { useMemo, useState, type ReactNode } from 'react';
import { CartContext, type CartItem } from './cartContext';
import { products } from './data/products';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    { productId: 'ceramic-pour-over', quantity: 1 },
    { productId: 'travel-mug', quantity: 2 },
  ]);

  const addItem = (productId: string, quantity = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (!existing) {
        return [...current, { productId, quantity }];
      }
      return current.map((item) =>
        item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item,
      );
    });
  };

  const updateItem = (productId: string, quantity: number) => {
    setItems((current) =>
      quantity <= 0
        ? current.filter((item) => item.productId !== productId)
        : current.map((item) => (item.productId === productId ? { ...item, quantity } : item)),
    );
  };

  const removeItem = (productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  };

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => {
      const product = products.find((entry) => entry.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0);

    return { items, addItem, updateItem, removeItem, itemCount, subtotal };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
