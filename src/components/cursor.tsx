import clsx from 'clsx';
import React, {FC, useEffect, useRef, useState} from 'react';

const Cursor: FC = () => {
  const [cursorState, setCursorState] = useState<'main' | 'hover'>('main');

  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const moveListener = (event: MouseEvent) => {
      const {pageX, pageY} = event;

      ref.current.style.left = `${pageX - 28}px`;
      ref.current.style.top = `${pageY - 28}px`;
    };

    document.addEventListener('mousemove', moveListener);

    return () => {
      document.removeEventListener('mousemove', moveListener);
    };
  }, []);

  useEffect(() => {
    const setHoveredCursor = () => setCursorState('hover');
    const elements = document.querySelectorAll('.cursor-hover');

    if (elements) {
      elements.forEach((elt) => {
        elt.addEventListener('mouseenter', setHoveredCursor);
      });
    }

    return () => {
      if (elements) {
        elements.forEach((elt) => {
          elt.removeEventListener('mouseenter', setHoveredCursor);
        });
      }
    };
  });

  useEffect(() => {
    const setMainCursor = () => setCursorState('main');
    const elements = document.querySelectorAll('.cursor-hover');

    if (elements) {
      elements.forEach((elt) => {
        elt.addEventListener('mouseleave', setMainCursor);
      });
    }

    return () => {
      if (elements) {
        elements.forEach((elt) => {
          elt.removeEventListener('mouseleave', setMainCursor);
        });
      }
    };
  });

  return (
    <div
      ref={ref}
      className={clsx(
        'flex pointer-events-none justify-center items-center z-50 absolute w-14 h-14 rounded-full border-4 border-pink-500 duration-100',
        {
          'bg-slate-500/20 w-20 h-20 -translate-x-[12px] -translate-y-[11px]':
            cursorState === 'hover',
        }
      )}
    >
      <div className='h-2 w-2 bg-pink-600 rounded-full'></div>
    </div>
  );
};

export default Cursor;
