import React from 'react';
import { servicesData } from '@/constants/servisesData';
import Image from 'next/image';

export default function Services() {
  return (
    <div className='max-w-[1360px] w-full  flex justify-between items-center '>
      {servicesData.map((item) => (
        <div className='relative w-[440px] h-[300px] flex flex-col justify-center items-center'>
          <div>
            <Image
              src={item.vectorLeft}
              alt='vector'
              width={153}
              height={207}
              className='absolute  object-cover top-0 left-0'
            />
          </div>
          <div>
            <Image
              src={item.vectorRight}
              alt='vector'
              width={153}
              height={207}
              className='absolute  object-cover top-0 right-0'
            />
          </div>
          <div>
            <Image
              src={item.photo}
              alt='img'
              width={200}
              height={200}
              className='object-cover'
            />
          </div>
          <div>
            <h1 className='font-popins font-[275] text-[32px] leading-[48px]'>
              {item.title}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
