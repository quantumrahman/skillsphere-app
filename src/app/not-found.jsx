'use client';

import { motion } from 'motion/react';
import { redirect } from 'next/navigation';

import Button from '@/components/ui/Button/Button';

const NotFoundPage = () => {
    const handleBackHome = () => {
        redirect('/');
    };

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center text-center space-y-4'>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'
            >
                4<span className='text-[#ff851b]'>0</span>4
            </motion.h2>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'
            >
                Oops! Page Not Found
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                className='max-w-xl mx-auto text-base text-[#A3A3A3]'
            >
                {`Sorry, the page you are looking for doesn't exist or has been moved. Please check your keywords.`}
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, ease: 'easeIn' }}
                className='w-fit mx-auto'
            >
                <Button variant='secondary' size='md' onClick={handleBackHome}>
                    Back to Home
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;
