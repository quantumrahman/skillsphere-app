import LearningTipsList from '@/components/ui/LearningTipsList/LearningTipsList';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const LearningTips = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'Learn Smarter, Not Harder'}
                paragraph={`Learn smarter with simple strategies that improve focus,
                    retention, and consistency. Apply these tips daily to stay
                    motivated and make steady progress toward your goals.`}
            />
            <LearningTipsList />
        </section>
    );
};

export default LearningTips;
