import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import HeroBanner from '@/components/layouts/HeroBanner/HeroBanner';
import LearningTips from '@/components/layouts/LearningTips/LearningTips';
import PopularCourses from '@/components/layouts/PopularCourses/PopularCourses';
import TopInstructors from '@/components/layouts/TopInstructors/TopInstructors';
import TrendingCourses from '@/components/layouts/TrendingCourses/TrendingCourses';

const HomePage = () => {
    return (
        <div className='w-full'>
            <HeroBanner />
            <PopularCourses />
            <LearningTips />
            <TopInstructors />
            <TrendingCourses />
            <CallToAction />
        </div>
    );
};

export default HomePage;
