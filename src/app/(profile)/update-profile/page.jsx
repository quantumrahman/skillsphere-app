import UpdateForm from "@/components/ui/UpdateForm/UpdateForm";

const UpdateProfilePage = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center px-5'>
            <div className='w-full max-w-[350px]'>
                <div className="w-full text-center">
                    <h3 className="text-base font-semibold text-[#ffffff] sm:text-lg md:text-xl">Update Profile</h3>
                </div>
                <div className="w-full mt-12">
                    <UpdateForm />
                </div>
            </div>
        </div>
    );
};

export default UpdateProfilePage;
