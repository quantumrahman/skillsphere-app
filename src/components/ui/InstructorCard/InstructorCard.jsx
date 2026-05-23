'use client';

import { Instagram, Linkedin, Twitter } from '@boxicons/react';
import { motion } from 'motion/react';

import Image from 'next/image';
import Link from 'next/link';

const InstructorCard = ({ src = '', name = '', experts = '', alt = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className='w-full h-[350px] bg-[#1e1e1e] rounded-xl relative overflow-hidden group'
        >
            <Image
                src={src}
                alt={alt}
                fill={true}
                priority={true}
                className='w-full h-auto object-cover transition-all duration-300 ease-in-out group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-linear-to-t from-[#000000]/50 to-transparent p-6 transition-colors duration-300 ease-in-out group-hover:from-[#000000]/70'>
                <div className='space-y-3 absolute bottom-6'>
                    <h3 className='text-xl font-bold text-[#ffffff] leading-0 lg:text-2xl'>
                        {name}
                    </h3>
                    <span className='text-xs text-[#A3A3A3] font-medium leading-0'>
                        {experts}
                    </span>
                </div>
                <div className='absolute top-6 -right-8 flex flex-col gap-2 transition-all duration-300 ease-in-out group-hover:right-6'>
                    <Link
                        href={'/'}
                        className='inline-block p-1.5 bg-[#ffffff] rounded-full text-[#000000] transition-colors duration-200 ease-in-out hover:bg-[#ff851b] hover:text-[#000000]'
                    >
                        <Linkedin size='xs' />
                    </Link>
                    <Link
                        href={'/'}
                        className='inline-block p-1.5 bg-[#ffffff] rounded-full text-[#000000] transition-colors duration-200 ease-in-out hover:bg-[#ff851b] hover:text-[#000000]'
                    >
                        <Instagram size='xs' />
                    </Link>
                    <Link
                        href={'/'}
                        className='inline-block p-1.5 bg-[#ffffff] rounded-full text-[#000000] transition-colors duration-200 ease-in-out hover:bg-[#ff851b] hover:text-[#000000]'
                    >
                        <Twitter size='xs' />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default InstructorCard;
