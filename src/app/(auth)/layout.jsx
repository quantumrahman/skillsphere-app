import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Authentication | SkillSphere',
    description:
        'Sign in or create your SkillSphere account to access courses and track learning progress.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'Authentication | SkillSphere',
        description:
            'Sign in or create your SkillSphere account to continue your learning journey.',
        url: 'https://skillsphere-rrdev.vercel.app',
        type: 'website',
    },
};

const AuthLayout = ({ children }) => {
    return (
        <div
            className={`${bricolageGrotesque.variable} w-full min-h-screen relative antialiased px-5`}
        >
            {children}
            <div className='absolute bottom-5 left-0 right-0 text-center'>
                <span className='text-sm text-[#A3A3A3]'>
                    &copy; {new Date().getFullYear()} SkillSphere. By Rakibul
                    Rahman
                </span>
            </div>
            <Toaster position='top-center' />
        </div>
    );
};

export default AuthLayout;
