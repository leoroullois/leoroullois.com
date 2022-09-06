import React, {FC, useEffect, useRef, useState} from 'react';
import {useWindowSize} from 'src/hooks/use-window-size';

const StatusBar: FC = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const Scrolled = document.documentElement.scrollTop;
      const MaxHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const ScrollPercent = (Scrolled / MaxHeight) * 100;
      setScroll(ScrollPercent);
    };

    window.addEventListener('scroll', scrollListener);
  }, []);

  const getProgressBarWidth = (scroll: number): number => {
    const {clientWidth} = document.documentElement;
    const width = (scroll / 100) * clientWidth;
    return width;
  };

  return (
    <div
      style={{width: getProgressBarWidth(scroll)}}
      className='fixed top-0 left-0 z-40 h-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-full'
    ></div>
  );
};

export default StatusBar;
