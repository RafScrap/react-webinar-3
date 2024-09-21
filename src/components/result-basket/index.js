import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Price from '../price'

function ResultBasket({price = 0, countUnique}) {
  return (
    <>
    {countUnique !== 0 ? 
    <div className="Result-basket">
      <div className="Result-basket-text">Итого</div>
      <Price price={price}/>
    </div> : <></>}
    </>
  );
}

ResultBasket.propTypes = {
  price: PropTypes.number
};

export default React.memo(ResultBasket);
