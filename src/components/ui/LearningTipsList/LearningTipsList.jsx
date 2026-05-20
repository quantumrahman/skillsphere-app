import { Core, Reading, Timer } from '@boxicons/react';
import LearningCard from '../LearingCard/LearningCard';

const LearningTipsList = () => {
    return (
        <div className='w-full max-w-[1100px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2'>
            <LearningCard
                title='Master Your Time'
                paragraph='Good time management helps you balance study and personal
                    life. Techniques like the Pomodoro method, daily planning,
                    and setting priorities make your time more productive and
                    organized.'
                icon={<Timer color='#1e1e1e' size='4xl' />}
            />
            <LearningCard
                title='Smart Study Techniques'
                paragraph='Using effective study techniques helps you learn more in
                    less time. Methods like active recall, spaced repetition,
                    and summarizing notes improve understanding and strengthen
                    long-term memory.'
                icon={<Reading color='#1e1e1e' size='4xl' />}
            />
            <LearningCard
                title='Stay Consistent & Focused'
                paragraph='Consistency is key to achieving your goals. Creating a
                    distraction-free environment and following a regular study
                    routine helps improve focus and ensures steady progress over
                    time.'
                icon={<Core color='#1e1e1e' size='4xl' />}
                className='md:col-span-2'
            />
        </div>
    );
};

export default LearningTipsList;
