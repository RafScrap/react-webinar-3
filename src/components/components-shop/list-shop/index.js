import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';

function ListShop ({ list = [], onSelectItem = () => {}}) {
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} onSelect={onSelectItem} />
        </div>
      ))}
    </div>
  );
}

ListShop.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onSelectItem: PropTypes.func,
};

export default React.memo(ListShop);
