import clsx from 'clsx';
import React, {FC, PropsWithChildren} from 'react';

const Skill: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      className={clsx(
        'flex px-5 py-2 rounded-full bg-gray-300 text-slate-900 w-min'
      )}
    >
      {children}
    </div>
  );
};

export default Skill;
