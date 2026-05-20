import TrendingCard from '../TrendingCard/TrendingCard';

const TrendingCoursesList = () => {
    return (
        <div className='w-full max-w-[1600px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
        </div>
    );
};

export default TrendingCoursesList;
