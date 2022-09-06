import {FC, PropsWithChildren} from 'react';
import {clsx} from 'clsx';

interface IProps {
  type: 'primary' | 'secondary';
}
const Button: FC<PropsWithChildren<IProps>> = ({children, type}) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-lg px-6 py-4 font-bold duration-100',
        {
          'bg-blue-600 text-blue-50': type === 'primary',
          'hover:bg-blue-700': type === 'primary',
        },
        {
          'bg-blue-100 text-blue-600': type === 'secondary',
          'hover:bg-blue-200': type === 'secondary',
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
