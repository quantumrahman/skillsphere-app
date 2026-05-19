'use client';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    className,
}) => {
    const baseStyle =
        'transition duration-200 ease-in-out cursor-pointer rounded-full flex items-center justify-center';

    const variants = {
        primary:
            'bg-[#ff851b] border border-[#ff851b] text-[#000000] hover:bg-[#ff8b26] hover:border-[#ff8b26]',
        secondary:
            'bg-[#1e1e1e]/30 border border-[#1e1e1e] text-[#ffffff] hover:bg-[#1e1e1e]/50',
        ghost: 'bg-[#1e1e1e]/30 border border-[#1e1e1e]/30 text-[#ffffff] hover:bg-[#1e1e1e]/50 hover:border-[#1e1e1e]/50',
    };

    const sizes = {
        xs: 'py-1 px-2 text-xs gap-1',
        sm: 'py-2 px-3 text-sm gap-1',
        md: 'py-[14px] px-4 text-base gap-2',
        lg: 'py-[18px] px-6 text-base gap-2',
    };

    return (
        <button
            type='button'
            aria-label='button'
            role='button'
            onClick={onClick}
            className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
