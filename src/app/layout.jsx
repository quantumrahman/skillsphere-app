import { Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

import AuthProvider from '@/provider/AuthProvider';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere - Online Learning Platform',
    description: '',
};

const RootLayout = ({ children }) => {
    return (
        <html
            lang='en'
            className={`${bricolageGrotesque.variable} h-full antialiased bg-[#000000]`}
        >
            <body className='min-h-full'>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
};

export default RootLayout;
