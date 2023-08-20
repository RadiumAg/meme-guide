import { FC } from 'react';
import Image from 'next/image';
import Example from './components/example';
import Search from './components/search';

const Home: FC = () => {
  return (
    <main>
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
