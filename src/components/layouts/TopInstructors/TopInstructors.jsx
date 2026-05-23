import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';
import TopInstructorsList from '@/components/ui/TopInstructorsList/TopInstructorsList';

const TopInstructors = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'Meet Our Experts'}
                paragraph={`Learn from experienced instructors who guide you with
                    practical knowledge. Get support to achieve your learning
                    goals faster.`}
            />
            <TopInstructorsList />
        </section>
    );
};

export default TopInstructors;
