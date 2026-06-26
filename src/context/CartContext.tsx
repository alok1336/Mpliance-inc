"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface CartProduct {
  id: string;
  name: string;
  slug: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartProduct[];

  addToCart: (
    product: Omit<CartProduct, "quantity">
  ) => void;

  removeFromCart: (id: string) => void;

  clearCart: () => void;

  itemCount: number;
}

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<
    CartProduct[]
  >([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("cart");

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(items)
    );
  }, [items]);

  function addToCart(
    product: Omit<CartProduct, "quantity">
  ) {
    setItems((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product.id
      );

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: string) {
    setItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const itemCount = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used within CartProvider"
    );
  }

  return context;
}