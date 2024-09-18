import React from 'react';
import PropTypes from 'prop-types';
import ButtonBasket from '../../components-common/button-basket';
import { plural } from '../../../utils';
import './style.css';

function Controls({ setBasket = () => {}, isBasket = false, count = 0, price = 0}) {
  return (
    <div className="Controls">
      <div className="Controls-text">В корзине: 
      </div>
      <div className="Controls-result">
        {count !== 0  ? `${count} ${plural(count, {
              one: 'товар',
              few: 'товара',
              many: 'товаров',
            })} / ${price} ₽`
          : 'пусто'}
      </div>
      <ButtonBasket setBasket={setBasket} isBasket={isBasket} title='Перейти'/>
    </div>
  );
}

Controls.propTypes = {
  setBasket: PropTypes.func,
  isBasket: PropTypes.bool,
  count: PropTypes.number,
  price: PropTypes.number
};

export default React.memo(Controls);
