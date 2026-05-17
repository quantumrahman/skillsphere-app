import { Geist } from 'next/font/google';

const geist = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere - Authentication',
    description: '',
};

const AuthLayout = ({ children }) => {
    return (
        <div
            className={`w-full min-h-screen relative antialiased ${geist.variable}`}
        >
            {children}
        </div>
    );
};

export default AuthLayout;
