'use client';

import { ArrowOutRightStrokeCircleHalf, Menu, X } from '@boxicons/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

import Button from '../Button/Button';
import Link from 'next/link';
import Avatar from '../Avatar/Avatar';
import toast from 'react-hot-toast';
import ToastMessage from '../ToastMessage/ToastMessage';

const MobileNavbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleRedirectLogin = () => {
        router.push('/auth/login');
    };

    const handleRedirectRegister = () => {
        router.push('/auth/register');
    };

    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    const handleLogout = async () => {
        const { data: success, error } = await authClient.signOut();

        if (success) {
            toast.custom(
                <ToastMessage message='Log out successfully.' type='success' />,
            );
        }

        if (error) {
            toast.custom(
                <ToastMessage
                    message='Something went wrong. Try again.'
                    type='error'
                />,
            );
        }
    };

    return (
        <div className='w-fit lg:w-full flex items-center justify-end'>
            <button
                type='button'
                aria-label='button'
                role='button'
                onClick={handleToggleMenu}
                className='w-10 h-10 bg-[#1e1e1e] rounded-full cursor-pointer flex items-center justify-center transition-colors duration-200 ease-in-out hover:bg-[#ff851b] group'
            >
                <Menu
                    pack='filled'
                    size='sm'
                    className='text-[#ffffff] group-hover:text-[#000000]'
                />
            </button>
            <div
                className={`w-full min-h-screen fixed top-0 right-0 transform bg-[#000000]/50 z-40 transition-transform duration-500 delay-500 ease-in-out ${toggleMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div
                    className={`w-full max-w-[350px] min-h-screen absolute top-0 right-0 transform bg-[#1e1e1e]/40 backdrop-blur-lg px-5 transition-transform duration-700 ease-in-out ${toggleMenu ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className='w-full h-[75px] flex items-center'>
                        <button
                            type='button'
                            aria-label='button'
                            role='button'
                            onClick={handleToggleMenu}
                            className='cursor-pointer flex items-center justify-center'
                        >
                            <X
                                pack='filled'
                                size='base'
                                className='text-[#ffffff] group-hover:text-[#000000]'
                            />
                        </button>
                    </div>
                    <div className='w-full flex items-center justify-between my-10'>
                        <div className='w-fit flex items-center justify-center gap-2'>
                            <Avatar
                                size='lg'
                                variant='secondary'
                                text='Rakibul Rahman'
                            />
                            <span className='text-xs text-[#ffffff]'>
                                <span className='text-[#A3A3A3]'>Welcome!</span>{' '}
                                <br />
                                Rakibul Rahman
                            </span>
                        </div>
                        <button
                            type='button'
                            aria-label='button'
                            role='button'
                            onClick={handleLogout}
                            className='w-fit flex items-center justify-center text-[#A3A3A3] cursor-pointer hover:text-[#ff851b]'
                        >
                            <ArrowOutRightStrokeCircleHalf size='sm' />
                        </button>
                    </div>
                    <div className='w-full lg:hidden'>
                        <nav className='space-y-4'>
                            <Link
                                href={'/'}
                                onClick={handleToggleMenu}
                                className={`block w-full py-3 pl-4 text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/' ? 'bg-[#1e1e1e] text-[#ffffff] pl-4' : 'bg-transparent text-[#A3A3A3]'}`}
                            >
                                Home
                            </Link>
                            <Link
                                href={'/courses'}
                                onClick={handleToggleMenu}
                                className={`block w-full py-3 pl-4 text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/courses' ? 'bg-[#1e1e1e] text-[#ffffff] pl-4' : 'bg-transparent text-[#A3A3A3]'}`}
                            >
                                Courses
                            </Link>
                            <Link
                                href={'/profile'}
                                onClick={handleToggleMenu}
                                className={`block w-full py-3 pl-4 text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/profile' ? 'bg-[#1e1e1e] text-[#ffffff] pl-4' : 'bg-transparent text-[#A3A3A3]'}`}
                            >
                                Profile
                            </Link>
                        </nav>
                    </div>
                    <div className='w-full space-y-5 mt-10'>
                        <Button
                            variant='secondary'
                            size='sm'
                            className={'w-full'}
                            onClick={() => {
                                (handleRedirectLogin(), handleToggleMenu());
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant='primary'
                            size='sm'
                            className={'w-full'}
                            onClick={() => {
                                (handleRedirectRegister(), handleToggleMenu());
                            }}
                        >
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavbar;
