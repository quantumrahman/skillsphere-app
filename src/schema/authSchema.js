import z from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .trim()
        .nonempty({
            message: 'Please enter your email.',
        })
        .email({
            message: 'Please enter a valid email.',
        }),
    password: z
        .string()
        .trim()
        .nonempty({
            message: 'Please enter your password.',
        })
        .min(8, {
            message: 'Password min 8 chars.',
        }),
});

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .nonempty({
            message: 'Enter your name.',
        })
        .regex(/^[A-Za-z\s]+$/, {
            message: 'Name can only contain letters and spaces',
        }),

    photo: z
        .string()
        .trim()
        .nonempty({
            message: 'Enter your photo.',
        })
        .url({
            message: 'Enter a valid url.',
        })
        .refine(
            (url) => {
                return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url);
            },
            {
                message: 'URL must be an image',
            },
        ),

    email: z
        .string()
        .trim()
        .nonempty({
            message: 'Please enter your email.',
        })
        .email({
            message: 'Please enter a valid email.',
        }),

    password: z
        .string()
        .trim()
        .nonempty({
            message: 'Please enter your password.',
        })
        .min(8, {
            message: 'Password min 8 chars.',
        }),
});
