// TotalContext.js
import React, { createContext, useState, useContext } from 'react';

const TotalContext = createContext();

export const useTotal = () => useContext(TotalContext);

export const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const addPackage = (price) => {
    setTotal(total + price);
  };

  const addProduct = (price) => {
    setSubtotal(subtotal + price);
    setTotal(total + price);
  };

  const resetTotal = () => {
    setTotal(0);
    setSubtotal(0);
  };

  return (
    <TotalContext.Provider value={{ total, subtotal, addPackage, addProduct, resetTotal }}>
      {children}
    </TotalContext.Provider>
  );
};
