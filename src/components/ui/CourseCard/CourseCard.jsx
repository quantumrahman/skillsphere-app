'use client';

import { Star } from '@boxicons/react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

import slugify from 'slugify';
import Button from '../Button/Button';
import Image from 'next/image';
import Badge from '../Badge/Badge';

const CourseCard = ({ course }) => {
    const router = useRouter();

    const handleViewDetails = () => {
        const slugifyUrlText = slugify(course?.title, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false,
            trim: true,
        });

        router.push(`/courses/course-details/${slugifyUrlText}`);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className='w-full p-4 rounded-xl bg-[#1e1e1e]/30 border border-[#1e1e1e] flex flex-col gap-4'
        >
            <div className='w-full h-[250px] bg-[#000000] rounded-xl relative'>
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
                        <Star pack='filled' size='xs' color='#ff851b' />
                        <span className='text-base text-[#ffffff] mt-0.5'>
                            {course?.rating}
                        </span>
                    </div>
                </div>
                <Button
                    size='md'
                    variant='ghost'
                    className='w-full mt-4'
                    onClick={handleViewDetails}
                >
                    View Details
                </Button>
            </div>
        </motion.div>
    );
};

export default CourseCard;
