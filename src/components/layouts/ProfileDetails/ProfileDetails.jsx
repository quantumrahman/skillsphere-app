import ProfileContainer from "@/components/ui/ProfileContainer/ProfileContainer";

const ProfileDetails = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
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
}

export default ProfileDetails;
