'use client';

import { motion } from 'motion/react';

import Image from 'next/image';
import LoginForm from '@/components/ui/LoginForm/LoginForm';
import Link from 'next/link';
import GoogleButton from '@/components/ui/GoogleButton/GoogleButton';

const LoginPage = () => {
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
                    <LoginForm />
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
                        {"Don't have an account?"}{' '}
                        <Link
                            href={'/auth/register'}
                            className='text-[#ff851b] underline'
                        >
                            Register
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

export default LoginPage;
