import React, {FC, MouseEventHandler, useRef} from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import {IoClose} from 'react-icons/io5';
import {IIconsText, ILinks} from '@lib/types';
import {useOutsideClick} from 'src/hooks/use-outside-click';

interface IProps {
  links: ILinks[];
  icons: IIconsText[];
  toggleMenu: MouseEventHandler<Element>;
  isOpen: boolean;
  setIsOpen: Function;
}

const NavBar: FC<IProps> = ({links, icons, toggleMenu, isOpen, setIsOpen}) => {
  const ref = useRef<HTMLElement>(null!);
  const outsideClickHandler = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useOutsideClick(ref, outsideClickHandler);

  return (
    <nav
      ref={ref}
      className={clsx(
        'z-40 flex flex-col  bg-gray-50 min-w-min w-48 mb-10 h-screen fixed right-0 top-0 gap-y-6 px-9 py-4 shadow duration-200',
        {'translate-x-full ': !isOpen, 'backdrop-brightness-50': isOpen},
        'md:translate-x-0 md:static md:flex-row md:items-center md:justify-between md:w-full md:rounded-lg md:h-auto'
      )}
    >
      <IoClose
        onClick={toggleMenu}
        className={clsx('self-end text-4xl cursor-pointer', 'md:hidden')}
      />
      <div
        className={clsx(
          'flex flex-col gap-y-3',
          'md:flex-row md:justify-evenly md:gap-x-5'
        )}
      >
        {links.map(({href, label}, i) => (
          <Link href={href} key={i}>
            <a
              className={clsx(
                'cursor-hover',
                'inline-block relative font-semibold duration-100',
                'before:duration-100 before:opacity-0 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500',
                'hover:text-white hover:before:opacity-100 '
              )}
            >
              <span className={clsx('relative')}>{label}</span>
            </a>
          </Link>
        ))}
      </div>
      <div className={clsx('flex flex-row gap-x-3 mt-6', 'md:mt-0')}>
        {icons.map(({href, icon}, i) => (
          <Link href={href} key={i}>
            <a
              className={clsx(
                'cursor-hover',
                'flex justify-center items-center'
              )}
            >
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
