import CourseCard from '../CourseCard/CourseCard';

const AllCourseList = () => {
    return (
        <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
};

export default AllCourseList;
