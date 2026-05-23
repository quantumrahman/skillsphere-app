'use client';

import { Calendar } from '@boxicons/react';
import { format } from 'date-fns';
import { motion } from 'motion/react';

import Image from 'next/image';
import Badge from '../Badge/Badge';

const TrendingCard = ({ course }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className='w-full p-4 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-xl space-y-5'
        >
            <div className='w-full h-[260px] bg-[#000000] rounded-xl relative'>
                <Image
                    src={course?.image}
                    alt={course?.title}
                    fill={true}
                    priority={true}
                    className='object-cover rounded-xl'
                />
                <div className='absolute inset-0 bg-[#000000]/10 flex items-end justify-end p-4'>
                    <Badge variant='outline'>{course?.category}</Badge>
                </div>
            </div>
            <div className='space-y-2'>
                <div className='w-full min-h-[65px]'>
                    <h3 className='text-xl font-bold text-[#ffffff] lg:text-2xl'>
                        {course?.title}
                    </h3>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-base text-[#A3A3A3]'>
                        {course?.instructor}
                    </p>
                    <div className='flex items-center justify-center gap-2'>
                        <Calendar size='xs' color='#ffffff' />
                        <span className='text-base text-[#ffffff] mt-0.5'>
                            {course?.date &&
                                format(
                                    new Date(`${course?.date}`),
                                    'MMMM dd, yyyy',
                                )}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TrendingCard;
