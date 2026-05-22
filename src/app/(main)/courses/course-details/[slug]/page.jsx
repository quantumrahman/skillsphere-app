import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import CourseDetails from '@/components/layouts/CourseDetails/CourseDetails';

const CourseDetailsPage = async ({ params }) => {
    const { slug } = await params;
    return (
        <div className='w-full'>
            <CourseDetails slug={slug} />
            <CallToAction />
        </div>
    );
};

export default CourseDetailsPage;
