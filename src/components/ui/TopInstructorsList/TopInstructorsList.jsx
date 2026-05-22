import InstructorCard from '../InstructorCard/InstructorCard';

const TopInstructorsList = () => {
    return (
        <div className='w-full max-w-[600px] mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:max-w-[900]'>
            <InstructorCard
                src='/images/instructors/zakaria-ahmed.png'
                name='Zakaria Ahmed'
                alt='instructor zakaria ahmed'
                experts='AI & Software Engineering'
            />
            <InstructorCard
                src='/images/instructors/zainab-rahman.png'
                name='Zainab Rahman'
                alt='instructor zainab rahman'
                experts='Cyber Security Engineer'
            />
            <InstructorCard
                src='/images/instructors/sheikh-hakim.png'
                name='Sheikh Hakim'
                alt='instructor sheikh hakim'
                experts='Robotics Engineering'
            />
        </div>
    );
};

export default TopInstructorsList;
