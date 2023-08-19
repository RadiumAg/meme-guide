import { FC } from 'react'
import Image from 'next/image'

 const Home:FC = () => {
  return (
    <main>
     <Image width={300} height={300}  className='object-cover m-auto  w-36 h-36 rounded-full  mt-28' src="/icon.jpg" alt='icon'></Image>
    </main>
  )
}

export default Home
