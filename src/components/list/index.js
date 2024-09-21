import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';

function List ({ list = [], onFunc = () => {}, nameClass = ''}) {
  console.log(nameClass);
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} onFunc={onFunc} nameClass={nameClass}/>
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onSelectItem: PropTypes.func,
};

export default React.memo(List);
