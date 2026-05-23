import AllCourse from '@/components/layouts/AllCourses/AllCourses';
import CallToAction from '@/components/layouts/CallToAction/CallToAction';

export const metadata = {
    title: 'Courses | SkillSphere',
    description:
        'Explore our wide range of online courses in web development, programming, and modern tech skills.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'Courses | SkillSphere',
        description:
            'Browse and enroll in SkillSphere courses to level up your tech career.',
        url: 'https://skillsphere-rrdev.vercel.app/courses',
        type: 'website',
    },
};

const CoursesPage = () => {
    return (
        <div className='w-full'>
            <AllCourse />
            <CallToAction />
        </div>
    );
};

export default CoursesPage;
