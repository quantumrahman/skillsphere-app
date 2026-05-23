import ProfileContainer from '@/components/ui/ProfileContainer/ProfileContainer';
import SectionHeading from '@/components/ui/SectionHeading/SectionHeading';

const ProfileDetails = () => {
    return (
        <section className='py-[56px] bg-[#1e1e1e]/30 px-5 md:px-10 lg:py-[112px]'>
            <SectionHeading
                heading={'My Profile'}
                paragraph={`Manage your profile and track your learning journey.`}
            />
            <ProfileContainer />
        </section>
    );
};

export default ProfileDetails;
