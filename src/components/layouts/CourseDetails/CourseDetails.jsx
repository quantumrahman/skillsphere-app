import { getCourses } from '@/lib/get-courses';
import { CaretBigDown } from '@boxicons/react';

import slugify from 'slugify';
import Image from 'next/image';

const CourseDetails = async ({ slug }) => {
    const { courses } = await getCourses(
        'https://skillsphere-rrdev.vercel.app/api/courses',
    );

    const findCourse = courses.find(
        (course) =>
            slugify(course?.title, {
                replacement: '-',
                remove: undefined,
                lower: true,
                strict: false,
                trim: true,
            }) === slug,
    );

    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <div className='w-full'>
                <div className='w-full text-center space-y-4 mb-[48px]'>
                    <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                        {findCourse?.title}
                    </h2>
                    <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                        {findCourse?.description}
                    </p>
                    <div className='flex items-center justify-center gap-4 flex-wrap'>
                        <p className='text-sm text-[#A3A3A3]'>
                            {findCourse?.instructor}
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {findCourse?.duration}
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {findCourse?.rating} Rating
                        </p>
                        <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                        <p className='text-sm text-[#A3A3A3]'>
                            {findCourse?.level} level
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full max-w-5xl mx-auto p-5 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-4xl'>
                <div className='relative w-full aspect-video md:aspect-[16/8] overflow-hidden rounded-2xl'>
                    <Image
                        src={findCourse?.image}
                        alt='course thumbnail'
                        fill={true}
                        className='object-cover'
                        priority={true}
                    />
                    <div className='absolute inset-0 bg-[#000000]/15'></div>
                </div>
            </div>
            <div className='w-full max-w-5xl mx-auto px-8 bg-[#1e1e1e]/30 rounded-xl mt-[48px]'>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-base font-semibold text-[#ffffff]'>
                        1. Introduction to Web Development
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-base font-semibold text-[#ffffff]'>
                        2. Frontend Development with React
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-base font-semibold text-[#ffffff]'>
                        3. Backend Development with Node.js
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-base font-semibold text-[#ffffff]'>
                        4. Full-Stack MERN Project
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </div>
                <div className='w-full h-px bg-[#1e1e1e]'></div>
                <div className='py-5 flex items-center justify-between'>
                    <p className='text-base font-semibold text-[#ffffff]'>
                        5. Career & Advanced Skills
                    </p>
                    <CaretBigDown pack='filled' size='xs' color='#A3A3A3' />
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
