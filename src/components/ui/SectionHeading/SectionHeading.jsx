'use client';

import { motion } from 'motion/react';

const SectionHeading = ({heading, paragraph}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className='w-full text-center space-y-3 mb-[48px]'
        >
            <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                {heading}
            </h2>
            <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                {paragraph}
            </p>
        </motion.div>
    );
};

export default SectionHeading;
