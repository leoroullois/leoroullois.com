import clsx from 'clsx';
import React, {FC, PropsWithChildren} from 'react';
import {IoCaretForward, IoPlayOutline} from 'react-icons/io5';

const Skill: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className={clsx(
        'flex gap-x-2 items-center text-sm font-semibold'
      )}
    >
      <IoPlayOutline className='text-pink-500'/>
      <span>{children}</span>
    </div>
  );
};

export default Skill;
