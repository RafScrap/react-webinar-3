import React from 'react';
import Head from '../head';
import Controls from '../controls'
import List from '../list'
import PageLayout from '../page-layout'
import PropTypes from 'prop-types';
import ButtonBasket from '../button-basket';
import ResultShop from '../result-shop'

function Shop({setBasket = () => {}, list = [], onSelectItem  = () => {}, countUnique = 0, sum = 0, nameClass = ''}) {
    console.log(nameClass);
    return (
    <PageLayout nameClass={nameClass}>
        <Head name={'Магазин'}>
        </Head>
        <Controls>
            <ResultShop sum={sum} countUnique={countUnique}></ResultShop>
            <ButtonBasket setBasket={setBasket} isBasket={true} title='Перейти' nameClass={nameClass}/>
        </Controls>
        <List list={list} onFunc={onSelectItem} nameClass={nameClass}/>
    </PageLayout>
    );
}

Shop.propTypes = {
    setBasket: PropTypes.func,
    list: PropTypes.array,
    onSelectItem: PropTypes.func,
    countUnique: PropTypes.number,
    priceSum: PropTypes.number
  };

export default React.memo(Shop);