import { useInfoContext } from '@/app/utils';
import { FC } from 'react';

const Search: FC = () => {
  const { info, setInfo } = useInfoContext();

  return (
    <input
      value={info.keyword}
      onChange={(target) => {
        const keyword = target.currentTarget.value;

        setInfo((info) => {
          const newInfo = { ...info, keyword };
          return newInfo;
        });
      }}
      className='ring-2 focus:ring-4 w-72 m-auto  block rounded-xl mt-10 px-3 py-2  outline-none dark:focus:ring-slate-400'
      placeholder='请输入'
    />
  );
};

export default Search;
