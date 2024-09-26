import { memo } from 'react';
import PageLayout from '../../components/page-layout';
import Head from '../../components/head';
import {useParams} from "react-router";
import BasketTool from '../../components/basket-tool';
import './style.css'
import PropTypes from 'prop-types';

function Product(props) {

  const id = useParams().id;

  const callbacks = {
    onAdd: () => props.onAdd(id),
    getProduct: () => props.getProduct(),
    openModalBasket: () => props.openModalBasket(),
    returnMain: () => props.returnMain(),
  };

  const item = callbacks.getProduct().information;
  console.log('itemP', item);

  return (
    <PageLayout>
      <Head title={item.title} />
      <BasketTool onOpen={callbacks.openModalBasket} amount={props.amount} sum={props.sum} returnMain={callbacks.returnMain}/>
      <div className='Product-info'>
        <div className='Product-info-description'>{item.description}</div>
        <div className='Product-info-block'>
          <div className='Product-key'>Страна-производитель:</div>
          <div className='Product-value'>{`${item.madeIn.title} (${item.madeIn.code})`}</div>
        </div>
        <div className='Product-info-block'>
          <div className='Product-key'>Категория: </div>
          <div className='Product-value'>{item.category.title}</div>
        </div>
        <div className='Product-info-block'>
        <div className='Product-key'>Год выпуска: </div>
          <div className='Product-value'>{item.edition}</div>
        </div>
        <div className='Product-info-block'></div>
        <div className='Product-price'>Цена: {item.price} ₽</div>
        <button className='Product-add' onClick={callbacks.onAdd}>Добавить</button>
      </div>
    </PageLayout>
  );
}

Product.propTypes = {
  sum: PropTypes.number,
  amount: PropTypes.number,
  onAdd: PropTypes.func.isRequired,
  getProduct: PropTypes.func.isRequired,
  openModalBasket: PropTypes.func.isRequired,
  returnMain: PropTypes.func.isRequired,
};

export default memo(Product);
