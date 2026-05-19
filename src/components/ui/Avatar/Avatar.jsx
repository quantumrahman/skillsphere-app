'use client';

import { User } from '@boxicons/react';
import Image from 'next/image';
import { useState } from 'react';

const Avatar = ({
    src,
    text = '',
    placeholder = false,
    icon = false,
    size = 'sm',
    name = '',
    variant = 'primary',
}) => {
    const [error, setError] = useState(false);

    const baseStyle = `border rounded-full relative ${(placeholder || text || icon) && 'flex items-center justify-center'}`;

    const variants = {
        primary: 'bg-[#1e1e1e] border-[#1e1e1e]',
        secondary: 'bg-[#1e1e1e]/30 border-[#1e1e1e]',
    };

    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
    };

    const initials = text.charAt(0).toUpperCase();

    if (!src || error) {
        return (
            <div className={`${baseStyle} ${sizes[size]} ${variants[variant]}`}>
                {icon && <User size='xs' color='#ffffff' />}
                {text && initials}
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={name}
            onError={() => setError(true)}
            priority={true}
            className={`${sizes[size]} ${variants[variant]} rounded-full object-cover`}
        />
    );
};

export default Avatar;
