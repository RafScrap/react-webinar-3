import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Price from '../price';
import Count from '../count'
import './style.css';

function Item({item = {}, onFunc = () => {}, nameClass = ''}) {
  // Счётчик выделений
  const [count, setCount] = useState(0);
  console.log(nameClass);
  const callbacks = {
    onClick: (e) => {
      if (nameClass === 'shop') {
        onFunc(item.code);
        setCount(count + 1);
      }
      else if (nameClass === 'basket') {
        e.stopPropagation();
        onFunc(item.code);
        setCount(0);
      }
    },
  };

  return (
    (item.count !== 0 || nameClass !== 'basket') ? <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>{item.title}</div>
      <Price price={item.price}/>
      <Count count={item.count} one='шт' few='шт' many='шт'/>
      <div className='Item-actions'>
        <button onClick={callbacks.onClick}>{nameClass === 'shop' ? 'Добавить' : 'Удалить'}</button>
      </div>
    </div> : <></>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func,
};

export default React.memo(Item);
