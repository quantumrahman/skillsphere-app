const Badge = ({ children, variant = 'primary', className }) => {
    const baseStyle =
        'inline-block py-1.5 px-3 rounded-full text-sm text-[#ff851b]';

    const variants = {
        primary: 'bg-[#ff851b]/10',
        outline: 'bg-[#ff851b]/10 border border-[#ff851b]/50',
    };

    return (
        <div className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};

export default Badge;
