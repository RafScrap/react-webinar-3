import React from 'react';
import PropTypes from 'prop-types';
import { addCurrency } from '../../utils';

function Price({price}) {
  return (
      <div className='Price'>
        {addCurrency('RUB', price)}
      </div>
  );
}

Price.propTypes = {
    price: PropTypes.number,
};

export default React.memo(Price);
