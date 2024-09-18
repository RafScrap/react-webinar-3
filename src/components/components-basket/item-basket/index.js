import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function ItemBasket({item = {}, onDelete = () => {}}) {
  const cn = bem('Item-basket');
  // Счётчик выделений
  const [count, setCount] = useState(item.count);

  const callbacks = {
   onDelete: e => {
      e.stopPropagation();
      onDelete(item.code);
      setCount(0);
    }
  };

  return (
    item.count !== 0 ? <div className={cn()}>
      <div className={cn('code')}>{item.code}</div>
      <div className={cn('title')}>
        {item.title}
      </div>
      <div className={cn('price')}>
        {item.price}
      </div>
      <div className={cn('currency')}> ₽</div>
      <div className={cn('price')}>
        {item.count}
      </div>
      <div className={cn('currency')}> шт</div>
      <div className={cn('actions')}>
        <button onClick={callbacks.onDelete}>Удалить</button>
      </div>
    </div> : <></>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

export default React.memo(ItemBasket);
