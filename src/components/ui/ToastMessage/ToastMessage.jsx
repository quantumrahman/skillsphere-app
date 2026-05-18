import { AlertCircle, CheckCircle } from '@boxicons/react';

const ToastMessage = ({ message = '', type = 'success' }) => {
    return (
        <div className='p-3 bg-[#000000] border border-[#1e1e1e] rounded-full flex items-center justify-center gap-1'>
            {type === 'success' && (
                <CheckCircle pack='filled' color='#ff851b' size='xs' />
            )}
            {type === 'error' && (
                <AlertCircle pack='filled' color='#ff851b' size='xs' />
            )}
            <span className='text-xs text-[#ffffff]'>{message}</span>
        </div>
    );
};

export default ToastMessage;
