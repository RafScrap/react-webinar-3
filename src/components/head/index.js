import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ children, name }) {
  return (
    <>
    <div className="Head">
      <h1 className="Head-name">{name}</h1>
      {children}
    </div>
    </>
  );
}

Head.propTypes = {
  children: PropTypes.node,
};

export default React.memo(Head);
