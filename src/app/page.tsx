import { FC } from 'react';
import Image from 'next/image';
import Example from './components/example';
import Search from './components/search';
import DarkToggleButton from './components/dark-toggle-button';

const Home: FC = () => {
  return (
    <main>
      <nav className='pl-4 pr-4 pt-6 pb-6 bg-slate-400 flex justify-end'>
        <DarkToggleButton></DarkToggleButton>
      </nav>

      <Image
        width={300}
        height={300}
        className='object-cover m-auto  w-36 h-36 rounded-full  mt-28'
        src='/icon.jpg'
        alt='icon'
      ></Image>

      <Search></Search>

      <Example></Example>
    </main>
  );
};

export default Home;
