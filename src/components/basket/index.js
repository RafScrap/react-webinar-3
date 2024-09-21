import React from 'react';
import Head from '../head';
import ButtonBasket from '../button-basket'
import List from '../list'
import PropTypes from 'prop-types';
import ResultBasket from '../result-basket';
import Controls from '../controls';
import PageLayout from '../page-layout'

function Basket({setBasket = () => {}, list = [], 
  onDeleteItem = () => {}, sum = 0, nameClass='', countUnique}) {
    return (
        <PageLayout nameClass={nameClass}>
          <Head name={'Корзина'}>
              <ButtonBasket setBasket={setBasket} isBasket={false} title='Закрыть' nameClass={nameClass}/>
          </Head>
          <Controls></Controls>
          <List
            list={list}
            onFunc={onDeleteItem}
            nameClass={nameClass}
          />
          <ResultBasket price={sum} countUnique={countUnique}/>
        </PageLayout>
    );
}

Basket.propTypes = {
  setBasket: PropTypes.func,
  list: PropTypes.array,
  onDeleteItem: PropTypes.func,
  priceSum: PropTypes.number,
  nameClass: PropTypes.string,
};

export default React.memo(Basket);