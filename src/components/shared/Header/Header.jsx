import DesktopNavbar from '@/components/ui/DesktopNavbar/DesktopNavbar';
import MobileNavbar from '@/components/ui/MobileNavbar/MobileNavbar';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='w-full px-5 md:px-10 py-3 bg-[#1e1e1e]/30 border-b border-[#1e1e1e]'>
            <header className='w-full flex items-center justify-between'>
                <div className='w-fit lg:w-full'>
                    <div className='w-fit h-auto'>
                        <Image
                            src={'/images/logo.png'}
                            alt='logo'
                            width={200}
                            height={200}
                            priority={true}
                            className='object-contain'
                        />
                    </div>
                </div>
                <DesktopNavbar />
                <MobileNavbar />
            </header>
        </div>
    );
};

export default Header;
