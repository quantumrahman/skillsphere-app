import UpdateForm from "@/components/ui/UpdateForm/UpdateForm";
import Link from "next/link";

const UpdateProfilePage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center px-5'>
            <div className='w-full max-w-[350px]'>
                <div className='w-full text-center'>
                    <h3 className='text-base font-semibold text-[#ffffff] sm:text-lg md:text-xl'>
                        Update Profile
                    </h3>
                    <p className='text-sm text-[#A3A3A3] mt-3'>
                        Update your profile name and photo anytime to keep your
                        account information current and personalized.
                    </p>
                </div>
                <div className='w-full mt-12'>
                    <UpdateForm />
                </div>
                <div className='w-full text-center mt-5'>
                    <span className='text-sm text-[#ffffff]'>
                        {'No changes made. Go back to'}{' '}
                        <Link
                            href={'/profile'}
                            className='text-[#ff851b] underline'
                        >
                            profile.
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
