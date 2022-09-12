import clsx from 'clsx';
import React, {FC, PropsWithChildren} from 'react';
interface IProps {
  as?: 'h1' | 'h2' | 'h3';
}

const Title: FC<PropsWithChildren<IProps>> = ({children, as}) => {
  const className =
    'mx-auto my-0 flex px-5 py-2  bg-gradient-to-r from-blue-500 to-indigo-700 font-bold uppercase text-gray-50 w-min rounded-lg shadow font-serif';
  switch (as) {
    case 'h2':
      return <h2 className={clsx(className, 'text-xl')}>{children}</h2>;
    case 'h3':
      return <h3 className={clsx(className, 'text-lg')}>{children}</h3>;
    default:
      return <h1 className={clsx(className, 'text-3xl')}>{children}</h1>;
  }
};

export default Title;
