import { Bricolage_Grotesque } from 'next/font/google';

import Header from '@/components/shared/Header/Header';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere',
    description: '',
};

const MainLayout = ({ children }) => {
    return (
        <div
            className={`${bricolageGrotesque.variable} w-full min-h-screen antialiased`}
        >
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
