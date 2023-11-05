import { useEffect, useRef } from 'react';
import Style from './index.module.scss';
import { useInfoContext } from '@/app/utils';
import { useUpdate } from 'ahooks';
import infoMap from '@/app/info.json';

const Detail = () => {
  const {
    info: { key },
  } = useInfoContext();
  const showInfoRef = useRef('');
  const update = useUpdate();

  useEffect(() => {
    let index = 0;
    const showInfo = Reflect.get(infoMap, key);
    if (!key) return;

    showInfoRef.current = '';

    const sign = setInterval(() => {
      showInfoRef.current += showInfo.slice(index, index + 1);
      index++;
      update();

      if (index === showInfo.length) {
        clearInterval(sign);
      }
    });

    return () => {
      clearInterval(sign);
    };
  }, [key, update]);

  return (
    <div className='flex justify-center'>
      <textarea
        value={showInfoRef.current}
        onChange={() => {}}
        className={`${Style.textarea} rounded-md dark:bg-slate-500 bg-slate-600 to-blue-500 p-4 text-yellow-300  dark:text-white`}
      ></textarea>
    </div>
  );
};

export default Detail;
