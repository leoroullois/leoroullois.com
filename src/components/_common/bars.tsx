import clsx from 'clsx';
import React, {FC} from 'react';

interface IProps {
  align: 'left' | 'center';
  theme: 'black' | 'blue';
}

const Bars: FC<IProps> = ({align, theme}) => {
  return (
    <div className={clsx('flex gap-x-5 mx-0 my-auto', {
      "justify-center": align === "center",
      "justify-start": align === "left",
    })}>
      <div
        className={clsx('inline-block w-8 h-1 rounded-full', {
          'bg-gray-900': theme === 'black',
          'bg-blue-500': theme === 'blue',
        })}
      ></div>
      <div
        className={clsx('inline-block w-16 h-1 rounded-full', {
          'bg-gray-900': theme === 'black',
          'bg-blue-600': theme === 'blue',
        })}
      ></div>
    </div>
  );
};

export default Bars;
