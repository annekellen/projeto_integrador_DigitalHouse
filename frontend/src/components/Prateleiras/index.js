import axios from 'axios';
import React from 'react';
import Card from '../Card';
import './style.css';




const Prateleiras = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    const runApi = async () => {
      try {
        const response = await axios.get('http://localhost:3333/products');
         setProducts(response.data); 
      
      } catch (err) {
        console.log(err);
      }
    };
    runApi();
  
  }, []);
  return (
    <section className="prateleiras">
      {
        products.map((product) => (
          <Card product={product} />
        ))
      }
    </section>
  );
};
export default Prateleiras;
