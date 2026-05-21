import { PencilSparkles } from '@boxicons/react';

import Image from 'next/image';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';

const ProfileCard = () => {
    return (
        <div>
            <div className='relative mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-[#1e1e1e] bg-[#000000] shadow-xl'>
                <Image
                    src='/images/instructors/hajar-sheikh.webp'
                    alt='Rakib Hasan'
                    fill
                    className='object-cover'
                />
            </div>
            <div className='text-center space-y-3 my-5'>
                <h1 className='text-2xl text-[#ffffff] sm:text-3xl font-bold break-words'>
                    Hajar Sheikh Hala
                </h1>
                <Badge>Learn. Build. Improve</Badge>
                <p className='text-sm text-[#A3A3A3] sm:text-base md:text-lg'>
                    FullStack Developer & Learning Enthusiast
                </p>
                <p className='text-xs text-[#A3A3A3] sm:text-sm'>
                    hajarsheikh@hala.com
                </p>
            </div>
            <div className='w-fit mx-auto'>
                <Button variant='secondary' size='md' className={'gap-2.5'}>
                    <PencilSparkles />
                    Edit Profile
                </Button>
            </div>
        </div>
    );
};

export default ProfileCard;
