import clsx from 'clsx';
import React, {FC, useEffect, useRef, useState} from 'react';
import {IoChevronDown} from 'react-icons/io5';
import { useOutsideClick } from 'src/hooks/use-outside-click';
type Values = 'fr' | 'en';
type Labels = 'FR' | 'EN';

interface IProps {
  defaultValue?: Values;
  options: Array<{value: Values; label: Labels}>;
}

const LangSelect: FC<IProps> = ({defaultValue, options}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [current, setCurrent] = useState<Values>(defaultValue ?? 'fr');

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClick = (value: Values) => {
    setCurrent(value);
    setIsOpen(false);
  };

  const ref = useRef<HTMLDivElement>(null!);

  const handler = (e: Event) =>  {
    console.log("click outside", e);
    setIsOpen(false);
  }

  useOutsideClick(ref, handler);
  return (
    <div className='relative w-16' ref={ref}>
      <div
        onClick={toggle}
        className={clsx(
          'flex flex-row justify-between items-center gap-x-1 text-lg font-bold cursor-pointer text-gray-50 duration-150',
          'hover:text-gray-200'
        )}
      >
        <span>{current.toUpperCase()}</span>
        <IoChevronDown className='text-3xl' />
      </div>
      <ul
        className={clsx(
          'absolute  z-50 left-0 right-0 text-gray-900 border bg-gray-50 border-gray-300 rounded',
          {
            hidden: !isOpen,
          }
        )}
      >
        {options.map(({value, label}, i) => (
          <li
            key={i}
            className={clsx('duration-100 py-1', 'hover:bg-gray-200 ')}
            onClick={() => handleClick(value)}
          >
            <button className='text-center w-full border-gray-300/40'>
              {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSelect;
