import React, { useState } from "react";

interface ShoppingCartState {
  items: Array<{
    id: number;
    name: string;
    quantity: number;
  }>;
}

const ShoppingCart: React.FC = () => {
  const [state, setState] = useState<ShoppingCartState>({
    items: [],
  });

  const handleAddToCart = (item: {
    id: number;
    name: string;
    quantity: number;
  }) => {
    setState((prev) => ({
      items: [...prev.items, item],
    }));
  };

  return (
    <div>
      <ul>
        {state.items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ id: 1, name: "Product 1", quantity: 1 })}>
        Add to Cart
      </button>
    </div>
  );
};

export default ShoppingCart;