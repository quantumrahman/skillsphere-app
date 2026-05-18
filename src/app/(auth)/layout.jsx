import { Bricolage_Grotesque } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere - Authentication',
    description: '',
};

const AuthLayout = ({ children }) => {
    return (
        <div
            className={`${bricolageGrotesque.variable} w-full min-h-screen relative antialiased`}
        >
            {children}
            <div className='absolute bottom-5 left-0 right-0 text-center'>
                <span className='text-sm text-[#ffffff]'>&copy; {new Date().getFullYear()} SkillSphere. By Rakibul Rahman</span>
            </div>
            <Toaster position='top-center' />
        </div>
    );
};

export default AuthLayout;
