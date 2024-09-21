import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function PageLayout({ children, nameClass }) {
  return (
    <div className={'PageLayout ' + nameClass}>
        <div className={'PageLayout-content'}>{children}</div>
    </div>  
    );
}

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default React.memo(PageLayout);
