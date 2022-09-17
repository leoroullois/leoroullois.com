import clsx from 'clsx';
import Link from 'next/link';
import React, {FC, PropsWithChildren} from 'react';
interface IProps {
  href: string;
}

const PinkLink: FC<PropsWithChildren<IProps>> = ({children, href}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          'cursor-hover',
          'relative duration-100 z-20 text-pink-500',
          'after:absolute after:left-0 after:-bottom-[3px] after:w-full after:bg-pink-500/10 after:h-[2px] bg-transparent after:z-10 after:duration-100',
          'hover:after:bg-pink-500/10 hover:after:h-[24px]'
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default PinkLink;
