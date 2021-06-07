import React from 'react';
import { StoreProducts } from '../Data/Produtos';

const ProductContext = React.createContext();

const handleDetail = () => {
  console.log('hello from detail');
};
const addToCart = () => {
  console.log('hello from cart');
};

const ProductProvider = (props) => {
  return (
    <ProductContext.Provider value={{ StoreProducts, handleDetail, addToCart }}>
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
