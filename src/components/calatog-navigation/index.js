import { memo } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { cn as bem } from '@bem-react/classname';

function CatalogNavigation({page = 0, countPages = 0, moveList = () => {}}) {

  const cn = bem('Catalog-navigation');
  const callbacks = {
    onMoveList: (deltaPage) => moveList(deltaPage),
  };

    if (page === 0) {
        return (
            <div class={cn()}>
                <button class={cn('selected')} onClick={() => {}}>1</button>
                {countPages >= 2 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(1)}>2</button> : <></>}
                {countPages >= 3 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(2)}>3</button> : <></>}
                {countPages == 4 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(3)}>4</button> : <></>}         
                {countPages >= 5 ? <><div class={cn('text')}>...</div>
                <button class={cn('unselected')} onClick={() => callbacks.onMoveList(countPages - page - 1)}>{countPages}</button></> : <></>}          
            </div>
        );
    }
    else if (page + 1 === countPages) {
        return (
            <div class={cn()}>
                {countPages >= 5 ? <><button class={cn('unselected')} onClick={() => callbacks.onMoveList(-countPages + 1)}>1</button>
                <div class={cn('text')}>...</div></> : <></>}
                {countPages == 4 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(-3)}>{countPages - 3}</button> : <></>}
                {countPages >= 3 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(-2)}>{countPages - 2}</button> : <></>}
                {countPages >= 2 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(-1)}>{countPages - 1}</button> : <></>}
                <button class={cn('selected')} onClick={() => {}}>{countPages}</button>
            </div>
        );
    }
    else {
        return (
            <div class={cn()}>
                {page - 1  >= 1 ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(-page)}>1</button> : <></>}
                {page - 2  >= 1 ? <div class={cn('text')}>...</div> : <></>}

                <button class={cn('unselected')} onClick={() => callbacks.onMoveList(-1)}>{page}</button>
                <button class={cn('selected')} onClick={() => {}}>{page + 1}</button>
                <button class={cn('unselected')} onClick={() => callbacks.onMoveList(1)}>{page + 2}</button>

                {page + 4 <= countPages ? <div class={cn('text')}>...</div> : <></>}
                {page + 3 <= countPages ? <button class={cn('unselected')} onClick={() => callbacks.onMoveList(countPages - page - 1)}>{countPages}</button> : <></>}
            </div>
        ); 
    }
}

CatalogNavigation.propTypes = {
    page: PropTypes.number,
    countPages: PropTypes.number,
    moveList: PropTypes.func.isRequired,
};

export default memo(CatalogNavigation);
