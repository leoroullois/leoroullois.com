import { ICompetence } from '@lib/types';
import clsx from 'clsx';
import Image from 'next/image';
import React, {FC} from 'react';

const Competence: FC<ICompetence> = ({label, logo, width, height}) => {
  return (
    <article
      className={clsx(
        'relative flex gap-x-5 items-center bg-gray-50 text-slate-900 font-semibold px-5 py-2 duration-100',
        'after:absolute after:inset-0 after:border-l after:border-l-transparent after:duration-100',
        'hover:after:border-l-4 hover:after:border-l-pink-500'
      )}
    >
      <Image
        loading='lazy'
        src={logo}
        alt={`Logo of the ${label} technologie.`}
        width={width}
        height={height}
      />
      <span>{label}</span>
    </article>
  );
};

export default Competence;
