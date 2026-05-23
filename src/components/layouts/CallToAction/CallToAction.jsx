'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button/Button';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const CallToAction = () => {
    const router = useRouter();

    const handleCourse = () => {
        router.push('/courses');
    };

    return (
        <section className='py-[56px] bg-[#000000] px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'Learn. Build. Level Up'}
                paragraph={`SkillSphere helps you turn ideas into real skills with
                    hands-on courses and structured learning paths. Start your
                    journey and unlock new opportunities in tech.`}
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: 'easeIn',
                }}
                viewport={{ once: true }}
                className='w-fit mx-auto'
            >
                <Button onClick={handleCourse} variant='primary' size='md'>
                    Explore Courses
                </Button>
            </motion.div>
        </section>
    );
};

export default CallToAction;
