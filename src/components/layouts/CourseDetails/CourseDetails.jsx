import DetailsContent from '@/components/ui/DetailsContent/DetailsContent';
import { getCourses } from '@/lib/get-courses';

import slugify from 'slugify';

const CourseDetails = async ({ slug }) => {
    const { courses } = await getCourses(
        'https://skillsphere-rrdev.vercel.app/api/courses',
    );

    const findCourse = courses.find(
        (course) =>
            slugify(course?.title, {
                replacement: '-',
                remove: undefined,
                lower: true,
                strict: false,
                trim: true,
            }) === slug,
    );

    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <DetailsContent course={findCourse} />
        </section>
    );
};

export default CourseDetails;
