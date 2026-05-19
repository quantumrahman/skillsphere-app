const LearningTipsList = () => {
    return (
        <div className='w-full max-w-[1100px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='w-full p-8 md:p-10 bg-[#1e1e1e]/30 rounded-xl space-y-4'>
                <h2 className='text-2xl font-bold text-[#ffffff] md:text-3xl'>
                    Smart Study Techniques
                </h2>
                <p className='text-base text-[#A3A3A3]'>
                    Using effective study techniques helps you learn more in
                    less time. Methods like active recall, spaced repetition,
                    and summarizing notes improve understanding and strengthen
                    long-term memory.
                </p>
            </div>
            <div className='w-full p-8 md:p-10 bg-[#1e1e1e]/30 rounded-xl space-y-4'>
                <h2 className='text-2xl font-bold text-[#ffffff] md:text-3xl'>
                    Master Your Time
                </h2>
                <p className='text-base text-[#A3A3A3]'>
                    Good time management helps you balance study and personal
                    life. Techniques like the Pomodoro method, daily planning,
                    and setting priorities make your time more productive and
                    organized.
                </p>
            </div>
            <div className='w-full p-8 md:p-10 bg-[#ff851b]/10 rounded-xl space-y-4 md:col-span-2'>
                <h2 className='text-2xl font-bold text-[#ffffff] md:text-3xl'>
                    Stay Consistent & Focused
                </h2>
                <p className='text-base text-[#A3A3A3]'>
                    Consistency is key to achieving your goals. Creating a
                    distraction-free environment and following a regular study
                    routine helps improve focus and ensures steady progress over
                    time.
                </p>
            </div>
        </div>
    );
};

export default LearningTipsList;
