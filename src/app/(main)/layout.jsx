import { Bricolage_Grotesque } from 'next/font/google';

import Header from '@/components/shared/Header/Header';
import { Toaster } from 'react-hot-toast';

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
            <Toaster position='bottom-left'/>
        </div>
    );
};

export default MainLayout;
