import { BeatLoader } from 'react-spinners';
import CourseCard from '../CourseCard/CourseCard';

const AllCourseList = ({ isLoading, courses }) => {
    if (isLoading) {
        return (
            <div className='w-full max-w-[1400px] min-h-[300px] mx-auto flex items-center justify-center'>
                <BeatLoader size={10} color='#ff851b' />
            </div>
        );
    }

    return (
        <div className='w-full max-w-[1400px] min-h-[300px] mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3'>
            {courses.length > 0 ? (
                courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))
            ) : (
                <div className='col-span-full flex items-center justify-center'>
                    <p className='text-sm text-[#A3A3A3] font-medium md:text-base lg:text-lg'>
                        No courses found
                    </p>
                </div>
            )}
        </div>
    );
};

export default AllCourseList;
