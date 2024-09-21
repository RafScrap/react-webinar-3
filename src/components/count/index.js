
import React from 'react';
import PropTypes from 'prop-types';
import {plural} from '../../utils';
import './style.css';

function Count({count, one, few, many}) {
    const content = String(count) + ' ' + plural(count, {
        one: one,
        few: few,
        many: many,
    });
    return (
    <div className="count">
        {content}
    </div>
    );
}

Count.propTypes = {
    children: PropTypes.node,
};
  
export default React.memo(Count);