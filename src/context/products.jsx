import { createContext, useState, useEffect } from "react";

import PRODUCTS from "../shop-data.json"

export const productsContext = createContext({
  currentProducts: [],
});

export const ProductsProvider = ({ children }) => {
  const [currentProducts, setCurrentProducts] = useState(PRODUCTS);
  const value = { currentProducts, setCurrentProducts };

  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
