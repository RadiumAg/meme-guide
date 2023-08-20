import { FC } from 'react';
import Style from './example.module.scss';

const Example: FC = () => {
  const buttons = Array.from({ length: 20 }).map((_, index) => (
    <button
      key={index}
      className='ring-2 shrink-0  mr-4 rounded-lg px-3 py-1 bg-blue-400 ring-offset-2 focus:outline-none focus:ring'
    >
      <span className='text-amber-300'>#</span> <span>test{index}</span>
    </button>
  ));

  return (
    <section className='mt-8'>
      <div className='w-3/4 mx-auto overflow-hidden'>
        <div className={`flex  mb-2 py-2 px-3 ${Style['example-track']} `}>
          {buttons}
        </div>
      </div>

      <div className='w-3/4 mx-auto overflow-hidden'>
        <div className='flex  mb-2 py-2 px-3'>{buttons}</div>
      </div>

      <div className='w-3/4 mx-auto overflow-hidden'>
        <div className='flex  py-2  px-3'>{buttons}</div>
      </div>
    </section>
  );
};

export default Example;
