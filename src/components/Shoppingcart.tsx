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
