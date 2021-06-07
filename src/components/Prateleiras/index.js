import Card from '../Card';
import { ProductConsumer } from '../Context';

import './style.css';

const Prateleiras = () => {
  return (
    <section className="prateleiras">
      <ProductConsumer>
        {(value) => {
          return value.StoreProducts.map((product) => (
            <Card key={product.id} product={product} />
          ));
        }}
      </ProductConsumer>
    </section>
  );
};
export default Prateleiras;
