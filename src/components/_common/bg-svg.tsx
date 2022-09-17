import clsx from 'clsx';
import React, {FC} from 'react';

interface IProps {
  className: string;
}

const BgSvg: FC<IProps> = ({className}) => {
  return (
    <svg
      className={clsx('hidden sm:block absolute top-1/2 ', className)}
      width='404'
      height='784'
      fill='none'
      viewBox='0 0 404 784'
    >
      <defs>
        <pattern
          id='56409614-3d62-4985-9a10-7ca758a8f4f0'
          x='0'
          y='0'
          width='20'
          height='20'
          patternUnits='userSpaceOnUse'
        >
          <rect x='0' y='0' width='4' height='4' fill='currentColor'></rect>
        </pattern>
      </defs>
      <rect
        width='404'
        height='784'
        fill='url(#56409614-3d62-4985-9a10-7ca758a8f4f0)'
      ></rect>
    </svg>
  );
};

export default BgSvg;
