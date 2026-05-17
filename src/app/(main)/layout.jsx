import { Geist } from 'next/font/google';

const geist = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere',
    description: '',
};

const MainLayout = ({ children }) => {
    return (
        <div className={`w-full min-h-screen antialiased ${geist.variable}`}>
            {children}
        </div>
    );
};

export default MainLayout;
