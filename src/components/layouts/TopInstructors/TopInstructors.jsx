import TopInstructorsList from "@/components/ui/TopInstructorsList/TopInstructorsList";

const TopInstructors = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 md:px-10 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-[48px]'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    Meet Our Experts
                </h2>
                <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                    Learn from experienced instructors who guide you with
                    practical knowledge. Get support to achieve your learning
                    goals faster.
                </p>
            </div>
            <TopInstructorsList />
        </section>
    );
};

export default TopInstructors;
