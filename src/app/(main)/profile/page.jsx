import ProfileContainer from "@/components/ui/ProfileContainer/ProfileContainer";

const ProfilePage = () => {
    return (
        <section className='py-[56px] bg-[#000000] px-5 lg:py-[112px]'>
            <div className='w-full text-center space-y-3 mb-[48px]'>
                <h2 className='max-w-2xl mx-auto text-3xl font-bold text-[#E5E5E5] md:text-[44px]'>
                    My Profile
                </h2>
                <p className='max-w-xl mx-auto text-base text-[#A3A3A3]'>
                    Manage your profile and track your learning journey.
                </p>
            </div>
            <ProfileContainer />
        </section>
    );
};

export default ProfilePage;
