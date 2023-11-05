'use client';

import { FC, useEffect } from 'react';
import Style from './example.module.scss';
import { useInfoContext } from '@/app/utils/info';
import infoMap from '@/app/info.json';

const Example: FC = () => {
  const { setInfo, info } = useInfoContext();

  const buttons = Object.keys(infoMap)
    .filter((_) => _.includes(info.keyword))
    .map((_, index) => (
      <button
        key={index}
        onClick={() => {
          setInfo((info) => {
            const newInfo = { ...info, key: _ };
            return newInfo;
          });
        }}
        className={`shrink-0  dark:focus:ring-slate-400  mb-2 mr-4 rounded-lg px-3 py-1 bg-pink-200 ring-offset-2 focus:outline-none focus:ring ${Style.tag}`}
      >
        <span className=' text-pink-600'>#</span>
        <span className=' text-pink-800'>{_}</span>
      </button>
    ));

  return (
    <section className='mt-8'>
      <div className='w-3/4 mx-auto overflow-hidden'>
        <div className={`py-2 px-3 ${Style['example-track']} `}>{buttons}</div>
      </div>
    </section>
  );
};

export default Example;
