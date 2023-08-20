import { FC } from 'react';

const Search: FC = () => {
  return (
    <input
      className='ring-2 focus:ring-4 w-72 m-auto  block rounded-xl mt-10 px-3 py-2  outline-none'
      placeholder='请输入'
    />
  );
};

export default Search;
