import { Github, HeadphoneMic, Linkedin } from '@boxicons/react';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full px-5 bg-[#1e1e1e]/30 md:px-10'>
            <div className='w-full max-w-[1600px] mx-auto'>
                <footer className='w-full pt-20'>
                    <div className='w-full flex flex-col items-center justify-between gap-10 lg:gap-0 lg:flex-row'>
                        <div className='w-full flex items-center justify-center lg:justify-start'>
                            <div className='w-fit space-x-[13px] flex'>
                                <Link
                                    href={'/'}
                                    className='text-base text-[#A3A3A3] hover:text-[#ffffff] flex items-center gap-1'
                                >
                                    <HeadphoneMic pack='filled' size='xs' />
                                    1886
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-base text-[#A3A3A3] hover:text-[#ffffff]'
                                >
                                    support@skillsphere.com
                                </Link>
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <div className='w-fit h-auto'>
                                <Image
                                    src={'/images/logo.png'}
                                    alt='logo'
                                    width={250}
                                    height={250}
                                    priority={true}
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <div className='w-full flex items-center justify-center lg:justify-end'>
                            <div className='w-fit space-x-[13px]'>
                                <Link
                                    href={'/'}
                                    className='text-base text-[#A3A3A3] hover:text-[#ffffff]'
                                >
                                    Terms & Conditions
                                </Link>
                                <Link
                                    href={'/'}
                                    className='text-base text-[#A3A3A3] hover:text-[#ffffff]'
                                >
                                    Privacy policy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full py-5 border-t border-[#1e1e1e] flex flex-col gap-3 items-center justify-between mt-10 md:flex-row'>
                        <div className='w-fit space-x-2 flex items-center justify-center'>
                            <Link
                                href={'/'}
                                className='inline-block p-1.5 bg-[#1e1e1e] rounded-full text-[#ffffff] transition-colors duration-200 ease-in-out hover:bg-[#ff851b] hover:text-[#000000]'
                            >
                                <Linkedin size='xs' />
                            </Link>
                            <Link
                                href={'/'}
                                className='inline-block p-1.5 bg-[#1e1e1e] rounded-full text-[#ffffff] transition-colors duration-200 ease-in-out hover:bg-[#ff851b] hover:text-[#000000]'
                            >
                                <Github size='xs' />
                            </Link>
                        </div>
                        <div className='w-fit text-center'>
                            <span className='text-sm text-[#A3A3A3]'>
                                &copy; {new Date().getFullYear()} Copyright.
                                SkillSphere by Rakibul Rahman
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
