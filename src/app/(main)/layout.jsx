import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import '../globals.css';

import Header from '@/components/shared/Header/Header';
import Footer from '@/components/shared/Footer/Footer';

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
            <Footer />
            <Toaster position='bottom-left' />
        </div>
    );
};

export default MainLayout;
