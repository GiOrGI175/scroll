import React from 'react';
import { servicesData } from '@/constants/servisesData';
import Image from 'next/image';

export default function Services() {
  return (
    <div>
      {servicesData.map((item) => (
        <div className='relative'>
          <div>
            <Image
              src={item.vectorLeft}
              alt='vector'
              width={0}
              height={0}
              className='absolute w-auto h-auto object-cover'
            />
          </div>
          <div>
            <Image
              src={item.vectorRight}
              alt='vector'
              width={0}
              height={0}
              className='absolute w-auto h-auto object-cover'
            />
          </div>
          <div>
            <Image
              src={item.photo}
              alt='vector'
              width={0}
              height={0}
              className='w-auto h-auto object-cover'
            />
          </div>
          <div>
            <h1>{item.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}
