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
            message: 'Please enter your name.',
        })
        .min(4, {
            message: 'Name must be at least 20 characters.',
        })
        .regex(/^[A-Za-z\s]+$/, {
            message: 'Name can only contain letters and spaces',
        }),

    photo: z
        .string()
        .trim()
        .nonempty({
            message: 'Please enter photo your.',
        })
        .url({
            message: 'Please enter a valid url.',
        }),

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
            message: 'Password must be at least 8 characters.',
        }),
});
