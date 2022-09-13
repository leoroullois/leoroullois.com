import clsx from 'clsx';
import React, {FC, PropsWithChildren} from 'react';
interface IProps {
  as?: 'h1' | 'h2' | 'h3';
  theme?: 'blue' | 'pink';
}

const Title: FC<PropsWithChildren<IProps>> = ({children, as, theme}) => {
  const className = clsx(
    'mx-auto my-0 flex px-5 py-2   font-bold uppercase text-gray-50 w-auto rounded-lg shadow font-serif',
    {
      'bg-gradient-to-r from-blue-500 to-indigo-700':
        theme === 'blue' || theme === undefined,
      'bg-gradient-to-r from-pink-500 to-pink-700': theme === 'pink',
    }
  );
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
