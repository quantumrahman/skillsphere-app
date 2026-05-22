import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import TrendingCourses from '@/components/layouts/TrendingCourses/TrendingCourses';
import { CaretBigDown } from '@boxicons/react';
import Image from 'next/image';

const CourseDetailsPage = () => {
    return (
        <div className='w-full'>
            <section className='py-[56px] bg-[#1e1e1e]/30 px-5 lg:py-[112px]'>
                <div className='w-full'>
                    <div className='w-full text-center space-y-4 mb-[48px]'>
                        <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                            React.js Architecture & Design Patterns
                        </h2>
                        <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                            Master clean code, custom hooks, and performance
                            optimization in React.
                        </p>
                        <div className='flex items-center justify-center gap-4'>
                            <p className='text-sm text-[#A3A3A3]'>
                                Rakibul Rahman
                            </p>
                            <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                            <p className='text-sm text-[#A3A3A3]'>
                                April 25, 2026
                            </p>
                            <div className='size-1 rounded-full bg-[#A3A3A3]'></div>
                            <p className='text-sm text-[#A3A3A3]'>4.5 Rating</p>
                        </div>
                    </div>
                </div>
                <div className='w-full max-w-5xl mx-auto p-5 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-4xl'>
                    <div className='relative w-full aspect-video md:aspect-[16/8] overflow-hidden rounded-2xl'>
                        <Image
                            src='/images/hero-thumbnail.webp'
                            alt='hero thumbnail'
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
            <CallToAction />
        </div>
    );
};

export default CourseDetailsPage;
