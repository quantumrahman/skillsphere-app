import Image from 'next/image';
import Link from 'next/link';
import RegisterForm from '@/components/ui/RegisterForm/RegisterForm';
import GoogleButton from '@/components/ui/GoogleButton/GoogleButton';

const RegisterPage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='w-full max-w-[350px] flex items-center flex-col'>
                <div className='w-fit h-auto'>
                    <Image
                        src={'/images/logo.png'}
                        alt='logo'
                        width={220}
                        height={220}
                        priority={true}
                        className='object-contain'
                    />
                </div>
                <div className='w-full mt-12'>
                    <RegisterForm />
                </div>
                <div className='w-full text-center my-5'>
                    <span className='text-sm text-[#ffffff]'>
                        {'Alread have an account'}{' '}
                        <Link
                            href={'/auth/login'}
                            className='text-[#ff851b] underline'
                        >
                            Login
                        </Link>
                    </span>
                </div>
                <GoogleButton />
            </div>
        </div>
    );
};

export default RegisterPage;
