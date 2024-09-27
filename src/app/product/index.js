import { memo, useEffect, useCallback } from 'react';
import {useParams} from "react-router";
import useStore from '../../store/use-store';
import useSelector from '../../store/use-selector';
import {useNavigate} from "react-router-dom";
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import ProductInfo from '../../components/product-info';
import BasketTool from '../../components/basket-tool';
import './style.css'

function Product() {

  const store = useStore();

  const idProduct = useParams().id;

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(() => store.actions.basket.addToBasket(idProduct), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    returnMain: useCallback(() => nav(`/`), [store]),
  };

  useEffect(() => {
    console.log('useEffect')
    store.actions.product.load(idProduct);
  }, [idProduct]);

  const nav = useNavigate();

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    info: state.product.information,
    madeIn: state.product.madeIn,
    category: state.product.category
  }));

  return (
    <PageLayout>
      <Head title={select.info.title} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum} returnMain={callbacks.returnMain}/>
      <ProductInfo info={select.info} madeIn={select.madeIn} category={select.category}/>
      <button className='Product-add' onClick={callbacks.addToBasket}>Добавить</button>
    </PageLayout>
  );
}

export default memo(Product);
