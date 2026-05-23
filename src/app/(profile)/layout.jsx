import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Update Profile | SkillSphere',
    description:
        'Update your SkillSphere profile information, manage account settings, and personalize your learning experience.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'Update Profile | SkillSphere',
        description: 'Manage and update your SkillSphere profile settings.',
        url: 'https://skillsphere-rrdev.vercel.app/update-profile',
        type: 'website',
    },
};

const ProfileLayout = ({ children }) => {
    return (
        <div
            className={`${bricolageGrotesque.variable} w-full min-h-screen relative antialiased `}
        >
            {children}
            <div className='absolute bottom-5 left-0 right-0 text-center'>
                <span className='text-sm text-[#ffffff]'>
                    &copy; {new Date().getFullYear()} SkillSphere. By Rakibul
                    Rahman
                </span>
            </div>
            <Toaster position='top-center' />
        </div>
    );
};

export default ProfileLayout;
