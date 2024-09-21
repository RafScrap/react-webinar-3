
import React from 'react';
import PropTypes from 'prop-types';
import Count from '../count';
import Price from '../price';
import './style.css';


function ResultShop({countUnique, sum}) {
    return (
    <div className="Result-shop">
        <div className="Result-shop-text">В корзине: </div>
        <div className="Result-shop-result">
            {countUnique !== 0  ? 
            <><Count className="Result-shop-result-count" count={countUnique} one='товар' few='товара' many = 'товаров'/>/
            <Price className="Result-shop-result-price" price={sum}/></>
            : 'пусто'}
        </div>
    </div>
    );
}

ResultShop.propTypes = {
    children: PropTypes.node,
};
  
  export default React.memo(ResultShop);