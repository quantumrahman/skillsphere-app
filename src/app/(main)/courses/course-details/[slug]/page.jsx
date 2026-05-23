import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import CourseDetails from '@/components/layouts/CourseDetails/CourseDetails';

export const metadata = {
    title: 'Course Details | SkillSphere',
    description:
        'View detailed course information, curriculum, requirements, and learning outcomes for your selected SkillSphere course.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'Course Details | SkillSphere',
        description:
            'Explore course curriculum and start your learning journey today.',
        url: 'https://skillsphere-rrdev.vercel.app',
        type: 'website',
    },
};

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
