import { BeatLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <BeatLoader size={12} color='#ff851b' />
        </div>
    );
};

export default LoadingPage;
