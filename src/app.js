import React, { useCallback, useState} from 'react';
import Shop from './components/shop'
import ModalWindow from './components/modal-window';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;
  const countUnique = store.getState().countUnique;
  const sum = store.getState().sum;

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
    <Shop setBasket={setBasket} list={list} onSelectItem={callbacks.onSelectItem} countUnique={countUnique} 
    sum = {sum} nameClass={'shop'}/>
    <ModalWindow setBasket={setBasket} list={list} onDeleteItem={callbacks.onDeleteItem} 
    sum = {sum} nameClass={'basket'} isBasket={isBasket} countUnique={countUnique}/>
    </>
  );
}

export default App;
