'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

const DesktopNavbar = () => {
    const pathname = usePathname();

    return (
        <div className='w-full hidden lg:flex items-center justify-center'>
            <nav>
                <Link
                    href={'/'}
                    className={`inline-flex items-center justify-center h-[40px] px-[25px] text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/' ? 'bg-[#1e1e1e] text-[#ffffff]' : 'bg-transparent text-[#A3A3A3]'}`}
                >
                    Home
                </Link>
                <Link
                    href={'/courses'}
                    className={`inline-flex items-center justify-center h-[40px] px-[25px] text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/courses' ? 'bg-[#1e1e1e] text-[#ffffff]' : 'bg-transparent text-[#A3A3A3]'}`}
                >
                    Courses
                </Link>
                <Link
                    href={'/profile'}
                    className={`inline-flex items-center justify-center h-[40px] px-[25px] text-sm transition-colors duration-100 ease-in-out rounded-full hover:text-[#ff851b] ${pathname === '/profile' ? 'bg-[#1e1e1e] text-[#ffffff]' : 'bg-transparent text-[#A3A3A3]'}`}
                >
                    Profile
                </Link>
            </nav>
        </div>
    );
};

export default DesktopNavbar;
