import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import ProfileDetails from '@/components/layouts/ProfileDetails/ProfileDetails';

const ProfilePage = () => {
    return (
        <div className='w-full'>
            <ProfileDetails />
            <CallToAction />
        </div>
    );
};

export default ProfilePage;
