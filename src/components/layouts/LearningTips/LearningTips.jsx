import LearningTipsList from "@/components/ui/LearningTipsList/LearningTipsList";

const LearningTips = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-[48px]'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    Learn Smarter, Not Harder
                </h2>
                <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                    Learn smarter with simple strategies that improve focus,
                    retention, and consistency. Apply these tips daily to stay
                    motivated and make steady progress toward your goals.
                </p>
            </div>
            <LearningTipsList />
        </section>
    );
};

export default LearningTips;
