'use client';

import { Star } from '@boxicons/react';
import Button from '../Button/Button';

const CourseCard = () => {
    const handleViewDetails = () => {
        console.log('view course details');
    };

    return (
        <div className='w-full p-4 rounded-xl bg-[#1e1e1e]/30 border border-[#1e1e1e] flex flex-col gap-4'>
            <div className='w-full h-[250px] bg-[#000000] rounded-xl'></div>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold text-[#ffffff] lg:text-2xl'>
                    React.js Architecture & Design Patterns
                </h3>
                <div className='flex items-center justify-between'>
                    <p className='text-base text-[#A3A3A3]'>Rakibul Rahman</p>
                    <div className='flex items-center justify-center gap-2'>
                        <Star pack='filled' size='xs' color='#ffffff' />
                        <span className='text-base text-[#ffffff] mt-0.5'>
                            4.9
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
        </div>
    );
};

export default CourseCard;
