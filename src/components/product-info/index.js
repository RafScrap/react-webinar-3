import { memo } from 'react';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function ProductInfo({info, madeIn, category}) {
const cn = bem('Product-info');
  return (
      <div className={cn()}>
        <div className={cn('description')}>{info.description}</div>
        <div className={cn('block')}>
          <div className={cn('key')}>Страна-производитель:</div>
          <div className={cn('value')}>{`${madeIn.title} (${madeIn.code})`}</div>
        </div>
        <div className={cn('block')}>
          <div className={cn('key')}>Категория: </div>
          <div className={cn('value')}>{category.title}</div>
        </div>
        <div className={cn('block')}>
        <div className={cn('key')}>Год выпуска: </div>
          <div className={cn('value')}>{info.edition}</div>
        </div>
        <div className={cn('block')}></div>
        <div className={cn('price')}>Цена: {info.price} ₽</div>
    </div>
  );
}

export default memo(ProductInfo);
