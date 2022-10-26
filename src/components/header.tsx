import React, {MouseEventHandler, useState} from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import {IIconsText, ILinks} from '@lib/types';

import Wrapper from '@common/wrapper';
import NavBar from '@components/navbar';

import {IoMenu} from 'react-icons/io5';
import {IoLogoGithub, IoLogoTwitter} from 'react-icons/io';
import {FaPen} from 'react-icons/fa';

import RootMe from './logos/root-me';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  const links: ILinks[] = [
    {href: '/', label: 'Home'},
    {href: '#about', label: 'About me'},
    {href: '#skills', label: 'Skills'},
    {href: '#portfolio', label: 'Portfolio'},
    {href: '#contact', label: 'Contact'},
  ];
  const icons: IIconsText[] = [
    {
      href: 'https://github.com/leoroullois',
      icon: <IoLogoGithub className='text-2xl' />,
    },
    {
      href: 'https://twitter.com/leoroullois',
      icon: <IoLogoTwitter className='text-2xl' />,
    },
    {href: 'https://www.root-me.org/0xLEY0', icon: <RootMe />},
  ];

  return (
    <header className='bg-blue-900 py-5'>
      <Wrapper className='flex-col gap-y-12'>
        <section className='flex flex-row justify-between items-center text-xl'>
          <h2
            className={clsx('font-bold text-gray-50 font-serif', 'sm:text-5xl')}
          >
            Léo Roullois
          </h2>
          <div className='flex items-center gap-x-9'>
            <Link href={process.env.NEXT_PUBLIC_BLOG_HOST ?? "/"}>
              <a className={clsx("text-gray-50 duration-100", "hover:text-gray-200")}>
                <FaPen  />
              </a>
            </Link>
            <IoMenu
              className={clsx(
                'text-3xl text-gray-50 cursor-pointer',
                'md:hidden'
              )}
              onClick={toggleMenu}
            />
          </div>
        </section>
        <NavBar
          toggleMenu={toggleMenu}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          links={links}
          icons={icons}
        />
      </Wrapper>
    </header>
  );
};

export default Header;
