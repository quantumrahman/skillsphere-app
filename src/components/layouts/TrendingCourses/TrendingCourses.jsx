import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import TrendingCoursesList from '@/components/ui/TrendingCoursesList/TrendingCoursesList';

const TrendingCourses = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'New & Noteworthy'}
                paragraph={`Explore what’s new and improving on Skillsphere. We
                    regularly add fresh courses and learning materials so you
                    can always stay ahead with the latest skills and trends.`}
            />
            <TrendingCoursesList />
        </section>
    );
};

export default TrendingCourses;
