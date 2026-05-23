import CallToAction from '@/components/layouts/CallToAction/CallToAction';
import ProfileDetails from '@/components/layouts/ProfileDetails/ProfileDetails';

export const metadata = {
    title: 'Profile | SkillSphere',
    description:
        'View and manage your SkillSphere profile, track your learning progress, and access your enrolled courses.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'Profile | SkillSphere',
        description: 'Your SkillSphere profile dashboard.',
        url: 'https://skillsphere-rrdev.vercel.app/profile',
        type: 'website',
    },
};

const ProfilePage = () => {
    return (
        <div className='w-full'>
            <ProfileDetails />
            <CallToAction />
        </div>
    );
};

export default ProfilePage;
