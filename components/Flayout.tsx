'use client';

import { flayoutData } from '@/constants/servisesData';
import Image from 'next/image';

export default function Flayout({ cardIndex }: { cardIndex: number }) {
  const curentInfo = flayoutData[cardIndex];

  return (
    <div className='flex flex-col justify-center items-center '>
      <ul className='w-full flex flex-col px-[49px]'>
        {curentInfo.titles.map((title, Index) => (
          <li
            key={Index}
            className='min-h-[30px] h-full mb-[16px] font-poppins font-[500] text-[20px] leading-[30px] text-white list-disc'
          >
            {title}
          </li>
        ))}
      </ul>
      <div className='max-w-[440px] w-full flex justify-end'>
        <div className='flex'>
          <button
            className='font-poppins font-bold text-[20px] leading-[30px]
        text-white'
          >
            {curentInfo.button}
          </button>
          <Image
            src={curentInfo.Arrow}
            alt='Arrow'
            width={34}
            height={34}
            className='ml-[10px] object-cover'
          />
        </div>
      </div>
    </div>
  );
}
