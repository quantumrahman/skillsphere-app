import PopularCoursesList from '@/components/ui/PopularCoursesList/PopularCoursesList';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const PopularCourses = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'Level Up Your Skills'}
                paragraph={`Discover top courses designed to boost your skills and help you
                grow faster in your career. Start learning today and take a
                confident step toward your goals.`}
            />
            <PopularCoursesList />
        </section>
    );
};

export default PopularCourses;
