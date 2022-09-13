import clsx from 'clsx';
import Image from 'next/image';
import React, {FC} from 'react';

interface IProps {
  label: string;
  logo: string;
}
const Competence: FC<IProps> = ({label, logo}) => {
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
        width={1280 / 25}
        height={829 / 25}
        // layout="fill"
        // layout="responsive"
      />
      <span>{label}</span>
    </article>
  );
};

export default Competence;
