import React from 'react';
import Modal from 'react-modal';
import Head from '../../components-common/head';
import ButtonBasket from '../../components-common/button-basket'
import ListBasket from '../list-basket'
import PropTypes from 'prop-types';
import ResultBasket from '../result-basket';

function Basket({isBasket = false, setBasket = () => {}, list = [], 
  onDeleteItem = () => {}, price = 0}) {
    return (
      <Modal isOpen={isBasket}>
        <Head>
            <h1>Корзина</h1>
            <ButtonBasket setBasket={setBasket} isBasket={false} title='Закрыть'/>
        </Head>
            <ListBasket
              list={list}
              onDeleteItem={onDeleteItem}
            />
        <ResultBasket price={price}/>
      </Modal>
    );
}

Basket.propTypes = {
  isBasket: PropTypes.bool,
  setBasket: PropTypes.func,
  list: PropTypes.array,
  onDeleteItem: PropTypes.func,
  price: PropTypes.number
};

export default React.memo(Basket);