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
    title: 'SkillSphere | Modern Online Learning Platform',
    description:
        'SkillSphere offers high-quality online courses to help you learn modern tech skills and advance your career.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    openGraph: {
        title: 'SkillSphere | Learn Tech Skills Online',
        description:
            'Join SkillSphere and start learning modern technology courses today.',
        url: 'https://skillsphere-rrdev.vercel.app',
        type: 'website',
    },
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
