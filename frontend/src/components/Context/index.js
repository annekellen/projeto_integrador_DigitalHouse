import React,{useState} from 'react';
import { StoreProducts } from '../Data/Produtos';

const ProductContext = React.createContext();

const handleDetail = () => {
  console.log('hello from detail');
};
/*  const StoreProducts = async() =>{
  const response= await axios.get('http://localhost:3333/products')
  return response.data

} */ 

const ProductProvider = (props) => {
  const [cart,setCart] = useState([])
  const cart2 = [
    {id:12, nome: 'blusa'},
    {id:13, nome: 'short'},
    {id:15, nome:'tenis'}
    ]
    cart2.filter(val=>val.id!==13)


  const addToCart = (products) => {
    const aux = [...cart,products]
    setCart(aux)
  };
  return (
    <ProductContext.Provider value={{ StoreProducts, handleDetail, addToCart , cart  }}>
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
