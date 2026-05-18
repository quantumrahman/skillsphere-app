'use client';

import { AlertCircle, Eye, EyeSlash } from '@boxicons/react';
import { registerSchema } from '@/schema/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

import toast from 'react-hot-toast';
import ToastMessage from '../ToastMessage/ToastMessage';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const [togglePassword, setTogglePassword] = useState(false);

    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

    const handleOnSubmit = async (data) => {
        const { data: session, error } = await authClient.signUp.email({
            name: data?.name,
            email: data?.email,
            password: data?.password,
            image: data?.photo,
        });

        if (session) {
            toast.custom(
                <ToastMessage
                    message={'Account created successfully.'}
                    type='success'
                />,
            );
            redirect('/auth/login');
        }

        if (error) {
            toast.custom(
                <ToastMessage
                    message={'Account already exists. Please log in.'}
                    type='error'
                />,
            );
        }
    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className='space-y-1.5'>
                <div className='w-full flex items-center justify-center gap-3'>
                    <div className='w-full space-y-1.5'>
                        <input
                            type='text'
                            aria-label='input'
                            placeholder='Enter your name'
                            name='name'
                            className={`w-full py-3 px-4 bg-[#1e1e1e]/30 border rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none ${errors?.name ? 'border-red-500' : 'border-[#1e1e1e] focus:border-[#ff851b]'}`}
                            {...register('name')}
                        />
                        <div className='w-full h-5'>
                            {errors?.name && (
                                <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                    <AlertCircle
                                        pack='filled'
                                        color='red'
                                        size='xs'
                                    />
                                    {errors?.name?.message}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className='w-full space-y-1.5'>
                        <input
                            type='text'
                            aria-label='input'
                            placeholder='Enter photo url'
                            name='photo'
                            className={`w-full py-3 px-4 bg-[#1e1e1e]/30 border rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none ${errors?.photo ? 'border-red-500' : 'border-[#1e1e1e] focus:border-[#ff851b]'}`}
                            {...register('photo')}
                        />
                        <div className='w-full h-5'>
                            {errors?.photo && (
                                <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                    <AlertCircle
                                        pack='filled'
                                        color='red'
                                        size='xs'
                                    />
                                    {errors?.photo?.message}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='w-full space-y-1.5'>
                    <input
                        type='text'
                        aria-label='input'
                        placeholder='Enter your email'
                        name='email'
                        className={`w-full py-3 px-4 bg-[#1e1e1e]/30 border rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none ${errors?.email ? 'border-red-500' : 'border-[#1e1e1e] focus:border-[#ff851b]'}`}
                        {...register('email')}
                    />
                    <div className='w-full h-5'>
                        {errors?.email && (
                            <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                <AlertCircle
                                    pack='filled'
                                    color='red'
                                    size='xs'
                                />
                                {errors?.email?.message}
                            </span>
                        )}
                    </div>
                </div>
                <div className='w-full space-y-1.5'>
                    <div className='relative'>
                        <input
                            type={togglePassword ? 'text' : 'password'}
                            aria-label='input'
                            placeholder='Enter your password'
                            name='password'
                            className={`w-full py-3 px-4 bg-[#1e1e1e]/30 border rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none ${errors?.password ? 'border-red-500' : 'border-[#1e1e1e] focus:border-[#ff851b]'}`}
                            {...register('password')}
                        />
                        <button
                            type='button'
                            aria-label='button'
                            role='button'
                            onClick={handleTogglePassword}
                            className='absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer'
                        >
                            {togglePassword ? (
                                <EyeSlash color='#1e1e1e' />
                            ) : (
                                <Eye color='#1e1e1e' />
                            )}
                        </button>
                    </div>
                    <div className='w-full h-5'>
                        {errors?.password && (
                            <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                <AlertCircle
                                    pack='filled'
                                    color='red'
                                    size='xs'
                                />
                                {errors?.password?.message}
                            </span>
                        )}
                    </div>
                </div>
                <button
                    type='submit'
                    aria-label='button'
                    role='button'
                    className='w-full py-3 px-4 bg-[#ff851b] border border-[#ff851b] rounded-full text-sm font-semibold text-[#000000] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#ff8b26]'
                >
                    Register
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
