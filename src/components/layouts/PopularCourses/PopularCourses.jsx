import PopularCoursesList from '@/components/ui/PopularCoursesList/PopularCoursesList';

const PopularCourses = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-[48px]'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    Level Up Your Skills
                </h2>
                <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                    Discover top courses designed to boost your skills and help
                    you grow faster in your career. Start learning today and
                    take a confident step toward your goals.
                </p>
            </div>
            <PopularCoursesList />
        </section>
    );
};

export default PopularCourses;
