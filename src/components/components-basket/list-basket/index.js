import React from 'react';
import PropTypes from 'prop-types';
import ItemBasket from '../item-basket';

function ListBasket({ list = [], onDeleteItem = () => {}}) {
  return (
    <div className="List-basket">
      {list.map(item => (
        <div key={item.code} className="List-basket-item">
          <ItemBasket item={item} onDelete={onDeleteItem} />
        </div>
      ))}
    </div>
  );
}

ListBasket.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onDeleteItem: PropTypes.func,
};

export default React.memo(ListBasket);
