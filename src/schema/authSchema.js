import z from 'zod';

export const loginSchema = z.object({
    email: z
        .string({ message: 'Please enter your email.' })
        .trim()
        .email({ message: 'Please enter a valid email.' }),
    password: z
        .string({ message: 'Please enter your password.' })
        .trim()
        .min(8, { message: 'Min 8 chars password.' })
        .max(16, { message: 'Max 16 chars password.' }),
});

export const registerSchema = z.object({
    name: z
        .string({ message: 'Please enter your name.' })
        .trim()
        .min(1, { message: 'Name is required.' }),
    url: z
        .string({ message: 'Please enter your photo url.' })
        .trim()
        .url({ message: 'Please enter valid a url.' }),
    email: z
        .string({ message: 'Please enter your email.' })
        .trim()
        .email({ message: 'Please enter a valid email.' }),
    password: z
        .string({ message: 'Please enter your password.' })
        .trim()
        .min(8, { message: 'Min 8 chars password.' })
        .max(16, { message: 'Max 16 chars password.' }),
});
