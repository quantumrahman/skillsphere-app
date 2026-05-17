import { FcGoogle } from 'react-icons/fc';

import Image from 'next/image';
import LoginForm from '@/components/ui/LoginForm/LoginForm';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-[350px] flex items-center flex-col'>
                <div className='w-fit h-auto'>
                    <Image
                        src={'/images/logo.png'}
                        alt='logo'
                        width={220}
                        height={220}
                        priority={true}
                        className='object-contain'
                    />
                </div>
                <div className='w-full mt-12'>
                    <LoginForm />
                </div>
                <div className='w-full text-center my-5'>
                    <span className='text-sm text-[#ffffff]'>
                        {"Don't have an account?"}{' '}
                        <Link href={'/auth/register'} className='text-[#ff851b] underline'>Register</Link>
                    </span>
                </div>
                <div className='w-full flex items-center justify-center gap-3'>
                    <div className='w-full h-px bg-[#1e1e1e]'></div>
                    <button
                        type='button'
                        aria-label='button'
                        role='button'
                        className='p-2.5 bg-transparent border border-[#1e1e1e] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#1e1e1e]/30'
                    >
                        <FcGoogle size={20} />
                    </button>
                    <div className='w-full h-px bg-[#1e1e1e]'></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
