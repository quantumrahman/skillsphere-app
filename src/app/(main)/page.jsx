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
            <div className='w-full h-px bg-[#1e1e1e]'></div>
            <LearningTips />
            <TopInstructors />
            <div className='w-full h-px bg-[#1e1e1e]'></div>
            <TrendingCourses />
            <CallToAction />
        </div>
    );
};

export default HomePage;
