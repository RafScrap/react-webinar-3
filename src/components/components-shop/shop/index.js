import React from 'react';
import Head from '../../components-common/head';
import Controls from '../controls'
import ListShop from '../list-shop'
import PageLayout from '../page-layout'
import PropTypes from 'prop-types';

function Shop({setBasket = () => {}, list = [], onSelectItem  = () => {}, countSum = 0, priceSum = 0}) {
    return (
    <PageLayout>
        <Head>
            <h1>Магазин</h1>
        </Head>
        <Controls setBasket={setBasket} isBasket={true} count={countSum} price={priceSum}/>
        <ListShop list={list} onSelectItem={onSelectItem}/>
    </PageLayout>
    );
}

ListShop.propTypes = {
    setBasket: PropTypes.func,
    list: PropTypes.array,
    onSelectItem: PropTypes.func,
    countSum: PropTypes.number,
    priceSum: PropTypes.number
  };

export default React.memo(Shop);