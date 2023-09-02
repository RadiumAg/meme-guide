'use client';
import Image from 'next/image';
import { useMount, useUpdate } from 'ahooks';
import Style from './index.module.scss';
import { useEffect, useRef } from 'react';

const DarkToggleButton = () => {
  const rootElement = document.querySelector('html');
  const update = useUpdate();
  const isDark = useRef(false);
  const colorSchema = isDark.current ? Style.dark : Style.light;
  const iconImage = isDark.current ? '/moon.svg' : '/sun.svg';

  const handleClick = () => {
    if (isDark.current) {
      isDark.current = false;
      rootElement?.classList.remove('dark');
    } else {
      isDark.current = true;
      rootElement?.classList.add('dark');
    }
    update();
  };

  useMount(() => {
    isDark.current = [...(rootElement?.classList || [])].includes('dark');
    update();
  });

  return (
    <button
      onClick={handleClick}
      className={`border-teal-400 dark:border-cyan-700 ${Style['dark-toggle-button']}`}
    >
      <span
        className={`rounded-xl relative block p-1  ${Style.icon} ${colorSchema}`}
      >
        <Image src={iconImage} alt='moon' width='20' height='20'></Image>
      </span>
    </button>
  );
};

export default DarkToggleButton;
