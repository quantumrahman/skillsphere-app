import TrendingCoursesList from '@/components/ui/TrendingCoursesList/TrendingCoursesList';

const TrendingCourses = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-[48px]'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    New & Noteworthy
                </h2>
                <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                    Explore what’s new and improving on Skillsphere. We
                    regularly add fresh courses and learning materials so you
                    can always stay ahead with the latest skills and trends.
                </p>
            </div>
            <TrendingCoursesList />
        </section>
    );
};

export default TrendingCourses;
