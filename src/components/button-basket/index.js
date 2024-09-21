import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ButtonBasket({setBasket = () => {}, isBasket = false, title = '', nameClass=''}) {
  return (
    <div className={'Button-basket'}>
    <button className={'Button-basket-button ' + nameClass} onClick={() => setBasket(isBasket)}>{title}</button>
    </div>
  );
}

ButtonBasket.propTypes = {
  setBasket: PropTypes.func,
  isBasket: PropTypes.bool,
  title: PropTypes.string
};

export default React.memo(ButtonBasket);