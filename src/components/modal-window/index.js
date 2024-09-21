import React from 'react';
import Modal from 'react-modal';
import Basket from '../basket'
import PropTypes from 'prop-types';

function ModalWindow({setBasket = () => {}, list = [], onDeleteItem = () => {}, 
sum = 0, nameClass='', isBasket= false, countUnique}) {
    return (
      <Modal isOpen={isBasket} className='modal'>
        <Basket setBasket = {setBasket} list = {list} onDeleteItem = {onDeleteItem} 
        sum = {sum} nameClass={nameClass} countUnique={countUnique}/>
      </Modal>
    );
}

ModalWindow.propTypes = {
  setBasket: PropTypes.func,
  list: PropTypes.array,
  onDeleteItem: PropTypes.func,
  price: PropTypes.number,
  nameClass: PropTypes.string,
  isBasket: PropTypes.bool
};

export default React.memo(ModalWindow);