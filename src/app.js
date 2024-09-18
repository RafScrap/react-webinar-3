import React, { useCallback, useState} from 'react';
import Shop from './components/components-shop/shop'
import Basket from './components/components-basket/basket';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const countSum = store.getState().countSum;
  const priceSum = store.getState().priceSum;

  const [isBasket, setBasket] = useState(false);

  const callbacks = {
    onDeleteItem: useCallback(
      code => {
        store.deleteItem(code);
      },
      [store],
    ),

    onSelectItem: useCallback(
      code => {
        store.selectItem(code);
      },
      [store],
    ),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),
  };

  return (
    <>
    <Shop setBasket={setBasket} list={list} onSelectItem={callbacks.onSelectItem} countSum={countSum} 
    priceSum = {priceSum}/>
    <Basket isBasket={isBasket} setBasket={setBasket} onDeleteItem={callbacks.onDeleteItem} 
    list={list} price = {priceSum}/>
    </>
  );
}

export default App;
