import LearningTips from "@/components/layouts/LearningTips/LearningTips";
import PopularCourses from "@/components/layouts/PopularCourses/PopularCourses";

const HomePage = () => {
    return (
        <div className="w-full">
            <PopularCourses />
            <div className="w-full h-px bg-[#1e1e1e]"></div>
            <LearningTips />
        </div>
    )
};

export default HomePage;
