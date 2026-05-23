import NotFoundContent from '@/components/ui/NotFoundContent/NotFoundContent';

export const metadata = {
    title: '404 | Page Not Found | SkillSphere',
    description:
        'Oops! The page you are looking for does not exist or has been moved. Please check the URL or return to our homepage.',
    authors: [{ name: 'Rakibul Rahman' }],
    metadataBase: new URL('https://skillsphere-rrdev.vercel.app'),
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: '404 - Page Not Found | SkillSphere',
        description: 'The requested page could not be found on SkillSphere.',
        url: 'https://skillsphere-rrdev.vercel.app',
        type: 'website',
    },
};

const NotFoundPage = () => {
    return <NotFoundContent />;
};

export default NotFoundPage;
