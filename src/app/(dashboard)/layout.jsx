import { Bricolage_Grotesque } from 'next/font/google';

const bricolageGrotesque = Bricolage_Grotesque({
    variable: '--font-bricolage-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: 'SkillSphere',
    description: '',
};

const DashboardLayout = ({ children }) => {
    return (
        <div
            className={`${bricolageGrotesque.variable} w-full min-h-screen antialiased`}
        >
            {children}
        </div>
    );
};

export default DashboardLayout;
