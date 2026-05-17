'use client';

import { AlertCircle, Eye, EyeSlash } from '@boxicons/react';
import { useState } from 'react';

const RegisterForm = () => {
    const [togglePassword, setTogglePassword] = useState(false);

    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

    return (
        <form>
            <div className='space-y-1.5'>
                <div className='w-full flex items-center justify-center gap-3'>
                    <div className='w-full space-y-1.5'>
                        <input
                            type='text'
                            aria-label='input'
                            placeholder='Enter your name'
                            className='w-full py-3 px-4 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none focus:border-[#ff851b]'
                        />
                        <div className='w-full h-5'>
                            {/* <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                <AlertCircle pack='filled' color='red' size='xs' />
                                Please enter your password.
                            </span> */}
                        </div>
                    </div>
                    <div className='w-full space-y-1.5'>
                        <input
                            type='text'
                            aria-label='input'
                            placeholder='Enter photo url'
                            className='w-full py-3 px-4 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none focus:border-[#ff851b]'
                        />
                        <div className='w-full h-5'>
                            {/* <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                                <AlertCircle pack='filled' color='red' size='xs' />
                                Please enter your password.
                            </span> */}
                        </div>
                    </div>
                </div>
                <div className='w-full space-y-1.5'>
                    <input
                        type='text'
                        aria-label='input'
                        placeholder='Enter your email'
                        className='w-full py-3 px-4 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none focus:border-[#ff851b]'
                    />
                    <div className='w-full h-5'>
                        {/* <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                            <AlertCircle pack='filled' color='red' size='xs' />
                            Please enter your password.
                        </span> */}
                    </div>
                </div>
                <div className='w-full space-y-1.5'>
                    <div className='relative'>
                        <input
                            type={togglePassword ? 'text' : 'password'}
                            aria-label='input'
                            placeholder='Enter your password'
                            className='w-full py-3 pl-4 pr-13 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-full text-sm font-normal text-[#ffffff] caret-[#ff851b] placeholder:text-[#ffffff]/30 focus:outline-none focus:border-[#ff851b]'
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
                        {/* <span className='flex items-center gap-1 text-sm text-red-500 justify-end'>
                            <AlertCircle pack='filled' color='red' size='xs' />
                            Please enter your password.
                        </span> */}
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
