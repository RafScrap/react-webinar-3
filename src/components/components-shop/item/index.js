import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function Item({item = {}, onSelect = () => {}}) {
  const cn = bem('Item');
  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      onSelect(item.code);
      setCount(count + 1);
    },
  };

  return (
    <div
      className={cn()}>
      <div className={cn('code')}>{item.code}</div>
      <div className={cn('title')}>
        {item.title}
      </div>
      <div className={cn('price')}>
        {item.price}
      </div>
      <div className={cn('currency')}> ₽</div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onClick}>Добавить</button>
      </div>
    </div>
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
