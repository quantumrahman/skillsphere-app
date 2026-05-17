import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere - Online Learning Platform',
    description: '',
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en' className={`${geist.variable} h-full antialiased bg-[#000]`}>
            <body className='min-h-full'>{children}</body>
        </html>
    );
};

export default RootLayout;
