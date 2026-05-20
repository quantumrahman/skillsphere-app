import InstructorCard from '../InstructorCard/InstructorCard';

const TopInstructorsList = () => {
    return (
        <div className='w-full max-w-[1200px] mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <InstructorCard
                src='/images/instructors/hajar-sheikh.webp'
                name='Hajar Sheikh'
                alt='instructor hajar sheikh'
                experts='AI & Software Engineering'
            />
            <InstructorCard
                src='/images/instructors/sidra-bint-rashid.webp'
                name='Sidra Bint Rashid'
                alt='instructor sidra bint rashid'
                experts='Senior Full-Stack Engineer'
            />
            <InstructorCard
                src='/images/instructors/hania-hussain.webp'
                name='Hania Hussain'
                alt='instructor hania hussian'
                experts='Software Architecture Expert'
            />
        </div>
    );
};

export default TopInstructorsList;
