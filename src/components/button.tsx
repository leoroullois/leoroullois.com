import {FC, PropsWithChildren} from 'react';
import {clsx} from 'clsx';
import Link from 'next/link';

interface IProps {
  type: 'primary' | 'secondary';
  href: string;
}
const Button: FC<PropsWithChildren<IProps>> = ({children, type, href}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'cursor-hover',
          'flex items-center justify-center rounded-lg px-6 py-4 font-bold duration-100',
          {
            'bg-blue-800 text-blue-50': type === 'primary',
            'hover:bg-blue-900': type === 'primary',
          },
          {
            'bg-blue-100 text-blue-600': type === 'secondary',
            'hover:bg-blue-200': type === 'secondary',
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
