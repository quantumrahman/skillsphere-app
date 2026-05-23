'use client';

import { motion } from 'motion/react';

import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from '@/components/ui/RegisterForm/RegisterForm';
import GoogleButton from '@/components/ui/GoogleButton/GoogleButton';

const RegisterPage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-[350px] flex items-center flex-col'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                    className='w-fit h-auto'
                >
                    <Image
                        src={'/images/logo.png'}
                        alt='logo'
                        width={220}
                        height={220}
                        priority={true}
                        className='object-contain'
                    />
                </motion.div>
                <div className='w-full mt-12'>
                    <RegisterForm />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                    className='w-full text-center my-5'
                >
                    <span className='text-sm text-[#ffffff]'>
                        {'Alread have an account'}{' '}
                        <Link
                            href={'/auth/login'}
                            className='text-[#ff851b] underline'
                        >
                            Login
                        </Link>
                    </span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeIn',
                    }}
                    className='w-full'
                >
                    <GoogleButton />
                </motion.div>
            </div>
        </div>
    );
};

export default RegisterPage;
