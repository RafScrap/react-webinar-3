import { memo } from 'react';
import { cn as bem } from '@bem-react/classname';
import './style.css';

function MenuTool({ title1, returnMain = () => {}}) {
  const cn = bem('MenuTool');
  return (
    <div className={cn()}>
      <button className={cn('return')} onClick={() => returnMain()}>{title1}</button>
    </div>
  );
}

export default memo(MenuTool);
