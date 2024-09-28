import { memo } from 'react';
import './style.css';

function Tool({ children }) {
  return (
    <div className="Tool">
      {children}
    </div>
  );
}

export default memo(Tool);
