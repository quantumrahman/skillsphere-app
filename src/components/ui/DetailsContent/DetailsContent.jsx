'use client';

import { CaretBigDown } from '@boxicons/react';
import { motion } from 'motion/react';

import Image from 'next/image';

const DetailsContent = ({ course }) => {
    return (
        <div>
            <div className='w-full'>
                <div className='w-full text-center space-y-4 mb-[48px]'>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeIn',
                        }}
                        viewport={{ once: true }}
                        className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'
                    >
                        {course?.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeIn',
                        }}
                        viewport={{ once: true }}
                        className='max-w-xl mx-auto text-base text-[#A3A3A3]'
                    >
                        {course?.description}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeIn',
                        }}
                        viewport={{ once: true }}
                        className='flex items-center justify-center gap-4 flex-wrap'
                    >
                        <p className='text-sm text-[#A3A3A3]'>
                            {course?.instructor}
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {course?.duration}
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {course?.rating} Rating
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {course?.level} level
                        </p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                className='w-full max-w-5xl mx-auto p-5 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-4xl'
            >
                <div className='relative w-full aspect-video md:aspect-[16/8] overflow-hidden rounded-2xl'>
                    <Image
                        src={course?.image}
                        alt='course thumbnail'
                        fill={true}
                        className='object-cover'
                        priority={true}
                    />
                    <div className='absolute inset-0 bg-[#000000]/15'></div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeIn',
                }}
                viewport={{ once: true }}
                className='w-full max-w-5xl mx-auto px-8 bg-[#1e1e1e]/30 rounded-xl mt-[48px]'
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='py-5 flex items-center justify-between'
                >
                    <p className='text-base font-semibold text-[#ffffff]'>
                        1. Introduction to Web Development
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </motion.div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='py-5 flex items-center justify-between'
                >
                    <p className='text-base font-semibold text-[#ffffff]'>
                        2. Frontend Development with React
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </motion.div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='py-5 flex items-center justify-between'
                >
                    <p className='text-base font-semibold text-[#ffffff]'>
                        3. Backend Development with Node.js
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </motion.div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='py-5 flex items-center justify-between'
                >
                    <p className='text-base font-semibold text-[#ffffff]'>
                        4. Full-Stack MERN Project
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </motion.div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.9,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='py-5 flex items-center justify-between'
                >
                    <p className='text-base font-semibold text-[#ffffff]'>
                        5. Career & Advanced Skills
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default DetailsContent;
