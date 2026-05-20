import Button from '@/components/ui/Button/Button';

const CallToAction = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-10'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    Learn. Build. Level Up
                </h2>
                <p className='max-w-2xl mx-auto text-base text-[#A3A3A3]'>
                    SkillSphere helps you turn ideas into real skills with
                    hands-on courses and structured learning paths. Start your
                    journey and unlock new opportunities in tech.
                </p>
            </div>
            <div className='w-fit mx-auto'>
                <Button variant='primary' size='md'>
                    Explore Courses
                </Button>
            </div>
        </section>
    );
};

export default CallToAction;
