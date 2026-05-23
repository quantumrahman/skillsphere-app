'use client';

import { PencilSparkles } from '@boxicons/react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { motion } from 'motion/react';

import Image from 'next/image';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import { useState } from 'react';

const ProfileCard = () => {
    const router = useRouter();
    const [error, setError] = useState(true);

    const { user, loading } = useAuth();

    if (loading) {
        return <BeatLoader size={10} color='#ffffff' />;
    }

    const handleEditProfile = () => {
        router.push('/update-profile');
    };

    return (
        <div className='w-full'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeIn' }}
                className='relative mx-auto w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-[#1e1e1e] bg-[#000000] shadow-xl'
            >
                <Image
                    src={error ? user?.image : '/images/default-avatar.png'}
                    alt='profile image'
                    fill={true}
                    onError={() => setError(false)}
                    className='object-cover'
                />
            </motion.div>
            <div className='text-center space-y-3 my-5'>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='text-2xl text-[#ffffff] sm:text-3xl font-bold break-words'
                >
                    {user?.name}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                >
                    <Badge>Learn. Build. Improve</Badge>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='text-sm text-[#A3A3A3] sm:text-base md:text-lg'
                >
                    FullStack Developer & Learning Enthusiast
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: 'easeIn',
                    }}
                    viewport={{ once: true }}
                    className='text-xs text-[#A3A3A3] sm:text-sm'
                >
                    {user?.email}
                </motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeIn',
                }}
                viewport={{ once: true }}
                className='w-fit mx-auto'
            >
                <Button
                    variant='secondary'
                    size='md'
                    className={'gap-2.5'}
                    onClick={handleEditProfile}
                >
                    <PencilSparkles />
                    Edit Profile
                </Button>
            </motion.div>
        </div>
    );
};

export default ProfileCard;
