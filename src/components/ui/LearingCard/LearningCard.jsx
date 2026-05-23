'use client';

import { motion } from 'motion/react';

const LearningCard = ({ title = '', paragraph = '', icon, className = '' }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: 'easeIn',
            }}
            viewport={{ once: true }}
            className={`w-full p-8 md:p-10 bg-[#1e1e1e]/30 rounded-xl relative overflow-hidden ${className}`}
        >
            <div className='space-y-4 relative inset-0 z-10'>
                <h2 className='text-2xl font-bold text-[#ffffff] md:text-3xl'>
                    {title}
                </h2>
                <p className='text-base text-[#A3A3A3]'>{paragraph}</p>
            </div>
            <div className='absolute top-1/2 right-0 transform -translate-y-1/2 md:translate-x-1/2'>
                {icon}
            </div>
        </motion.div>
    );
};

export default LearningCard;
