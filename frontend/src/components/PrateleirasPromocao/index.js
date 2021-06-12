import CardPromocao from '../CardPromocao'
import React from 'react';
import Carousel from 'react-elastic-carousel';

import './style.css';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
];

const PrateleirasPromocao = () => {
  return (
    <>
      
        <div className="container-promocao">

          <Carousel breakPoints={breakPoints}>
            <CardPromocao />
            <CardPromocao />
            <CardPromocao />
            <CardPromocao />
            <CardPromocao />
            <CardPromocao />
          </Carousel>
        </div>
     
    </>
  );
};
export default PrateleirasPromocao;