import { useCallback, useContext, useEffect, useState } from 'react';
import Main from './main';
import Basket from './basket';
import Product from "./product"
import {Route, Routes} from "react-router-dom";
import useSelector from '../store/use-selector';

/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Main />
      }/>
      <Route path="/articles/:id" element={
          <Product/>
      }/>
    </Routes>
    {activeModal === 'basket' && <Basket />}
  </>
  );
}

export default App;
