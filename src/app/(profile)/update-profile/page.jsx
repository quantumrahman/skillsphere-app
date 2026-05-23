'use client';

import { motion } from 'motion/react';

import UpdateForm from '@/components/ui/UpdateForm/UpdateForm';
import Link from 'next/link';

const UpdateProfilePage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center px-5'>
            <div className='w-full max-w-[350px]'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                    className='w-full text-center'
                >
                    <h3 className='text-base font-semibold text-[#ffffff] sm:text-lg md:text-xl'>
                        Update Profile
                    </h3>
                    <p className='text-sm text-[#A3A3A3] mt-3 max-w-[300px] mx-auto'>
                        Update your profile name and photo anytime to keep your
                        account information current and personalized.
                    </p>
                </motion.div>
                <div className='w-full mt-12'>
                    <UpdateForm />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                    className='w-full text-center mt-5'
                >
                    <span className='text-sm text-[#ffffff]'>
                        {'No changes made. Go back to'}{' '}
                        <Link
                            href={'/profile'}
                            className='text-[#ff851b] underline'
                        >
                            profile.
                        </Link>
                    </span>
                </motion.div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
