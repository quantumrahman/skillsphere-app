import AllCourse from '@/components/layouts/AllCourses/AllCourses';
import CallToAction from '@/components/layouts/CallToAction/CallToAction';

const CoursesPage = () => {
    return (
        <div className='w-full'>
            <AllCourse />
            <div className='w-full h-px bg-[#1e1e1e]'></div>
            <CallToAction />
        </div>
    );
};

export default CoursesPage;
