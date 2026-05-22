import { getCourses } from '@/lib/get-courses';
import TrendingCard from '../TrendingCard/TrendingCard';

const TrendingCoursesList = async () => {
    const { courses } = await getCourses(
        'https://skillsphere-rrdev.vercel.app/api/courses',
    );

    return (
        <div className='w-full max-w-[1600px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {courses.slice(6, 9).map((course, idx) => (
                <TrendingCard key={idx} course={course} />
            ))}
        </div>
    );
};

export default TrendingCoursesList;
