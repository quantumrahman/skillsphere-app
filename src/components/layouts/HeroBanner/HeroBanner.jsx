'use client';

import { Sparkles } from '@boxicons/react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';

import Button from '@/components/ui/Button/Button';
import Image from 'next/image';

const HeroBanner = () => {
    const router = useRouter();

    const handleCourses = () => {
        router.push('/courses');
    };

    return (
        <section className='w-full bg-linear-to-t from-[#1e1e1e]/30 to-[#000000] py-16 px-5 md:px-10'>
            <div className='w-full max-w-[1600px] mx-auto mb-16'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeIn' }}
                    className='w-fit p-2 px-3 border border-[#1e1e1e] flex items-center justify-center rounded-full gap-2 mx-auto mb-[24px]'
                >
                    <Sparkles color='#ff851b' size='xs' />
                    <span className='text-sm text-[#A3A3A3] font-medium'>
                        Learn. Build. Improve
                    </span>
                </motion.div>
                <div className='space-y-4'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeIn' }}
                        className='text-4xl font-bold text-[#E5E5E5] max-w-[700px] mx-auto text-center sm:text-[50px] sm:leading-16'
                    >
                        Discover Skills That Power the Digital World
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeIn' }}
                        className='text-base text-[#A3A3A3] max-w-[575px] text-center mx-auto'
                    >
                        Learn modern skills with practical, real-world
                        experience. Build projects, grow faster, and become
                        industry ready with SkillSphere.
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeIn' }}
                    className='max-w-fit mx-auto flex items-center justify-center flex-wrap gap-4 mt-[36px]'
                >
                    <Button onClick={handleCourses} variant='primary' size='md'>
                        Get Started
                    </Button>
                    <Button
                        onClick={handleCourses}
                        variant='secondary'
                        size='md'
                    >
                        Explore Courses
                    </Button>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                className='w-full max-w-5xl mx-auto p-5 bg-[#1e1e1e]/50 border border-[#1e1e1e] rounded-4xl'
            >
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
            </motion.div>
        </section>
    );
};

export default HeroBanner;
