import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from '../../utils';
import './style.css';
import MenuTool from '../menu-tool';

function BasketTool({ sum = 0, amount = 0, onOpen = () => {}, returnMain = () => {}}) {

  const callbacks = {
    returnMain: () => returnMain(),
  };

  const cn = bem('BasketTool');
  return (
    <div className={cn()}>
      <MenuTool title1="Главная" returnMain={callbacks.returnMain}/>
      <span className={cn('text')}> 
        <span className={cn('label')}>В корзине:</span>
        <span className={cn('total')}>
          {amount
            ? `${amount} ${plural(amount, {
                one: 'товар',
                few: 'товара',
                many: 'товаров',
              })} / ${numberFormat(sum)} ₽`
            : `пусто`}
        </span>
      </span>
      <button className={cn('open')} onClick={onOpen}>Перейти</button>
    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  returnMain: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};

export default memo(BasketTool);
