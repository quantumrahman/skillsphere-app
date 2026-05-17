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

export const RootLayout = ({ children }) => {
    return (
        <html lang='en' className={`${geist.variable} h-full antialiased`}>
            <body className='min-h-full'>{children}</body>
        </html>
    );
};
