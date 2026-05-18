'use client';

import { FcGoogle } from 'react-icons/fc';
import { socialLogin } from '@/lib/social-login';

const GoogleButton = () => {
    const handleSocialLogin = () => {
        socialLogin('google');
    };

    return (
        <div className='w-full flex items-center justify-center gap-3'>
            <div className='w-full h-px bg-[#1e1e1e]'></div>
            <button
                type='button'
                aria-label='button'
                role='button'
                onClick={handleSocialLogin}
                className='p-2.5 bg-transparent border border-[#1e1e1e] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e]/30'
            >
                <FcGoogle size={20} />
            </button>
            <div className='w-full h-px bg-[#1e1e1e]'></div>
        </div>
    );
};

export default GoogleButton;
