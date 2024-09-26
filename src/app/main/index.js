import { memo, useCallback, useEffect } from 'react';
import Item from '../../components/item';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import BasketTool from '../../components/basket-tool';
import List from '../../components/list';
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import CatalogNavigation from '../../components/calatog-navigation';
import {useNavigate} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Product from '../product'

function Main() {
  const store = useStore();

  useEffect(() => {
    store.actions.catalog.load(0);
  }, []);

  const nav = useNavigate();

  const select = useSelector(state => ({
    list: state.catalog.list,
    amount: state.basket.amount,
    sum: state.basket.sum,
    page: state.catalog.page,
    countPages: state.catalog.countPages
  }));

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    moveList: (skip) => store.actions.catalog.load(skip),
    chooseProduct: (id) => {store.actions.product.load(id).then(() => nav(`/${id}`))},
    getProduct: useCallback(() => store.actions.product.getState(), [store]),
    returnMain: useCallback(() => nav(`/`), [store])
  };

  const renders = {
    item: useCallback(
      item => {
        return <Item item={item} onAdd={callbacks.addToBasket} chooseProduct={callbacks.chooseProduct} />;
      },
      [callbacks.addToBasket, callbacks.chooseProduct],
    ),
  };

  return (
    <Routes>
    <Route path="/" element={
        <PageLayout>
        <Head title="Магазин" />
        <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} returnMain={callbacks.returnMain}/>
        <List list={select.list} renderItem={renders.item} />
        <CatalogNavigation moveList={callbacks.moveList} page={select.page} countPages={select.countPages}/>
      </PageLayout>
    }/>
    <Route path="/:id" element={
        <Product onAdd={callbacks.addToBasket} getProduct={callbacks.getProduct} openModalBasket={callbacks.openModalBasket} 
        amount={select.amount} sum={select.sum} returnMain={callbacks.returnMain}/>
    }/>
    </Routes>
  );
}

export default memo(Main);
