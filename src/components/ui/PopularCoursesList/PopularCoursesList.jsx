import { getCourses } from '@/lib/get-courses';
import CourseCard from '../CourseCard/CourseCard';

const PopularCoursesList = async () => {
    const { courses } = await getCourses(
        'https://skillsphere-rrdev.vercel.app/api/courses',
    );

    const popularCourses = courses
        .filter((course) => course.rating > 4.7)
        .slice(0, 3);

    return (
        <div className='w-full max-w-[1400px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {popularCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
            ))}
        </div>
    );
};

export default PopularCoursesList;
