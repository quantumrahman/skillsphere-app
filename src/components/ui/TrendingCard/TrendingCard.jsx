import { Calendar } from '@boxicons/react';

const TrendingCard = () => {
    return (
        <div className='w-full p-5 bg-[#1e1e1e]/30 border border-[#1e1e1e] rounded-xl space-y-5'>
            <div className='w-full h-[250px] bg-[#000000] rounded-xl'></div>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold text-[#ffffff] lg:text-2xl'>
                    React.js Architecture & Design Patterns
                </h3>
                <div className='flex items-center justify-between'>
                    <p className='text-base text-[#A3A3A3]'>Rakibul Rahman</p>
                    <div className='flex items-center justify-center gap-2'>
                        <Calendar size='xs' color='#ffffff' />
                        <span className='text-base text-[#ffffff] mt-0.5'>
                            March 13, 2026
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;
