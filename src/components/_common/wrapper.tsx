import clsx from 'clsx';
import React, {FC, PropsWithChildren} from 'react';

interface IProps {
  className?: string;
}
const Wrapper: FC<PropsWithChildren<IProps>> = ({children, className}) => {
  return (
    <div className={clsx('flex my-0 mx-auto w-11/12 max-w-6xl', className)}>
      {children}
    </div>
  );
};

export default Wrapper;
