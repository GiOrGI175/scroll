'use client';

import React from 'react';
import { servicesData } from '@/constants/servisesData';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Flayout from './Flayout';
import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>
      <div className='mb-[20px] w-full h-[60px] flex justify-between items-center'>
        <p className='font-poppins font-[275] text-[40px] leading-[60px] text-[#000000]'>
          Services
        </p>
        <div className='max-w-[1157px] w-full h-[1px] mr-[10px] border-[#26A522] border-[1px] ' />
      </div>
      <div className='w-full  flex justify-between items-center gap-[20px]'>
        {servicesData.map((item, index) => (
          <div
            className='relative   overflow-hidden w-[440px] h-[300px] flex flex-col justify-center items-center bg-[#EAF7E9] rounded-[20px] shadow-md'
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <Image
                src={item.vectorLeft}
                alt='vector'
                width={153}
                height={207}
                className={`absolute  object-cover  left-0 ${
                  index === 1 ? 'bottom-0' : 'top-0'
                } `}
              />
            </div>
            <div>
              <Image
                src={item.vectorRight}
                alt='vector'
                width={153}
                height={207}
                className={`absolute  object-cover  right-0 ${
                  index === 1 ? 'bottom-0' : 'top-0'
                } `}
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
              <h1 className='mt-[17px] font-poppins font-[275] text-[32px] leading-[48px] text-[#000000]'>
                {item.title}
              </h1>
            </div>
            {hoveredIndex === index && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 100 }}
                  transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className='absolute w-full h-full flex justify-start items-center bg-black/10 backdrop-blur-lg rounded-[20px] '
                >
                  <Flayout cardIndex={index} />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
