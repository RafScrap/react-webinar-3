import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ResultBasket({price = 0}) {
  return (
    <>
    {price !== 0 ? 
    <div className="Result-basket">
      <div className="Result-basket-text">Итого: </div>
      <div className="Result-basket-price">
         {price} ₽
      </div>
    </div> : <></>}
    </>
  );
}

ResultBasket.propTypes = {
  price: PropTypes.number
};

export default React.memo(ResultBasket);
